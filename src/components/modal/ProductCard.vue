<template>
  <div>
    <!-- <button @click="check()">dsfghg</button> -->
    <li
      class="product-item"
      @mouseleave="hoveraddCartEd"
      style="width: 100%; display: inline-block"
    >
      <div class="product-item-info">
        <div class="product-item-photo" :class="{ toggle: clicked }">
          <!-- Hiển thị hình ảnh -->
          <router-link
            :to="`/product?key=${product.url_key}&product_sku=${product.sku}`"
            class="product-image-container"
          >
            <span class="product-image-wrapper">
              <img
                class="product-image-photo"
                :src="getProductImage"
                :alt="product.description"
              />
            </span>
          </router-link>
          <!-- Button thêm giỏ hàng -->
          <div
            v-if="getColor_Size.size && getColor_Size.size.length > 0"
            @click="checkStoreBySkus"
          >
            <button
              v-if="count"
              class="product-item-button-tocart"
              @click="clicked = !clicked"
              @mouseover="hoveraddCart = true"
            >
              <span>Thêm vào giỏ hàng</span>
            </button>
            <button
              v-if="!count"
              class="product-item-button-tocart"
              style="background-color: #e8e8ea; color: #333f48"
            >
              <span>Hết hàng</span>
            </button>
          </div>
          <div
            class="product-item-action-hover-side"
            v-if="product.type_id == 'configurable' && hoveraddCart"
          >
            <!-- Hiển thị ra các lựa chọn size -->
            <div
              class="swatch-attribute size"
              :class="checkSize == true ? 'not-selected' : ''"
            >
              <span
                class="swatch-attribute-label"
                v-if="getColor_Size.size && getColor_Size.size.length > 0"
                ><span>Vui lòng chọn size </span>
              </span>
              <div class="swatch-attribute-options">
                <div
                  v-for="attributeOption in getColor_Size.size"
                  :key="attributeOption.id"
                  :class="{
                    'swatch-option text': !isSizeSelected(attributeOption),
                    'swatch-option text selected':
                      isSizeSelected(attributeOption),
                    disabled: !isCheckDisableSize(attributeOption.label),
                  }"
                  @click="handleChangeSize(attributeOption)"
                >
                  {{ attributeOption.label }}
                </div>
              </div>
            </div>
            <button
              v-if="checkCart && count && dataCheckOptionInstock"
              @click="addCart"
              class="product-item-action action-tocart"
              :class="hoveraddCart && !checkSize ? checkHover : ''"
            >
              <span>Thêm vào giỏ</span>
            </button>
            <button
              v-if="!checkCart || (!count && dataCheckOptionInstock)"
              class="product-item-action action-tocart action-tocart-disable"
              :class="!hoveraddCart && !checkSize ? checkHover : ''"
            >
              <span>Hết hàng</span>
            </button>
          </div>
        </div>
        <div class="product-item-details">
          <div class="product-item-top">
            <div class="swatch-opt" v-if="product.type_id == 'configurable'">
              <div
                class="swatch-attribute color"
                :class="checkColor == true ? 'not-selected' : ''"
              >
                <div class="attribute-color">
                  <div class="swatch-attribute-options">
                    <div
                      v-for="attributeOption in getColor_Size.color.filter(
                        (attributeOption, idx) => idx < 4
                      )"
                      :key="attributeOption.id"
                      class="swatch-option color"
                      :class="
                        isColorSelected(attributeOption) ? 'selected' : ''
                      "
                      :style="getBgColorValue(attributeOption)"
                      @click="handleChangeColor(attributeOption)"
                    />
                    <div v-if="showMore">
                      <div
                        v-for="attributeOption in getColor_Size.color.filter(
                          (attributeOption, idx) => idx > 3
                        )"
                        :key="attributeOption.id"
                        class="swatch-option color"
                        :class="
                          isColorSelected(attributeOption) ? 'selected' : ''
                        "
                        :style="getBgColorValue(attributeOption)"
                        @click="handleChangeColor(attributeOption)"
                      />
                      <a
                        v-if="!showMore && getColor_Size.color.length > 4"
                        @click="swatchMore"
                        href="javascript:void(0)"
                        class="swatch-more"
                        ><span>+{{ getColor_Size.color.length - 4 }}</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 class="product-item-name">
            <router-link :to="product.url_key">
              {{ product.description }}
            </router-link>
          </h3>
          <div class="price-box" slot="price">
            <span class="normal-price">
              <span class="price">{{ product.price }}đ</span>
            </span>
          </div>
          <div class="progress">
            <div
              class="progress-bar"
              :style="`width: ${Math.round(
                (product.saleQty / product.dealQty) * 100
              )}%`"
            ></div>
          </div>

          <div class="progress-buy-text">
            Đã bán: <span class="value">{{ product.saleQty }} sp</span>
          </div>
        </div>
      </div>
    </li>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
// import local from "../../../config/local.json";
// console.log(local);
export default {
  props: {
    product: {
      type: [Array, Object],
      default: () => {},
    },
  },
  data() {
    return {
      dataCart: [],
      additem: {},
      qty: {},
      skus: "",
      checkCart: true,
      count: true,
      checkSize: null,
      checkColor: null,
      productImage: false,
      productChirdren: [],
      hoveraddCart: false,
      clicked: false,
      colorSize: {},
      showMore: false,
      checkHover: "hover",
      dataCheckOptionInstock: null,
      disableAddToCard: true,
      checkGetCurrentProduct: null,
      selectedOption: { color: null, size: null },
      urlSwatch: "https://media.canifa.com/attribute/swatch",
      checkstock: "http://118.68.218.45:8080/api/stock/list",
    };
  },
  // mounted() {
  //   this.loadDataCart();
  // },
  mounted() {
    // this.loadDataCart();
    // console.log("this.getColor_Size.color: ", this.getColor_Size.color);
    if (this.getColor_Size.color && this.getColor_Size.color[0]) {
      let options = this.getColor_Size.color[0];
      this.ChooseColorFirst(options);
    }
  },
  computed: {
    ...mapGetters(["totalQty", "addproduct", "microcart"]),
    productChirdrens() {
      return this.product.configurable_children;
    },
    getProductImage() {
      return (
        this.productImage ||
        "https://canifa.com/img/486/733/resize" + this.product?.image
      );
    },
    getProductSku() {
      const skuArr = this.product.sku.split("-");
      return skuArr?.length > 0 ? skuArr[0] : this.product.sku;
    },
    getSkus() {
      const skus = this.product.configurable_children.sku;
      return skus?.length > 0
        ? skus[0]
        : this.product.configurable_children.sku;
    },
    getChirdrenSkus() {
      let skus = "";
      this.product.configurable_children.forEach((val) => {
        skus += val.sku + ",";
      });
      return skus;
    },
    getColor_Size() {
      if (this.product && this.product.configurable_options) {
        this.product.configurable_options.forEach((configurableOption) => {
          const type = configurableOption.attribute_code;
          const filterVariants = configurableOption?.values?.map(
            ({ value_index, label }) => {
              return { id: value_index, label, type };
            }
          );
          this.colorSize[type] = filterVariants || [];
        });
      }
      return this.colorSize;
    },
    getAddItem() {
      let sku =
        this.getProductSku +
        (this.selectedOption?.color?.label
          ? "-" + this.selectedOption?.color?.label
          : "") +
        (this.selectedOption?.size?.label
          ? "-" + this.selectedOption.size.label
          : "-0000");
      let add = this.product.configurable_children.find((op) => op.sku == sku);
      // console.log(sku, this.productChirdrens);
      return add;
    },
  },
  methods: {
    check() {
      console.log("2", this.getColor_Size);
      // console.log(3, this.checkCart, this.count, this.dataCheckOptionInstock);
      // console.log(this.product, this.getColor_Size());
    },
    // async loadDataCart() {
    //   await this.$store.dispatch("getCart");
    // },
    swatchMore() {
      this.showMore = true;
    },
    // checkSkus(option) {
    //   let skus = "";
    //   this.getColor_Size.color.forEach((eColor) => {
    //     this.getColor_Size.size.forEach((eSize) => {
    //       skus = this.getProductSku + "-" + eColor.label + "-" + eSize.label;
    //     });
    //   });
    // },
    async checkStoreBySkus() {
      let response = await axios.get(
        `https://canifa.com/api/stock/list?skus=${this.getChirdrenSkus}`
      );
      this.qty = response.data.result;
      let data = [];
      this.qty.forEach((element) => {
        if (element.qty > 0 && element.is_in_stock) {
          data.push({
            sku: element.sku,
            checkStore: true,
          });
        } else {
          data.push({
            sku: element.sku,
            checkStore: false,
          });
        }
      });
      this.dataCheckOptionInstock = data;
      if (this.dataCheckOptionInstock?.length > 0) {
        let count = 0;
        this.dataCheckOptionInstock.forEach((element) => {
          if (!element.checkStore) {
            count += 1;
          }
        });
        // console.log("count: ", count);
        if (this.dataCheckOptionInstock?.length === count) {
          this.count = false; // Nếu khong con' size thì count= false
        }
      }
      if (
        !this.product.configurable_options.find(
          (option) => option.attribute_code === "size"
        )
      ) {
        this.selectedOption.size = "size";
        this.checkSize = false;
      }
      if (
        !this.product.configurable_options.find(
          (option) => option.attribute_code === "color"
        )
      ) {
        this.selectedOption.color = "color";
        this.checkColor = false;
      }
      if (this.checkCart && this.count) {
        this.checkHover = "active";
      }
      this.selectedOption.size
        ? (this.checkSize = false)
        : (this.checkSize = true);
      this.selectedOption.color
        ? (this.checkColor = false)
        : (this.checkColor = true);
      if (this.dataCheckOptionInstock) {
        let sku =
          this.getProductSku +
          (this.selectedOption?.color?.label
            ? "-" + this.selectedOption?.color?.label
            : "") +
          (this.selectedOption?.size?.label
            ? "-" + this.selectedOption.size.label
            : "-0000");
        // console.log("sku: ", sku);
        let stock = this.dataCheckOptionInstock.find((e) => e.sku == sku);
        // console.log("stock: ", stock);
        if (stock) {
          this.checkCart = stock?.checkStore;
          // console.log(" this.checkCart: ", this.checkCart);
        }
        // else {
        //   this.checkCart = false;
        // }
        // console.log(this.selectedOption, sku);
        // console.log(
        //   "this.checkCart: ",
        //   this.checkCart,
        //   this.count,
        //   this.checkHover,
        //   this.dataCheckOptionInstock
        // );
      }
    },
    hoveraddCartEd() {
      this.hoveraddCart = false;
      this.clicked = false;
      // console.log("this.clicked: ", this.clicked);
    },
    isColorSelected(val) {
      if (
        this.selectedOption.color &&
        parseInt(this.selectedOption.color?.id) === parseInt(val.id)
      ) {
        return true;
      } else return false;
    },
    isSizeSelected(val) {
      if (
        this.selectedOption.size &&
        parseInt(this.selectedOption.size?.id) === parseInt(val.id)
      ) {
        return true;
      } else return false;
    },
    getBgColorValue(property) {
      let color = { "background-color": "#000" };
      const colorList = this.product.configurable_options.find(
        (option) => option.attribute_code === "color"
      );
      // console.log("colorList: ", colorList);
      if (property && colorList?.values) {
        const attribute = colorList?.values.find(
          (option) => Number(option.value_index) === Number(property.id)
        );
        if (attribute?.swatch?.type >= 2 && attribute?.swatch?.value !== null) {
          color = {
            "background-image": `url("${this.urlSwatch}${attribute.swatch.value}")`,
          };
        } else if (attribute?.swatch?.value !== null) {
          color["background-color"] = attribute.swatch.value;
        }
      }

      // console.log(color);
      return color;
    },
    handleChangeColor(option) {
      // console.log(this.dataCheckOptionInstock);
      // if (!this.dataCheckOptionInstock) {
      //   this.checkStoreBySkus();
      // }
      this.checkStoreBySkus();
      this.productChirdren = this.productChirdrens.find(
        (val) => val.color == option.id
      );
      // console.log(option);
      this.productImage =
        "https://canifa.com/img/486/733/resize" + this.productChirdren.image;
      this.selectedOption.color = option;
      // console.log(this.productImage);
    },
    handleChangeSize(option) {
      this.checkStoreBySkus();
      // console.log(this.dataCheckOptionInstock);
      // if (!this.dataCheckOptionInstock) {
      //   this.checkStoreBySkus();
      // }
      this.productChirdren = this.productChirdrens.find(
        (val) => val.size == option.id
      );
      this.selectedOption.size = option;
      // console.log(" this.selectedOption: ", this.selectedOption);
    },

    async addCart() {
      if (
        this.checkCart &&
        this.count &&
        this.selectedOption.color &&
        this.selectedOption.size
      ) {
        try {
          this.getAddItem.styleColor =
            this.selectedOption.color.label.toLowerCase();
          this.getAddItem.styleSize = this.selectedOption.size.label;
          // this.getAddItem.qty = 1;
          console.log("this.getAddItem", this.getAddItem);
          this.$store.dispatch("addCart", this.getAddItem);
          this.hoveraddCart = !this.hoveraddCart;
          this.$store.dispatch("openMicrocart");
          // console.log("totalQty", this.totalQty);
        } catch (error) {
          console.log(error);
        }
      }
    },
    isCheckDisableSize(size) {
      if (this.dataCheckOptionInstock?.length > 0) {
        let sku =
          this.getProductSku +
          (this.selectedOption?.color?.label
            ? "-" + this.selectedOption.color.label
            : "") +
          "-" +
          size;
        let stock = this.dataCheckOptionInstock.find((e) => e.sku === sku);
        if (stock) {
          return stock?.checkStore;
        }
      }
      return true;
    },
    ChooseColorFirst(option) {
      this.selectedOption[option?.type] = option;
    },
  },
};
</script>

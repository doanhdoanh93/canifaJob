<template>
  <div class="wrapper">
    <comHeader />
    <!-- <button @click="check()">sdshdfkljdl</button> -->
    <main class="site-main" v-if="product">
      <div
        itemscope="itemscope"
        itemtype="http://schema.org/Product"
        class="page-product-top"
      >
        <div class="product-media">
          <div class="sf-gallery2 fotorama__wrap">
            <div class="sf-gallery__stage2 fotorama__stage">
              <!-- <VueSlickCarousel
                class="block-product-banner-slide"
                v-bind="slickBlockProductDetail"
              >
                <template>
                  <span type="button" class="slick-prev"><span /></span>
                </template>
                <template>
                  <span type="button" class="slick-next"><span /></span>
                </template>
                <div v-for="(img, i) in listImages" :key="i">
                  <img :src="img" alt="" />
                </div>
              </VueSlickCarousel> -->
              <img
                width="800"
                height="1000"
                style="
                  top: 0px;
                  transform: translate3d(0px, 0px, 0px);
                  transform-origin: 260.5px 361px;
                "
                :src="getProductImage"
              />
            </div>
          </div>
        </div>
        <div
          itemprop="offers"
          itemscope="itemscope"
          itemtype="http://schema.org/Offer"
          class="product-info-main"
        >
          <!-- Title -->
          <meta itemprop="priceCurrency" content="VND" />
          <meta itemprop="price" :content="product.final_price" />
          <meta itemprop="availability" :content="product.final_price" />
          <meta itemprop="url" :content="product.slug" />
          <h1 class="product-name">{{ product.name }}</h1>
          <div class="product-info-main-top">
            <div class="product-sku">
              <strong class="type">Mã sp:</strong>
              <div class="value">{{ product.sku }}</div>
            </div>
          </div>
          <div slot="price" class="product-price-box">
            <div class="price-box">
              <span class="normal-price"
                ><span class="price">{{ product.final_price }} ₫</span></span
              >
            </div>
          </div>
          <div class="product-swatch-opt">
            <!-- Chọn màu -->
            <div class="swatch-attribute color">
              <span class="swatch-attribute-label"><span>Màu sắc:</span> </span>
              <div>
                <span class="swatch-attribute-selected-option">SB015</span>
                <div class="swatch-attribute-options">
                  <div
                    v-for="(attributeOption, id) in getColor_Size.color.filter(
                      (attributeOption, idx) => idx < 4
                    )"
                    :key="id"
                    class="swatch-option color"
                    :class="isColorSelected(attributeOption) ? 'selected' : ''"
                    :style="getBgColorValue(attributeOption)"
                    @click="handleChangeColor(attributeOption)"
                  />
                </div>
                <div v-if="showMore">
                  <div
                    v-for="attributeOption in getColor_Size.color.filter(
                      (attributeOption, idx) => idx > 3
                    )"
                    :key="attributeOption.id"
                    class="swatch-option color"
                    :class="isColorSelected(attributeOption) ? 'selected' : ''"
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
            <!-- Chọn size -->
            <div
              class="swatch-attribute size"
              :class="checkSize == true ? 'not-selected' : ''"
            >
              <span
                class="swatch-attribute-label"
                v-if="getColor_Size.size && getColor_Size.size.length > 0"
                ><span>Kich cỡ </span>
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
          </div>
          <div class="product-size-guide">
            <a href="#" id="show-modal" @click="showModal = true"
              >Hướng dẫn chọn size</a
            >
          </div>
          <ul class="product-service">
            <li>
              Miễn phí giao hàng Cho đơn hàng từ
              <b>499.000đ</b>
            </li>
            <li>Đổi trả miễn phí trong vòng <b>30 ngày</b> kể từ ngày mua</li>
          </ul>
          <div class="product-options-actions">
            <div>
              <button
                v-if="count"
                @click="addCart"
                class="action action-tocart"
                :class="!checkSize ? checkHover : ''"
              >
                <span>Thêm vào giỏ</span>
              </button>
              <button
                v-if="!count"
                @click="addCart"
                class="product-item-action action-tocart action-tocart-disable"
                :class="!checkSize ? checkHover : ''"
              >
                <span>Hết hàng</span>
              </button>
            </div>
            <button
              type="button"
              title=""
              class="action action-store"
              @click="showModalFindStore = true"
            >
              <span>Tìm tại cửa hàng</span>
            </button>
          </div>
          <!-- <div class="product-options-actions-second">
            <button
              type="submit"
              title=""
              class="action action-wishlist action towishlist"
            >
              <span>Thêm vào yêu thích</span>
            </button>
            <button type="button" title="" class="action action-share">
              <span>Chia sẻ bạn bè</span>
            </button>
            <div class="content-share">
              <a
                href="javascript:void(0)"
                class="facebook share-icon share-network-facebook"
              ></a>
              <a
                href="javascript:void(0)"
                class="twitter share-icon share-network-twitter"
              ></a>
            </div>
          </div> -->
          <div class="product-info-detailed">
            <div class="item active">
              <div class="item-title">Mô tả</div>
              <div class="item-content">{{ product.description }}</div>
            </div>
            <!-- <modal v-if="showModal" @close="showModal = false">
              <h3 slot="header">custom header</h3>
            </modal> -->
          </div>
        </div>
      </div>
    </main>
    <findStore
      v-if="showModalFindStore"
      @close="showModalFindStore = false"
      :selectedOption="selectedOption"
      :product="product"
    />
    <SelectSize v-if="showModal" @close="showModal = false" />
    <comFooter />
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import comFooter from "../comFooter.vue";
import comHeader from "../comHeader.vue";
import SelectSize from "./selectSize.vue";
import findStore from "./findStore.vue";
export default {
  components: { comHeader, comFooter, SelectSize, findStore },
  data() {
    return {
      showModalFindStore: false,
      showModal: false,
      checkHover: "hover",
      dataCheckOptionInstock: null,
      checkCart: true,
      count: true,
      checkSize: null,
      checkColor: null,
      showMore: false,
      product_sku: this.$route.query.product_sku,
      product: null,
      // listImage: null,
      colorSize: {},
      selectedOption: { color: null, size: null },
      urlSwatch: "https://media.canifa.com/attribute/swatch",
      productImage: false,
      isChecksize: false,
      isSelectSize: false,
      slickBlockProductDetail: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // lazyLoad: "ondemand",
        autoplay: false,
        arrows: true,
        dots: false,
        autoplaySpeed: 5000,
        prevArrow:
          '<span type="button" class="slick-prev"><span></span></span>',
        nextArrow:
          '<span type="button" class="slick-next"><span></span></span>',
        // pauseOnHover: false,
      },
    };
  },
  created() {
    this.loadData();
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
    listImages() {
      let listImg = [];
      this.product?.configurable_children?.forEach((e) => {
        let url = "https://canifa.com/img/486/733/resize" + e.image;
        listImg.push(url);
      });
      const listImage = Array.from(new Set(listImg));
      return listImage;
    },
    getColor_Size() {
      if (this.product && this.product?.configurable_options) {
        this.product?.configurable_options?.forEach((configurableOption) => {
          const type = configurableOption.attribute_code;
          const filterVariants = configurableOption?.values?.map(
            ({ value_index, label }) => {
              return { id: value_index, label, type };
            }
          );
          this.colorSize[type] = filterVariants || [];
        });
      }
      // console.log("this.colorSize: ", this.colorSize);
      return this.colorSize;
    },
    getChirdrenSkus() {
      let skus = "";
      this.product.configurable_children.forEach((val) => {
        skus += val.sku + ",";
      });
      return skus;
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
    getProductSku() {
      const skuArr = this.product.sku.split("-");
      return skuArr?.length > 0 ? skuArr[0] : this.product.sku;
    },
  },
  watch: {
    getColor_Size() {
      if (this.getColor_Size) {
        console.log("this.getColor_Size?.color[0]ssss: ", this.getColor_Size);
        let options = this.getColor_Size?.color[0];
        console.log("options: ", options);
        this.ChooseColorFirst(options);
      }
    },
  },
  methods: {
    check() {
      console.log("product_sku", this.getColor_Size);
    },
    handleSelectSize() {
      this.isSelectSize = true;
      console.log("this.isSelectSize: ", this.isSelectSize);
    },
    async loadData() {
      let data = await this.$store.dispatch(
        "loadProductDeitail",
        this.product_sku
      );
      this.product = data.data[0];
      console.log("this.products", this.product);
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
      this.productChirdren = this.productChirdrens.find(
        (val) => val.size == option.id
      );
      this.selectedOption.size = option;
      console.log("this.selectedOption.size: ", this.selectedOption.size);
      // console.log(" this.selectedOption: ", this.selectedOption);
      if (!this.checkCart || (!this.count && this.dataCheckOptionInstock)) {
        this.isChecksize = false;
      }
      console.log(" this.isChecksize: ", this.isChecksize);
    },
    async checkStoreBySkus() {
      let response = await axios.get(
        `https://canifa.com/api/stock/list?skus=${this.getChirdrenSkus}`
      );
      console.log("response: ", response);
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
      }
    },
    addCart() {
      console.log(
        "this.checkCart",
        this.checkCart,
        "this.count",
        this.count,
        "this.selectedOption",
        this.selectedOption,
        "this.dataCheckOptionInstock",
        this.dataCheckOptionInstock
      );
      if (
        this.checkCart &&
        this.count &&
        this.selectedOption.color &&
        this.selectedOption.size
      ) {
        this.getAddItem.styleColor =
          this.selectedOption.color.label.toLowerCase();
        this.getAddItem.styleSize = this.selectedOption.size.label;
        // this.getAddItem.qty = 1;
        console.log("this.addproduct", this.getAddItem);
        this.$store.dispatch("addCart", this.getAddItem);
        this.$store.dispatch("openMicrocart");
        // console.log("totalQty", this.totalQty);
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
  // mounted() {
  //   if (this.getColor_Size) {
  //     console.log("this.getColor_Size.color[0]ssss: ", this.getColor_Size);
  //     let options = this.getColor_Size["color"];
  //     console.log("options: ", options);
  //     this.ChooseColorFirst(options);
  //   }
  // },
};
</script>

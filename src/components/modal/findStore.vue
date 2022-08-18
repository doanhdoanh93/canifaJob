<template>
  <div id="modal-template">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div
              class="modal-close"
              @click="$emit('close')"
              style="position: absolute"
            >
              <slot name="footer"></slot>
            </div>
            <div class="modal-header1">
              <slot name="header"> Tìm tại cửa hàng </slot>
            </div>
            <!-- <button @click="check()">dfnfgkl;h</button> -->
            <slot name="body">
              <div class="modal-content">
                <div class="page-product-top">
                  <div class="product-media">
                    <img :src="getProductImage" :alt="product.name" />
                  </div>
                  <div class="product-info-main">
                    <h1 class="product-name">{{ product.name }}</h1>
                    <div class="product-sku">
                      <strong class="type">Mã sp:</strong>
                      <div class="value">{{ product.sku }}</div>
                    </div>
                    <div slot="price" class="product-price-box">
                      <span class="normal-price"
                        ><span class="price">{{ product.price }} đ</span></span
                      >
                      <span class="price-percent"
                        >{{
                          ((product.original_price - product.price) /
                            product.original_price) *
                          100
                        }}
                        %</span
                      >
                      <span class="old-price"
                        ><span class="price"
                          >{{ product.original_price }} ₫</span
                        ></span
                      >
                    </div>
                    <div class="product-swatch-opt">
                      <div class="swatch-attribute color">
                        <span class="swatch-attribute-label"
                          ><span>Màu sắc:</span>
                          <div class="mage-error" v-if="checkColor">
                            Xin vui lòng chọn màu sắc
                          </div></span
                        >
                        <!---->
                        <div class="swatch-attribute-options">
                          <div class="swatch-attribute-options">
                            <div
                              v-for="(
                                attributeOption, id
                              ) in getColor_Size.color.filter(
                                (attributeOption, idx) => idx < 4
                              )"
                              :key="id"
                              class="swatch-option color"
                              :class="
                                isColorSelected(attributeOption)
                                  ? 'selected'
                                  : ''
                              "
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
                              :class="
                                isColorSelected(attributeOption)
                                  ? 'selected'
                                  : ''
                              "
                              :style="getBgColorValue(attributeOption)"
                              @click="handleChangeColor(attributeOption)"
                            />
                            <a
                              v-if="!showMore && getColor_Size.color.length > 4"
                              @click="swatchMore"
                              href="javascript:void(0)"
                              class="swatch-more"
                              ><span
                                >+{{ getColor_Size.color.length - 4 }}</span
                              ></a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="swatch-attribute size">
                        <span class="swatch-attribute-label"
                          ><span>Kích cỡ:</span>
                          <div class="mage-error" v-if="checkSize">
                            Vui lòng chọn kích cỡ
                          </div></span
                        >
                        <!---->
                        <div class="swatch-attribute-options">
                          <div
                            v-for="attributeOption in getColor_Size.size"
                            :key="attributeOption.id"
                            :class="{
                              'swatch-option text':
                                !isSizeSelected(attributeOption),
                              'swatch-option text selected':
                                isSizeSelected(attributeOption),
                              disabled: !isCheckDisableSize(
                                attributeOption.label
                              ),
                            }"
                            @click="handleChangeSize(attributeOption)"
                          >
                            {{ attributeOption.label }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="store_filter">
                  <select class="form-control" v-model="valueCity">
                    <option selected="selected">
                      Lựa chọn Tỉnh / Thành phố
                    </option>
                    <option
                      v-for="(country, i) in countrys"
                      :key="i"
                      :value="country.region_id"
                    >
                      {{ country.default_name }}
                    </option>
                  </select>
                </div>
                <ul class="store_result" v-if="dataStore">
                  <li
                    class="result-item"
                    v-for="(store, index) in dataStore"
                    :key="index"
                  >
                    <div class="result-item-detail">
                      <div class="result-item-title">
                        {{ store.store_name }}
                      </div>
                      <div class="result-item-address">
                        {{ store.address }}, {{ store.city }}, {{ store.state }}
                      </div>
                      <div class="result-item-phone">
                        Điện thoại {{ store.phone }}
                      </div>
                    </div>
                    <div class="result-item-status">
                      <span class="available" v-if="store.product_status == 1"
                        >Còn hàng</span
                      >
                      <span class="unavailable" v-if="store.product_status == 0"
                        >Hết hàng</span
                      >
                      <span class="available" v-if="store.product_status == 2"
                        >Còn ít hàng</span
                      >
                    </div>
                  </li>
                </ul>
                <div
                  v-if="dataStore && dataStore.length == 0"
                  class="minicart-subtotal"
                >
                  "Sản phẩm không có tại cửa hàng"
                </div>
                <div
                  v-if="
                    !dataStore &&
                    valueCity != 'Lựa chọn Tỉnh / Thành phố' &&
                    selectedOption.color &&
                    selectedOption.size
                  "
                  class="loader-product"
                ></div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      valueCity: "Lựa chọn Tỉnh / Thành phố",
      checkSize: true,
      checkColor: true,
      showModalFindStore: false,
      showModal: false,
      checkHover: "hover",
      dataCheckOptionInstock: null,
      checkCart: true,
      count: true,
      showMore: false,
      product_sku: this.$route.query.product_sku,
      colorSize: {},
      selectedOption: { color: null, size: null },
      urlSwatch: "https://media.canifa.com/attribute/swatch",
      productImage: false,
      isChecksize: false,
      isSelectSize: false,
      countrys: null,
      config: "http://118.68.218.45:8080/api/ext/store-locator/find-product",
      dataStore: null,
    };
  },
  created() {
    this.loadDataCountry();
    this.onChangeState();
  },
  computed: {
    productChirdrens() {
      return this.product.configurable_children;
    },
    getProductImage() {
      return (
        this.productImage ||
        "https://canifa.com/img/486/733/resize" + this.product?.image
      );
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
    getProductSku() {
      const skuArr = this.product.sku.split("-");
      return skuArr?.length > 0 ? skuArr[0] : this.product.sku;
    },
  },
  watch: {
    valueCity() {
      this.onChangeState();
    },
    "selectedOption.size"() {
      this.checkOption();
      this.onChangeState();
    },
    "selectedOption.color"() {
      this.checkOption();
      this.onChangeState();
    },
  },
  methods: {
    check() {
      console.log(
        this.product,
        this.valueCity,
        this.getProductSku,
        this.selectedOption.size?.label,
        this.selectedOption.color?.label
      );
    },
    async loadDataCountry() {
      let rs = await axios.get(
        "http://118.68.218.45:8080/api/ext/region/city?country_id=VN"
      );
      this.countrys = rs.data.result;
      console.log("this.country: ", this.countrys);
    },
    async onChangeState() {
      if (
        this.valueCity != "Lựa chọn Tỉnh / Thành phố" &&
        this.valueCity &&
        this.product.sku &&
        this.selectedOption.size &&
        this.selectedOption.color
      ) {
        this.dataStore = null;
        let url =
          this.config +
          `?city_id=${this.valueCity}&sku=${this.getProductSku}&size=${this.selectedOption.size?.label}&color=${this.selectedOption.color?.label}`;
        let rs = await axios.get(url);
        console.log("rs: ", rs.data);
        if (rs.data?.code === 200) {
          let data = rs.data?.result;
          let newData = [
            ...data.filter((e) => e.product_status === 1),
            ...data.filter((e) => e.product_status === 2),
            ...data.filter((e) => e.product_status === 0),
          ];
          this.dataStore = newData;
          console.log("this.dataStore: ", this.dataStore);
        }
      }
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
      // console.log("this.selectedOption.size: ", this.selectedOption.size);
      // console.log(" this.selectedOption: ", this.selectedOption);
      if (!this.checkCart || (!this.count && this.dataCheckOptionInstock)) {
        this.isChecksize = false;
      }
      // console.log(" this.isChecksize: ", this.isChecksize);
    },
    async checkStoreBySkus() {
      let response = await axios.get(
        `https://canifa.com/api/stock/list?skus=${this.getChirdrenSkus}`
      );
      // console.log("response: ", response);
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
    checkOption() {
      this.selectedOption.size
        ? (this.checkSize = false)
        : (this.checkSize = true);
      this.selectedOption.color
        ? (this.checkColor = false)
        : (this.checkColor = true);
    },
  },
};
</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(51, 63, 72, 0.34);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-content {
  border: none;
}
.modal-container {
  width: 825px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header1 {
  background-color: #f6f6f6;
  border-radius: 2px 2px 0px 0px;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  padding: 0px 16px;
  margin-bottom: -2px;
}

.modal-body {
  background-color: #fff;
  padding: 13px 17px;
  margin: 20px 0;
}
.modal-close {
  position: absolute;
  background-color: #f6f6f6;
  -webkit-box-shadow: 0px 1px 4px rgb(0 0 0 / 25%);
  box-shadow: 0px 1px 4px rgb(0 0 0 / 25%);
  border-radius: 100%;
  width: 32px;
  height: 32px;
  display: block;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4Ljc1IDUuMjVMNS4yNSAxOC43NSIgc3Ryb2tlPSIjQzhDN0NDIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xOC43NSAxOC43NUw1LjI1IDUuMjUiIHN0cm9rZT0iI0M4QzdDQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K);
  z-index: 20;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

<template>
  <div>
    <header class="site-header site-header-cart">
      <div class="site-header-container">
        <div class="header-logo">
          <div class="header-logo">
            <a href="/" class="a-logo router-link-active" title="Home Page"
              ><img src="../../../public/assets/logo.png" alt="logo"
            /></a>
          </div>
        </div>
        <div class="header-text">thanh toán đơn hàng</div>
        <div class="header-button">
          <a href="/">Tiếp tục mua sắm</a>
        </div>
      </div>
    </header>
    <!-- <hr /> -->
    <main class="site-main">
      <ul class="checkout-progress-bar">
        <li class="checkout-progress-bar-item active">
          <span class="step">1</span> <span>Giỏ hàng</span>
        </li>
        <li class="checkout-progress-bar-item current">
          <span class="step">2</span> <span>Đặt hàng</span>
        </li>
        <li class="checkout-progress-bar-item">
          <span class="step">3</span> <span>Hoàn tất</span>
        </li>
      </ul>
      <div class="checkout-container checkout-cart-container">
        <div class="checkout-container--left">
          <div class="checkout-form">
            <div class="checkout-step checkout-shipping">
              <div>
                <div class="checkout-step-title">
                  <h2>Thông tin giao hàng</h2>
                  <a href="/shopcart" class="btn-back">Quay lại giỏ hàng</a>
                </div>
                <div class="checkout-step-des">
                  Đã là thành viên?
                  <b
                    ><a href="#" id="show-modal" @click="showModal = true"
                      >Đăng Nhập</a
                    >
                    hoặc
                    <a href="#" id="show-modal1" @click="showModal = true"
                      >Đăng Ký</a
                    ></b
                  >
                  tài khoản mới
                </div>
                <!---->
              </div>
              <div class="checkout-step-content">
                <div class="checkout-shipping-form">
                  <div class="form-group">
                    <label>Họ tên</label>
                    <input type="text" name="firstname" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>Số điện thoại</label>
                    <input type="text" name="telephone" class="form-control" />
                  </div>
                  <div class="form-group" :class="{ active: selectCity }">
                    <label>Tỉnh / Thành phố</label>
                    <select
                      name="state"
                      class="form-control"
                      v-model="valueCity"
                    >
                      <option></option>
                      <option
                        v-for="(country, i) in countrys"
                        :key="i"
                        :value="country.region_id"
                      >
                        {{ country.default_name }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group" :class="{ active: selectTP }">
                    <label>Quận / Huyện</label>
                    <select name="city" class="form-control" v-model="valueTP">
                      <option></option>
                      <option
                        v-for="(value, i) in quanHuyens"
                        :key="i"
                        :value="value.city_id"
                      >
                        {{ value.cityname }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group" :class="{ active: selectPX }">
                    <label>Phường / Xã</label>
                    <select name="ward" class="form-control" v-model="valuePX">
                      <option></option>
                      <option
                        v-for="(value, i) in phuongXas"
                        :key="i"
                        :value="value.ward_id"
                      >
                        {{ value.ward_name }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group" :class="{ active: selectDC }">
                    <label>Nhập địa chỉ</label>
                    <input
                      type="text"
                      name="streetName"
                      class="form-control"
                      v-model="valueDC"
                    />
                    <!---->
                  </div>
                </div>
              </div>
            </div>
            <div class="checkout-step checkout-payment-method" isactive="true">
              <div class="checkout-step-title">
                <h2>Phương thức thanh toán</h2>
              </div>
              <div class="checkout-step-content">
                <div class="checkout-payment-method-section">
                  <label for="shopee_pay"
                    ><input id="shopee_pay" type="radio" value="shopee_pay" />
                    <span
                      ><b></b>
                      <img
                        src="../../../public/assets/payment-note.svg"
                        alt="" /></span
                  ></label>
                </div>
                <div class="checkout-payment-method-section">
                  <label for="cashondelivery"
                    ><input
                      id="cashondelivery"
                      type="radio"
                      value="cashondelivery" />
                    <span
                      ><b>Thanh toán khi nhận hàng</b>
                      <img
                        src="../../../public/assets/payment-note.svg"
                        alt="" /></span
                  ></label>
                </div>
                <div class="checkout-payment-method-section">
                  <label for="vnpay"
                    ><input id="vnpay" type="radio" value="vnpay" />
                    <span
                      ><b>Thanh toán qua VNPAY</b>
                      <img
                        src="../../../public/assets/payment-note.svg"
                        alt="" /></span
                  ></label>
                </div>
              </div>
            </div>
            <div class="checkout-review" v-if="totalQty > 0">
              <div class="checkout-step-title">
                <h2>({{ totalQty }}) Sản phẩm</h2>
              </div>
              <table class="checkout-cart-items">
                <thead>
                  <tr>
                    <th class="col item"><span>Sản phẩm</span></th>
                    <th class="col price"><span>Giá tiền</span></th>
                    <th class="col qty"><span>Số lượng</span></th>
                    <th class="col subtotal"><span>Tổng tiền</span></th>
                    <th class="col actions"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="cart-item"
                    v-for="(product, i) in addproduct"
                    :key="i"
                  >
                    <td data-th="Sản phẩm" class="col item">
                      <div class="cart-item-info">
                        <div class="cart-item-photo">
                          <a
                            href="/ao-body-nam-8it20w001.html"
                            class="cart-image-container"
                            ><img :src="getProductImage(product)" alt=""
                          /></a>
                        </div>
                        <div class="cart-item-details">
                          <strong class="cart-item-name"
                            ><a href="/ao-body-nam-8it20w001.html" class="">
                              {{ product.name }}
                            </a></strong
                          >
                          <div class="cart-item-options">
                            <div class="cart-item-option">
                              <span
                                ><span class="swatch-option text">{{
                                  product.styleSize
                                }}</span></span
                              >
                            </div>
                            <div class="cart-item-option">
                              <span
                                ><span
                                  class="swatch-option color"
                                  :style="getColor(product)"
                                ></span
                              ></span>
                            </div>
                          </div>
                          <!---->
                          <!---->
                          <!---->
                        </div>
                      </div>
                    </td>
                    <td data-th="Giá tiền" class="col price">
                      <span class="price">{{ product.price }} ₫</span>
                      <!---->
                    </td>
                    <td data-th="Số lượng" class="col qty">
                      <span> x{{ product.qty }}</span>
                    </td>
                    <td data-th="Tổng tiền" class="col subtotal">
                      <span class="price"
                        >{{ product.price * product.qty }} đ</span
                      >
                    </td>
                    <td class="col actions">
                      <a href="#" title="Xóa" class="action-delete"
                        ><span>Xóa</span></a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="checkout-container--right">
          <div class="checkout-summary checkout-summary-cart">
            <div class="checkout-summary-title">Đơn hàng</div>
            <div class="checkout-totals">
              <table>
                <tbody>
                  <tr>
                    <th>Giá gốc</th>
                    <td>{{ totalPrice }} ₫</td>
                  </tr>
                  <tr>
                    <th>Phí vận chuyển</th>
                    <td>10.000 ₫</td>
                  </tr>
                  <tr class="grand-totals">
                    <th>Tổng tiền thanh toán</th>
                    <td>{{ totalPrice + 10000 }} ₫</td>
                  </tr>
                  <tr>
                    <th colspan="2">
                      <i>(*) Đã bao gồm thuế GTGT.</i>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="checkout-step checkout-coupon">
              <!---->
              <div class="checkout-step-title">Mã giảm giá/ Thẻ quà tặng</div>
              <div class="checkout-step-content">
                <div class="checkout-coupon-form">
                  <input
                    type="text"
                    name="promoCode"
                    placeholder="Nhập mã"
                    class="form-control"
                  />
                  <button class="btn-add-coupon btn-add">Áp dụng</button>
                </div>
                <!---->
                <!---->
              </div>
            </div>
            <div class="checkout-proceed-checkout">
              <button class="btn-place-order">Thanh toán</button>
              <div class="checkout-point-info">
                Tích luỹ
                <span style="color: rgb(218, 41, 28)">0 C-point</span> cho đơn
                hàng
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <dangNhap v-if="showModal" @close="showModal = false" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import dangNhap from "../modal/dangNhap.vue";
import axios from "axios";
export default {
  components: { dangNhap },
  data() {
    return {
      showModal: false,
      showModal1: false,
      valueCity: "Lựa chọn Tỉnh / Thành phố",
      valueTP: "Quận/Huyện",
      valuePX: "Phường/Xã",
      valueDC: null,
      quanHuyens: null,
      phuongXas: null,
      countrys: null,
      openCard: true,
      url: "https://media.canifa.com/attribute/swatch/images/",
    };
  },
  created() {
    this.loadDataCart();
    this.loadDataCountry();
  },
  watch: {
    valueCity() {
      this.onChangeState();
    },
    valueTP() {
      this.onChangeTP();
    },
  },
  computed: {
    ...mapGetters(["totalQty", "addproduct", "microcart", "totalPrice"]),
    selectCity() {
      if (this.valueCity !== "Lựa chọn Tỉnh / Thành phố") {
        return true;
      } else return false;
    },
    selectTP() {
      if (this.valueTP !== "Quận/Huyện") {
        return true;
      } else return false;
    },
    selectPX() {
      if (this.valuePX !== "Phường/Xã") {
        return true;
      } else return false;
    },
    selectDC() {
      console.log("this.valueDC: ", this.valueDC);
      if (this.valueDC !== null) {
        return true;
      } else return false;
    },
  },
  methods: {
    async loadDataCountry() {
      let rs = await axios.get(
        "http://118.68.218.45:8080/api/ext/region/city?country_id=VN"
      );
      this.countrys = rs.data.result;
    },
    async onChangeState() {
      if (this.valueCity != "Lựa chọn Tỉnh / Thành phố" && this.valueCity) {
        this.quanHuyens = null;
        let url = `http://118.68.218.45:8080/api/ext/region/state?region_id=${this.valueCity}`;
        let rs = await axios.get(url);
        this.quanHuyens = rs.data?.result;
      }
    },
    async onChangeTP() {
      if (this.valueTP !== "Quận/Huyện" && this.valueTP) {
        this.phuongXas = null;
        let url = `http://118.68.218.45:8080/api/ext/region/wards?city_id=${this.valueTP}`;
        let rs = await axios.get(url);
        this.phuongXas = rs.data?.result;
      }
    },
    loadDataCart() {
      this.$store.dispatch("getCart");
    },
    getProductImage(product) {
      return "https://canifa.com/img/486/733/resize/" + product.image;
    },
    getColor(product) {
      let color = {
        "background-image": `url("${this.url}${product.styleColor}.png")`,
      };
      // console.log(product.qty);
      return color;
    },
    decreaseItem(product) {
      this.$store.dispatch("decreaseItem", product);
    },
    plusItem(product) {
      this.$store.dispatch("addCart", product);
    },
    veiwStore() {},
    clickout() {
      if (this.openCard == true) {
        this.openCard = false;
      }
    },
    closeMicrocart() {
      this.$store.dispatch("closeMicrocart");
    },
  },
};
</script>
<style>
.checkout-form {
  /* max-width: 590px; */
  width: 100%;
}
</style>

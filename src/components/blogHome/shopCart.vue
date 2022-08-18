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
    <hr />
    <main class="site-main">
      <ul class="checkout-progress-bar">
        <li class="checkout-progress-bar-item current">
          <span class="step">1</span> <span>Giỏ hàng</span>
        </li>
        <li class="checkout-progress-bar-item">
          <span class="step">2</span> <span>Đặt hàng</span>
        </li>
        <li class="checkout-progress-bar-item">
          <span class="step">3</span> <span>Hoàn tất</span>
        </li>
      </ul>
      <div class="checkout-container checkout-cart-container">
        <div class="checkout-container--left">
          <div class="checkout-cart-promotion-notification">
            <div class="notification-item">
              <div class="icon-freeship"></div>
              Mua thêm
              <b>268.000 ₫</b> để được freeship.
            </div>
            <div>
              <div class="notification-item">
                <div>
                  <div class="icon-giftcart"></div>
                  Mua thêm
                  <b>269.000 ₫</b>
                  để nhận NaN phần quà với giá 0 đồng.
                  <a href="#" style="text-transform: uppercase"
                    ><b>Xem quà</b></a
                  >
                </div>
              </div>
              <!---->
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
                    <div class="cart-item-qty">
                      <a
                        class="btn-number btn-number-minus"
                        @click="decreaseItem(product)"
                        ><span>▼</span></a
                      >
                      <input
                        type="text"
                        :value="product.qty"
                        readonly="readonly"
                        class="input-cart-item-qty"
                      />
                      <a
                        class="btn-number btn-number-plus"
                        @click="plusItem(product)"
                        ><span>▲</span></a
                      >
                    </div>
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
                  <tr style="display: none">
                    <th>Giảm giá</th>
                    <td style="color: rgb(218, 41, 28)">0 ₫</td>
                  </tr>
                  <tr class="grand-totals">
                    <th>Tổng tiền thanh toán</th>
                    <td>{{ totalPrice }} ₫</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="checkout-proceed-checkout">
              <router-link to="/checkout">
                <button class="btn-place-order">Đặt hàng</button>
              </router-link>
              <div class="checkout-point-info">
                Áp dụng mã giảm giá, C-point tại bước tiếp theo
              </div>
            </div>
            <div class="payment-note">
              Chúng tôi chấp nhận thanh toán:
              <img src="../../../public/assets/payment-note.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      openCard: true,
      url: "https://media.canifa.com/attribute/swatch/images/",
    };
  },
  created() {
    this.loadDataCart();
  },
  computed: {
    ...mapGetters(["totalQty", "addproduct", "microcart", "totalPrice"]),
  },
  methods: {
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
      console.log("openCard: ", this.openCard);
      if (this.openCard == true) {
        console.log("openCard: ", this.openCard);
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
.checkout-container {
  max-width: 1356px;
  margin-left: auto;
  margin-right: auto;
  min-height: 0;
  -ms-flex-align: start;
  align-items: flex-start;
  background-color: transparent;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-flex-wrap: nowrap;
  display: -ms-flexbox;
  display: flex;
}
.checkout-container--left {
  width: 87%;
}
.checkout-review {
  width: 100%;
  max-width: 100%;
}
.checkout-container--right {
  width: 37%;
}
.checkout-cart-items .col.price {
  width: 23%;
  text-align: left;
}
.checkout-cart-items .col.subtotal {
  width: 12%;
  text-align: right;
}
.checkout-cart-items .col.qty {
  text-align: center;
  width: 19%;
  white-space: nowrap;
}
</style>

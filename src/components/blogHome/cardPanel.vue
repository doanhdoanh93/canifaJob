<template>
  <div v-if="openCard" class="block-minicart" :class="{ hide: !microcart }">
    <div class="block-minicart-heading" v-if="totalQty > 0">
      {{ totalQty }} sản phẩm trong giỏ hàng
    </div>
    <template v-if="totalQty > 0">
      <ol class="minicart-items">
        <li class="minicart-item" v-for="(product, i) in addproduct" :key="i">
          <div class="minicart-item-info">
            <div class="minicart-item-photo">
              <div class="minicart-item-photo">
                <a href="#" class=""
                  ><img :src="getProductImage(product)" alt=""
                /></a>
              </div>
            </div>
            <div class="minicart-item-details">
              <h3 class="minicart-item-name">
                <a href="#" class="">{{ product.name }}</a>
              </h3>
              <div class="minicart-item-options">
                <div class="minicart-item-option">
                  <span class="value">{{ product.styleSize }}</span>
                </div>
                <div class="minicart-item-option">
                  <span class="swatch-option" :style="getColor(product)"></span>
                </div>
              </div>
              <div class="minicart-item-action">
                <a href="#" class="minicart-item-remove"><span>Xoá</span></a>
              </div>
              <div class="minicart-item-bottom">
                <div class="minicart-item-price">
                  <span class="price">{{ product.price }} ₫</span>
                </div>
                <div class="minicart-item-qty">
                  <button
                    class="btn-qty btn-qty-min"
                    @click="decreaseItem(product)"
                  ></button>
                  <input
                    type="text"
                    name=""
                    :value="product.qty"
                    readonly
                    class="input-qty"
                  />
                  <button
                    class="btn-qty btn-qty-plus"
                    @click="plusItem(product)"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ol>
      <!---->
      <!---->
      <!---->
      <div class="minicart-actions">
        <router-link to="/shopcart">
          <button class="action checkout" @click="veiwStore()">
            Xem giỏ hàng
          </button>
        </router-link>
      </div>
      <div class="minicart-subtotal">
        <span>Tổng tạm tính </span>
        <b>{{ totalPrice }} ₫</b>
      </div>
    </template>
    <template v-else>
      <div class="minicart-close" @click="closeMicrocart">
        <span>close</span>
      </div>

      <div class="minicart-empty">
        <div class="minicart-empty-icon"></div>
        <p>
          Chưa có sản phẩm <br />
          trong giỏ hàng của bạn.
        </p>
      </div>
    </template>
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
  computed: {
    ...mapGetters(["totalQty", "addproduct", "microcart", "totalPrice"]),
  },
  methods: {
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

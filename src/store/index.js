import Vue from "vue";
import Vuex from "vuex";
import phone from "./modules/phone.js";
import layout from "./modules/layout.js";
import product from "./modules/product.js";
import cart from "./modules/cart.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    linkMenu: [
      { title: "NAM", to: "/nam" },
      { title: "NỮ", to: "/nu" },
      { title: "BÉ GÁI", to: "/beGai" },
      { title: "BÉ TRAI", to: "/beTrai" },
      { title: "OUTLET", to: "/outLet" },
    ],
  },
  getters: {
    linkMenu: (state) => state.linkMenu,
  },
  mutations: {},
  actions: {},
  modules: {
    phone,
    layout,
    product,
    cart,
  },
});

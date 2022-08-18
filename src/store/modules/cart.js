/* eslint-disable no-console */
// import axios from "axios";

const state = {
  microcart: false,
  totalQty: 0,
  addproduct: [],
  totalPrice: 0,
  isSelectSize: false,
};

const getters = {
  microcart: (state) => {
    return state.microcart;
  },
  isSelectSize: (state) => {
    return state.isSelectSize;
  },
  totalQty: (state) => {
    let total = 0;
    state.addproduct.forEach((e) => {
      total += e.qty;
    });
    return total;
  },
  addproduct: (state) => {
    return state.addproduct;
  },
  totalPrice: (state) => {
    let total = 0;
    state.addproduct.forEach((e) => {
      total += e.qty * e.final_price;
    });
    state.total = total;
    // console.log("state.total: ", state.total);
    return total;
  },
};

const mutations = {
  setMicrocart(state) {
    state.microcart = !state.microcart;
    // console.log("state.microcart: ", state.microcart);
  },
  closeMicrocart(state) {
    state.microcart = false;
  },
  GET_CART(state) {
    let data = localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : [];
    state.addproduct = data;
    // console.log("state.addproduct: ", state.addproduct);
  },
  ADD_TO_CART(state, product) {
    let data = localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : [];
    // console.log("data: ", data);

    if (data.length > 0) {
      let i = data.findIndex((e) => e?.sku == product?.sku);
      console.log(i);
      if (i >= 0) {
        data[i].qty += 1;
      } else {
        product.qty = 1;
        data.push(product);
      }
    } else {
      product.qty = 1;
      data.push(product);
    }
    // console.log("data: ", data);
    localStorage.setItem("data", JSON.stringify(data));
    state.addproduct = data;
  },
  decreaseItem(state, product) {
    let data = localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : [];
    let index = data.findIndex((e) => e.sku == product.sku);
    // console.log("index: ", index);
    if (index >= 0) {
      if (data[index]?.qty == 1) {
        data.splice(index, 1);
      } else {
        data[index].qty -= 1;
      }
    }
    localStorage.setItem("data", JSON.stringify(data));
    state.addproduct = data;
  },
};

const actions = {
  getCart({ commit }) {
    commit("GET_CART");
  },
  addCart({ commit }, product) {
    commit("ADD_TO_CART", product);
  },
  openMicrocart({ commit }) {
    commit("setMicrocart");
  },
  decreaseItem({ commit }, product) {
    commit("decreaseItem", product);
  },
  closeMicrocart({ commit }) {
    commit("closeMicrocart");
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};

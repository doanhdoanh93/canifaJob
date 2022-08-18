/* eslint-disable no-console */
import axios from "axios";

const state = {
  layouts: {},
  categories: null,
};

const getters = {
  layouts: (state) => {
    return state.layouts;
  },
  categories: (state) => {
    return state.categories;
  },
};

const mutations = {
  SET_LAYOUTS(state, payload) {
    state.layouts = payload || {};
    // console.log(state.layouts);
  },
  SET_cate(state, payload) {
    state.categories = payload || {};
    // console.log(state.layouts);
  },
};

const actions = {
  async loadLayouts({ commit }) {
    try {
      let response = await axios.get("https://canifa.com/api/ext/layout/list");
      const results = response.data.result;
      // console.log("results", response);
      commit("SET_LAYOUTS", results);
      return results;
    } catch (error) {
      console.error(error);
    }
  },
  async loadCategories({ commit }) {
    try {
      let response = await axios.get("http://localhost:3000/data");
      const results = response.data;
      // console.log("CATEGORieS", results);
      commit("SET_cate", results);
      return results;
    } catch (error) {
      console.error(error);
    }
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};

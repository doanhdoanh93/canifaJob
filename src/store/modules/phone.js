/* eslint-disable no-console */
import axios from "axios";

const state = {
  phone: [],
  phoneId: null,
  zaloLink: null,
  facebook: null,
};

const getters = {
  phone: (state) => {
    return state.phone;
  },
  phoneId: (state) => {
    return state.phoneId;
  },
  zaloLink: (state) => {
    return state.zaloLink;
  },
  facebook: (state) => {
    return state.facebook;
  },
};

const mutations = {
  setDataPhone(state, value) {
    state.phone = value;
  },
  setDataPhoneId(state, value) {
    state.phoneId = value;
  },
  setDataZalo(state, value) {
    state.zaloLink = value;
  },
  setDataFacebook(state, value) {
    state.facebook = value;
  },
};

const actions = {
  async getPhone({ commit }) {
    try {
      let response = await axios.get(process.env.baseUrl + "/phone/infor");
      commit("setDataPhone", response.data.phone);
      let phones = response.data.phone;
      commit("setDataPhoneId", phones[0]["phone"]);
      commit("setDataZalo", phones[2]["phone"]);
      commit("setDataFacebook", phones[1]["phone"]);
      return response.data.phone;
    } catch (error) {
      commit("setDataPhone", []);
      commit("setDataPhoneId", []);
    }
  },

  async updatePhoneId({ commit, rootState }, datasd) {
    try {
      let response = await axios.post(
        process.env.baseUrl + "/phone/update?token=" + rootState.authen.token,
        datasd
      );
      commit("setDataPhone", response.data);
      return response.data;
    } catch (error) {
      commit("setDataPhone", []);
    }
  },
  async updateUserId({ commit, rootState }, datasd) {
    try {
      let response = await axios.post(
        process.env.baseUrl + "/header/change?token=" + rootState.authen.token,
        datasd
      );
      return response.data;
    } catch (error) {
      console.log(error, commit);
    }
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};

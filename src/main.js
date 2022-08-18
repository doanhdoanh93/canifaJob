import Vue from "vue";
// import Antd from "ant-design-vue";
import App from "./App";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// import addPhone from "./components/addPhone.vue";
import vClickOutside from "v-click-outside";

Vue.use(vClickOutside);
Vue.component(VueSlickCarousel.name, VueSlickCarousel);
Vue.use(VueSlickCarousel);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

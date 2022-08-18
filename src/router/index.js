import Vue from "vue";
import VueRouter from "vue-router";
// import VueSlickCarousel from "vue-slick-carousel";
Vue.use(VueRouter);
// Vue.component(VueSlickCarousel.name, VueSlickCarousel);
const routes = [
  {
    path: "/",
    name: "homePage",
    component: () => import("../components/homePage.vue"),
  },
  {
    path: "/nu",
    name: "Nữ",
    component: () => import("../components/homePage.vue"),
  },
  {
    path: "/nam",
    name: "Nam",
    component: () => import("../components/homePage.vue"),
  },
  {
    path: "/beGai",
    name: "Bé gái",
    component: () => import("../components/homePage.vue"),
  },
  {
    path: "/beTrai",
    name: "Bé trai",
    component: () => import("../components/homePage.vue"),
  },
  {
    path: "/outLet",
    name: "Outlet",
    component: () => import("../components/homePage.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../components/modal/productDetail.vue"),
  },
  {
    path: "/bst",
    name: "bst",
    component: () => import("../components/modal/ProductSku.vue"),
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: () => import("../components/blogHome/shopCart.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../components/blogHome/checkOut.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

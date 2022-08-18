<template>
  <div class="wrapper">
    <comHeader />
    <headerPromition v-if="!checkRouter()" />
    <headerSubMenu />
    <main class="site-main">
      <!-- <div v-for="(row, index) in layoutHome" :key="index"> -->
      <!-- <div class="category-view" v-if="row.layout == 'bannerImage'">
          <div
            class="category-image"
            v-for="(banner, i) in row.imageBanner"
            :key="i"
          >
            <router-link
              v-if="banner.link && !checkHttpLink(banner.link)"
              :to="banner.link"
              ><img :src="banner.url" alt=""
            /></router-link>
            <a
              v-if="banner.link && checkHttpLink(banner.link)"
              :href="`${banner.link}`"
              target="_blank"
            >
              <img :src="banner.url" alt="" />
            </a>
            <img v-if="!banner.link" :src="banner.url" alt="" />
          </div>
        </div> -->
      <div class="block-hot-deal block-hot-deal-listing">
        <!-- <div class="block-heading" v-if="row.layout == 'landing_filters'">
            <div class="title"></div>
            <ul class="link" style="cursor: pointer"></ul>
            <ul class="link" style="cursor: pointer; margin-top: 20px">
              <li class="" v-for="(item, i) in row.sizeguide" :key="i">
                <router-link>{{ item.title }}</router-link>
              </li>
            </ul>
            <ul class="link-cat" style="cursor: pointer">
              <li class="" v-for="(item, i) in row.final_price" :key="i">
                <router-link>{{ item.title }}</router-link>
              </li>
            </ul>
          </div> -->

        <div class="products-grid">
          <div class="toolbar toolbar-products">
            <div class="pages">
              <ProductCard
                v-for="(product, i) in products"
                :key="i"
                :product="product"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </main>
  </div>
</template>

<script>
import headerPromition from "../headerPromition.vue";
import headerSubMenu from "../headerSubMenu.vue";
import comHeader from "../comHeader.vue";
import ProductCard from "./ProductCard.vue";
export default {
  components: { ProductCard, comHeader, headerPromition, headerSubMenu },
  data() {
    return {
      category_id: this.$route.query.category_id,
      products: [],
      productImage: false,
    };
  },
  created() {
    this.loadData();
    this.checkRouter();
  },
  computed: {},

  methods: {
    async loadData() {
      let data = await this.$store.dispatch("loadProductSku", this.category_id);
      this.products = data.data;
      // console.log("this.productSku: ", this.products);
    },
    getProductImage(product) {
      // console.log("product: ", product);
      if (product) {
        return "https://canifa.com/img/486/733/resize" + product?.image;
      } else return;
    },
    checkRouter() {
      if (this.$route.path == "/") {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

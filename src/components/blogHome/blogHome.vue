<template>
  <div v-if="layoutHome">
    <!-- <button @click="check()">dfskfl</button> -->
    <div v-if="getCurrent.display_mode == 'PRODUCTS'">
      <div v-for="(row, index) in layoutHome" :key="index">
        <VueSlickCarousel
          v-if="row.layout === 'bannerSlider'"
          class="home-banner-slide"
          v-bind="slickOptions"
        >
          <div
            v-for="(banner, i) in row.imageBanner"
            :key="`banner_${row.layout}_${row.index}_${i}`"
            class="item"
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
        </VueSlickCarousel>
        <!-- <div class="block-hot-deal" v-if="row.layout === 'flashSale'">
        <div class="block-heading" v-if="countDownTime > 0">
          <h2 class="title">{{ row.title }}</h2>
          <countdown
            class="countdown"
            ref="countDown"
            :end-time="countDownTime"
          >
            <template v-slot:process="{ timeObj }">
              <span>Kết thúc sau</span>
              <div class="countdown-time">
                <div class="box-count box-days" v-if="timeObj.d > 0">
                  <div class="number">{{ timeObj.d }}</div>
                  <div class="text">:</div>
                </div>
                <div class="box-count box-hours">
                  <div class="number">{{ timeObj.h }}</div>
                  <div class="text">:</div>
                </div>
                <div class="box-count box-min">
                  <div class="number">{{ timeObj.m }}</div>
                  <div class="text">:</div>
                </div>
                <div class="box-count box-secs">
                  <div class="number">{{ timeObj.s }}</div>
                </div>
              </div>
            </template>
            <template v-slot:finish> </template>
          </countdown>
          <div class="viewall">
            <router-link tag="a" to="/flash-sale">Xem tất cả</router-link>
          </div>
        </div>
        <div class="block-content" v-if="countDownTime > 0">
          <m-product-carousel-deal
            :products="changeDataFlashSale(getFlashSale)"
            :flashsale="true"
            :slidesToShow="6"
          />
        </div>
      </div> -->
        <div v-if="row.layout === 'bannerImage'" class="block-uu-dai">
          <div v-if="row.showHeader" class="block-heading home-heading">
            <h2 class="title">
              {{ row.title }}
            </h2>
          </div>
          <div class="block-content">
            <div class="row">
              <div
                v-for="(banner, i) in row.imageBanner"
                :key="i"
                :class="row.imageBanner.length > 1 ? 'col-sm-6' : 'col-sm-12'"
              >
                <router-link
                  v-if="banner.link && !checkHttpLink(banner.link)"
                  :to="banner.link"
                  ><img :src="banner.url" alt=""
                /></router-link>
                <img v-if="!banner.link" :src="banner.url" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div v-if="row.layout === 'threeColumnBanners'" class="block-product">
          <div class="block-heading home-heading">
            <h2 class="title">
              {{ row.title }}
            </h2>
          </div>
          <div class="block-content">
            <div class="row">
              <div class="col-sm-3">
                <VueSlickCarousel
                  class="block-product-banner-slide"
                  v-bind="slickBlockProductBannerOptions"
                >
                  <div
                    v-for="(banner, i) in row.imageBanner"
                    :key="`banner_${row.layout}_${index}_${i}`"
                  >
                    <router-link
                      v-if="banner.link && !checkHttpLink(banner.link)"
                      :to="`/bst?link=${banner.link}&category_id=${row.category}`"
                      ><img :src="banner.url" alt=""
                    /></router-link>
                    <router-link
                      v-if="banner.link && checkHttpLink(banner.link)"
                      :to="`${banner.link}`"
                      target="_blank"
                    >
                      <img :src="banner.url" alt="" />
                    </router-link>
                    <img v-if="!banner.link" :src="banner.url" alt="" />
                  </div>
                </VueSlickCarousel>
              </div>
              <div class="col-sm-9">
                <MBoxProduct
                  :category="row.category"
                  :index="index"
                  :slidesToShow="3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="getCurrent.display_mode == 'LANDING_PAGE'">
      <main class="site-main" v-for="(row, index) in layoutHome" :key="index">
        <div class="category-view" v-if="row.layout == 'bannerImage'">
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
            <router-link
              v-if="banner.link && checkHttpLink(banner.link)"
              :to="`${banner.link}`"
              target="_blank"
            >
              <img :src="banner.url" alt="" />
            </router-link>
            <img v-if="!banner.link" :src="banner.url" alt="" />
          </div>
        </div>
        <div class="block-hot-deal block-hot-deal-listing">
          <div class="block-heading" v-if="row.layout == 'landing_filters'">
            <div class="title"></div>
            <!---->
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
          </div>

          <div class="products-grid"></div>
          <div class="toolbar toolbar-products">
            <div class="pages">
              <div
                v-for="(categoryId, index) in getchildren"
                :key="`banner_${index}`"
              >
                <MBoxProduct1 :category="categoryId.id" :index="index" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MBoxProduct1 from "../modal/MBoxProductOutlet.vue";
import MBoxProduct from "../modal/MBoxProduct.vue";
export default {
  components: { MBoxProduct1, MBoxProduct },
  data() {
    return {
      category_ID: null,
      src: "https://canifa.com/img/486/733/resize",
      dataProduct: [],
      loadLayoutsHome: [],
      productChil: null,
      slickOptions: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        pauseOnHover: false,
      },
      slickBlockProductBannerOptions: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow:
          '<span type="button" class="slick-prev"><span></span></span>',
        nextArrow:
          '<span type="button" class="slick-next"><span></span></span>',
        pauseOnHover: false,
      },
    };
  },
  created() {
    this.getLayouts();
    this.getCart();
    this.getCategories();
    // this.getloadProductChildren();
  },
  // watch: {
  //   $route() {
  //     this.loadCategories();
  //   },
  //   categories() {
  //     this.loadCategories();
  //   },
  //   layouts() {
  //     this.loadLayouts();
  //   },
  // },
  computed: {
    ...mapGetters(["layouts", "categories"]),
    getCurrent() {
      if (!this.categories) return;
      let data1 = [
        ...this.categories?.filter(
          (e) => (e?.level === 1) & (e?.include_in_menu === 1)
        ),
      ];
      let data = [
        ...this.categories?.filter(
          (e) =>
            (e?.level === 2) &
            (e?.name.toLowerCase() === this.$route.name.toLowerCase()) &
            (e?.include_in_menu === 1)
        ),
      ];
      // console.log("data1", data);
      if (this.$route.path == "/") {
        return data1[0];
      } else return data[0];
    },
    getchildren() {
      if (!this.getCurrent) return;
      console.log("this.layoutHome: ", this.getCurrent);
      let data = [...this.getCurrent?.children_data];
      console.log("data: ", data);
      return data;
    },
    getIdLayouts() {
      return this.getCurrent?.id;
    },
    layoutHome() {
      return this.layouts[this.getIdLayouts];
    },
  },
  methods: {
    // ...mapActions(["loadLayouts", "getCart", "loadCategories"]),
    getLayouts() {
      this.$store.dispatch("loadLayouts");
    },
    // async getloadProductChildren() {
    //   let data = await this.$store.dispatch("loadProductChildren", this.slug);
    //   this.productChil = data.data;
    //   console.log("this.productChil: ", this.productChil);
    // },
    getCart() {
      this.$store.dispatch("getCart");
    },
    getCategories() {
      this.$store.dispatch("loadCategories");
    },
    check() {
      // let id = this.getCurrent.id;

      console.log(
        "getCurrent",
        this.getCurrent,
        this.layouts,
        this.getIdLayouts,
        this.layoutHome,
        this.getchildren
      );
    },

    checkHttpLink(link) {
      let links = `${link}`;
      // console.log("links: ", links);
      if (links) {
        if (links.indexOf("http") !== -1) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
  },
};
</script>
<style>
.slick-prev {
  right: auto !important;
  left: 20px !important;
  transform: rotate(180deg) !important;
}
.slick-prev,
.slick-next {
  position: absolute !important;
  width: 32px !important;
  height: 32px !important;
  display: block !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAxNSAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNSAxLjc1TDEyLjc1IDEzTDEuNSAyNC4yNSIgc3Ryb2tlPSIjMzMzRjQ4IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K) !important;
  top: 50% !important;
  margin-top: -16px !important;
  right: 20px !important;
  z-index: 10 !important;
  background-color: transparent !important;
  cursor: pointer !important;
}
.block-product .product-items .slick-arrow {
  top: calc((100% - 172px) / 2) !important;
  top: -o-calc((100% - 172px)/ 2) !important;
}
</style>

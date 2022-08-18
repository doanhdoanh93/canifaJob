<template>
  <header class="site-header">
    <!-- <button @click="check()">dsfglkg;</button> -->
    <div class="site-header-container">
      <div>
        <div class="header-logo">
          <router-link
            to="/"
            title="Home Page"
            class="a-logo router-link-exact-active router-link-active"
            ><img src="../assets/logo.png" alt="logo"
          /></router-link>
        </div>
      </div>
      <div class="header-menu">
        <ul>
          <li :class="{ active: checkActiveHome == '/' }">
            <router-link
              to="/"
              class="router-link-exact-active router-link-active"
              @click="selectMenu()"
              >Trang Chủ</router-link
            >
          </li>
          <li
            v-for="(category, i) in linkMenu"
            :key="i"
            :class="{ active: isMenuActive(category) }"
          >
            <router-link :to="category.to">
              {{ category.title }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="header-search">
        <div class="search-input-group">
          <button class="search-btn">
            <span>search</span>
          </button>
          <input
            type="text"
            name=""
            placeholder="Bạn tìm gì..."
            class="search-input"
          />
          <!---->
        </div>
        <!-- <div class="search-results" >
          <div class="search-results-container" >
            <div class="search-results-item" >
              <div
                style="display: flex; justify-content: space-between"
                
              >
                <div class="search-results-item-heading" >
                  Lịch sử tìm kiếm
                </div>
                <div
                  class="search-results-item-heading"
                  style="color: #44b9dc"
                  
                >
                  Xóa
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <div class="header-group-icon">
        <router-link
          to="/he-thong-cua-hang.html"
          class="header-store header-icon"
        />
        <LikeProduct />
        <LoGin />
        <AutoCard />
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import AutoCard from "./modal/AutoCard.vue";
import LikeProduct from "./modal/LikeProduct.vue";
import LoGin from "./modal/LoGin.vue";
export default {
  components: { AutoCard, LikeProduct, LoGin },
  data() {
    return {
      checkActiveHome: this.$route.path,
    };
  },
  watch: {
    $route() {
      this.checkActiveHome = this.$route.path;
    },
  },
  computed: {
    ...mapGetters(["linkMenu"]),
  },
  methods: {
    check() {
      console.log(this.$route);
    },
    isMenuActive(category) {
      return this.checkActiveHome
        ? this.checkActiveHome.startsWith(category.to)
        : false;
    },
  },
};
</script>

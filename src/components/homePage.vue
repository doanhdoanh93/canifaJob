<template>
  <div class="wrapper">
    <comHeader />
    <headerPromition v-if="!checkRouter()" />
    <headerSubMenu v-if="checkRouter()" />
    <comHome />
    <comFooter />
  </div>
</template>

<script>
import comFooter from "./comFooter.vue";
import comHeader from "./comHeader.vue";
import comHome from "./comHome.vue";
// import oModal from "./oModal.vue";
import headerPromition from "./headerPromition.vue";
import headerSubMenu from "./headerSubMenu.vue";
import { mapGetters } from "vuex";
export default {
  components: { comHeader, headerPromition, comHome, comFooter, headerSubMenu },
  data() {
    return {
      checkHover: false,
    };
  },
  created() {
    this.checkRouter();
  },
  // watch: {
  //   $route() {
  //     console.log("object", this.$route.path);
  //     if (this.$route.path == "/") {
  //       this.checkHover = false;
  //     } else {
  //       this.checkHover = true;
  //     }
  //   },
  // },
  computed: {
    ...mapGetters(["isModal"]),
    // checkRouter() {
    //   if (this.$route.path == "/") {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // },
  },
  methods: {
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

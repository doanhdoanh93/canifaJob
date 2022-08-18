<template>
  <div>
    <MProductCarousel :products="products" :slidesToShow="slidesToShow" />
  </div>
</template>

<script>
import MProductCarousel from "./MProductCarousel.vue";
import { mapActions } from "vuex";

export default {
  components: { MProductCarousel },
  props: {
    category: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      default: 0,
    },
    slidesToShow: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      show: false,
      products: [],
    };
  },
  created() {
    this.loadData();
  },
  computed: {
    ...mapActions(["loadProduct"]),
  },
  methods: {
    async loadData() {
      this.show = false;
      let data = await this.$store.dispatch("loadProduct", this.category);
      this.products = data.data;
      console.log("this.products: ", this.products);
      this.show = true;
    },
  },
};
</script>

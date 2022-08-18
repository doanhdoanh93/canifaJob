<template>
  <div>
    <ProductCard v-for="(product, i) in products" :key="i" :product="product" />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { mapActions } from "vuex";

export default {
  components: { ProductCard },
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
      // console.log("this.products: ", this.products);
      this.show = true;
    },
  },
};
</script>

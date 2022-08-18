<template>
  <div>
    <VueSlickCarousel
      v-if="isAvailable"
      ref="carousel"
      class="product-items product-items-slide"
      v-bind="slickProductItemsOptions"
    >
      <ProductCard
        v-for="(product, i) in products"
        :key="i"
        :product="product"
      />
    </VueSlickCarousel>
  </div>
</template>
<script>
import ProductCard from "./ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    slidesToShow: {
      type: Number,
      required: false,
      default: 3,
    },
  },
  data() {
    return {
      productImage: false,
      slickProductItemsOptions: {
        slidesToShow: 3,
      },
      // slickProductItemsOptions: {
      //   slidesToShow: this.slidesToShow,
      //   slidesToScroll: 1,
      //   lazyLoad: "ondemand",
      //   autoplay: false,
      //   arrows: true,
      //   dots: false,
      //   autoplaySpeed: 5000,
      //   responsive: [
      //     {
      //       breakpoint: 1200,
      //       settings: {
      //         slidesToShow: this.slidesToShow <= 3 ? this.slidesToShow : 3,
      //       },
      //     },
      //     {
      //       breakpoint: 780,
      //       settings: {
      //         slidesToShow: 3,
      //       },
      //     },
      //     {
      //       breakpoint: 640,
      //       settings: {
      //         slidesToShow: 2,
      //       },
      //     },
      //   ],
      //   prevArrow:
      //     '<span type="button" class="slick-prev"><span></span></span>',
      //   nextArrow:
      //     '<span type="button" class="slick-next"><span></span></span>',
      //   pauseOnHover: false,
      // },
    };
  },
  computed: {
    isAvailable() {
      return this.products?.length > 0 || false;
    },
  },
};
</script>

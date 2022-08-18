<template>
  <VueSlickCarousel
    class="header-promotion"
    v-bind="slickHeaderPomotionOptions"
  >
    <div class="item">Bạn đã được miễn phí vận chuyển</div>
    <div class="item">
      ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 30 ngày
    </div>
  </VueSlickCarousel>
</template>

<script>
export default {
  name: "OHeaderPromotion",
  data() {
    return {
      slickHeaderPomotionOptions: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        vertical: true,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: "8.5px",
        prevArrow:
          '<span type="button" class="slick-prev"><span></span></span>',
        nextArrow:
          '<span type="button" class="slick-next"><span></span></span>',
        pauseOnHover: false,
      },
    };
  },
};
</script>

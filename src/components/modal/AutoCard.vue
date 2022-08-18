<template>
  <div class="header-cart" :class="{ active: microcart }">
    <a href="#" @click="openMicrocart" class="header-cart-icon header-icon">
      <span class="count">{{ totalQty }}</span>
    </a>
    <cardPanel />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import cardPanel from "../blogHome/cardPanel.vue";
// import microPanel from "./microPanel.vue";
export default {
  components: {
    cardPanel,
    // microPanel,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["microcart", "totalQty"]),
  },
  methods: {
    ...mapActions(["openMicrocart"]),
  },
};
</script>
<style>
.minicart-item-qty {
  border: none;
}
</style>

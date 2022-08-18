<template>
  <div>
    <!-- <button @click="check()">dfsfdkjl</button> -->
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: [Array, Object],
      default: () => {},
    },
  },
  methods: {
    check() {
      console.log(this.category);
    },
  },
};
</script>

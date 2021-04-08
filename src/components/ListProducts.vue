<template>
  <div class="d-flex justify-contenet-center flex-wrap">
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import Product from "./Product";
import { mapState } from "vuex";

export default {
  name: "ListProducts",
  components: {
    Product,
  },
  computed: {
    ...mapState(["products"]),
  },
};
</script>
<style lang="scss"></style>

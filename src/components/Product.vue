<template>
  <div>
    <b-card tag="article" style="max-width: 20rem;" class="m-5 card">
      <img :src="require(`@/assets/${product.img}`)" :alt="product.name" />
      <b-card-text>
        <h4>{{ product.name }}</h4>
        <h4>£ {{ product.price }}</h4>
      </b-card-text>
      <b-button href="#" variant="light" class="mr-3">Ver</b-button>
      <b-button href="#" variant="primary">Añadir al carrito</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object,
  },
};
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
  padding-bottom: 1.25rem;
}
</style>

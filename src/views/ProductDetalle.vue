<template>
  <BasicLayout>
    <b-container fluid class="d-flex justify-content-center">
      <div class="row" v-for="product in products" :key="product.id">
        <div v-if="product.id === $route.params.id">
          <div class="col-4">
            <img
              :src="require(`@/assets/${product.img}`)"
              :alt="product.name"
            />
          </div>
          <div class="col-8">
            <h1>{{ product.name }}</h1>
            <h3>{{ product.price }}</h3>
            <input
              type="text"
              class="text-center col.1 mr-2 mb-3 p-1"
              v-model.number="cantidad"
            />
            <b-button variant="primary">Añadir al carrito</b-button>
          </div>
        </div>
      </div>
    </b-container>
  </BasicLayout>
</template>

<script>
import BasicLayout from "../styles/BasicLayout";
import ListProducts from "../components/ListProducts";
import { mapState } from "vuex";
export default {
  name: "ProductDetalle",
  components: {
    BasicLayout,
  },
  computed: {
    ...mapState(["products"]),
  },
};
</script>

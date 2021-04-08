<template>
  <BasicLayout>
    <h3>· Productos destacados ·</h3>
    <ListProducts />
  </BasicLayout>
</template>

<script>
import BasicLayout from "../styles/BasicLayout";
import ListProducts from "../components/ListProducts";
export default {
  name: "Home",
  components: {
    BasicLayout,
    ListProducts,
  },
};
</script>

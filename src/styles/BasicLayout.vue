<template>
  <div>
    <Menu />
    <b-container fluid class="d-flex flex-column align-items-center my-5">
      <slot />
    </b-container>
  </div>
</template>

<script>
import Menu from "../components/Menu";
export default {
  name: "BasicLayout.vue",
  components: {
    Menu,
  },
};
</script>

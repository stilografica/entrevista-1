<template>
  <b-dropdown-item>
    <ItemCart v-for="c in cart" :key="c.id" :c="c" />
    <p>
      <strong>Total</strong>: £
      <b-badge variant="light" class="ml-2" @click="remove">Vaciar</b-badge>
    </p>
  </b-dropdown-item>
</template>

<script>
import { mapState } from "vuex";
import ItemCart from "./ItemCart";
export default {
  name: "MiniCart",
  components: {
    ItemCart,
  },
  computed: {
    ...mapState(["cart"]),
  },
  methods: {
    remove() {
      this.$store.dispatch("removeCart");
    },
  },
};
</script>
<style lang="scss"></style>

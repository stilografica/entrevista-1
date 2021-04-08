<template>
  <b-dropdown-item>
    <div @click="$event.stopPropagation()">
      <p>
        <strong>{{ c.name }}</strong>
        <b-badge variant="dark" class="ml-2" @click="borrarItem"
          >Eliminar</b-badge
        >
      </p>
      <p>
        <strong> {{ c.quantity }} x {{ c.price }}€</strong>
      </p>
    </div>
    <hr />
  </b-dropdown-item>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "MiniCart",
  props: {
    c: Object,
  },
  methods: {
    borrarItem() {
      this.$store.dispatch("deleteItem", this.c);
    },
  },

  computed: {
    ...mapState(["cart"]),
  },
};
</script>
<style lang="scss"></style>

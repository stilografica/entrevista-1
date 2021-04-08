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
        <span v-if="c.name === 'Té verde'">
          <strong> {{ c.quantity * 2 }} x {{ c.price }}€</strong>
          <b-badge variant="success" class="ml-2"
            >{{ c.quantity }} de regalo</b-badge
          >
        </span>
        <span v-if="c.name != 'Té verde'">
          <strong> {{ c.quantity }} x {{ c.price }}€</strong>
          <span v-if="c.name === 'Fresas' && c.quantity >= 3">
            <b-badge variant="success" class="ml-2">Bajada de precio</b-badge>
          </span>
          <span v-if="c.name === 'Café' && c.quantity >= 3">
            <b-badge variant="success" class="ml-2">Bajada de precio</b-badge>
          </span>
        </span>
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

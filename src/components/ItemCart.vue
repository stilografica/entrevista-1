<template>
  <b-dropdown-item>
    <div @click="$event.stopPropagation()">
      <p>
        <strong>{{ c.name }}</strong>
        <b-badge variant="dark" class="ml-2">Eliminar</b-badge>
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
  components: {},

  computed: {
    ...mapState(["cart"]),
  },
};
</script>
<style lang="scss"></style>

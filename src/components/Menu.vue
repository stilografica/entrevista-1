<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/"
        ><img src="../assets/colmado-brand.svg" alt="Colamado"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" exact active>Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Cart" right>
            <b-dropdown-item>Carrito</b-dropdown-item>
            <MiniCart />
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import MiniCart from "./MiniCart";
export default {
  name: "Menu",
  components: {
    MiniCart,
  },
  computed: {},
};
</script>

<style></style>

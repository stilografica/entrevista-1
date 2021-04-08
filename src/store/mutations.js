export const ADDITEM = (state, { name, quantity, price }) => {
  let productCart = state.cart.find((element) => {
    return element.name === name;
  });
  if (productCart) {
    productCart.quantity += quantity;
    return;
  }
  state.cart.push({ name, quantity, price });
};

export const CLEARCART = (state) => {
  state.cart = [];
};

export const DELETEITEMCART = (state, c) => {
  let index = state.cart.indexOf(c);
  state.cart.splice(index, 1);
};

export const CANTIDADITEMCART = (state, cantidad) => {
  state.cantidad = cantidad;
};

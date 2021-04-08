export const ADDITEM = (state, { name, quantity, price }) => {
  let productCart = state.cart.find((element) => {
    return element.name === name;
  });
  if (productCart) {
    productCart.quantity += quantity;
    if (productCart.name === "Fresas" && productCart.quantity >= 3) {
      productCart.price = 4.5;
      return;
    }
    if (productCart.name === "Café" && productCart.quantity >= 3) {
      productCart.price = parseFloat((11.23 / 3) * 2).toFixed(2);
      Math.round(productCart.price * 100) / 100;
    }
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

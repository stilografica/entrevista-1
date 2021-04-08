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

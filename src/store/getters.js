export const cartTotalPrice = (state) => {
  let total = 0;
  state.cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
};

export const itemsCart = (state) => {
  let number = 0;
  state.cart.forEach((item) => {
    number += item.quantity;
  });
  return number;
};

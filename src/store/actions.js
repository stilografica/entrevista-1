export const addMiniCart = ({ commit }, { name, quantity, price }) => {
  commit("ADDITEM", { name, quantity, price });
};
export const removeCart = ({ commit }) => {
  commit("CLEARCART");
};
export const deleteItem = ({ commit }, c) => {
  commit("DELETEITEMCART", c);
};

export const addMiniCart = ({ commit }, { name, quantity, price }) => {
  commit("ADDITEM", { name, quantity, price });
};

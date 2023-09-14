export const updateCart = (quantity) => {
  return {
    type: "UPDATE_CART",
    payload: quantity,
  };
};

export const updateAddress = (address) =>{
  return{
    type : "UPDATE_ADDRESS",
    payload : address
  }
}


export const getCart = (state) => {
    return state.cartReducer.cart;
}

export const getCount = (state) => {
  return state.cartReducer.count;
}

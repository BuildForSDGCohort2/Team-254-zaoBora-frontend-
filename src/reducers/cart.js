const initialState = {
  cartItems: []
}

export default ( state = initialState, action ) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
        return{
          ...state,
          cartItems: action.payload
        };
    case 'CLEAR_ITEM_FROM_CART':
        return {
          ...state,
          cartItems: action.payload
        };
    case 'REMOVE_ITEM_FROM_CART':
        return {
          ...state,
          cartItems: action.payload
        };
    default:
        return state;
  }
}

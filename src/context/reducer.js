export const initialState = JSON.parse(localStorage.getItem("storage")) || {
    wishlist: [],
    cart: []
  };
  
  export const reducer = (state, action) => {
    let result = state;
    switch (action.type) {
      case "ADD_WISHLIST":
        let index = state.wishlist.findIndex(item => item.id === action.payload.id);
        if (index < 0) {
          result = { ...state, wishlist: [...state.wishlist, action.payload] };
        } else {
          result = { ...state, wishlist: state.wishlist.filter(item => item.id !== action.payload.id) };
        }
        localStorage.setItem("storage", JSON.stringify(result));
        return result;
        case "ADD_CART":
          const cart = Array.isArray(state.cart) ? state.cart : [];
          let cartIndex = cart.findIndex(item => item.id === action.payload.id);
          if (cartIndex < 0) {
            result = { 
              ...state, 
              cart: [...cart, { ...action.payload, amount: 1 }]
            };
          } else {
            result = {
              ...state,
              cart: cart.map((item, index) =>
                index === cartIndex ? { ...item, amount: item.amount + 1 } : item
              )
            };
          }
          localStorage.setItem("storage", JSON.stringify(result));
          return result;
        case "DEC_CART":
          let decIndex = state.cart.findIndex(item => item.id === action.payload.id)
          result = {...state, cart: state.cart.map((item, inx) => (
            decIndex === inx ? {...item, amount: item.amount - 1} : item
          ))}
          localStorage.setItem("storage", JSON.stringify(result))
          return result
        case "DELETE_CART":
          result = {...state, cart: state.cart.filter(item => item.id !== action.payload.id)}
          localStorage.setItem("storage", JSON.stringify(result))
          return result
        case "CLEAR_CART":
          result = {...state, cart: []}
          localStorage.setItem("storage", JSON.stringify(result))
          return result
      default:
        return state;
    }
  };
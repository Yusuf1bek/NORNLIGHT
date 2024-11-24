export const initialState = JSON.parse(localStorage.getItem("storage")) || {
    wishlist: [],
    cart: [],
    token: null,
    reload: false
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
        case "ADD__CART":
            let cartIndex = state.cart?.findIndex(pro => pro.id === action.payload.id)
            if(cartIndex < 0){
                result = {...state, cart: [...state.cart, {...action.payload, amount: 1}]}
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            }
            else{
                result = {...state, cart: state.cart?.map((pro, inx) => (
                    cartIndex === inx ? {...pro, amount: pro.amount + 1} : pro
                ))}
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            }
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
        case "ADD_TOKEN":
          result = {...state, token: action.payload }
          localStorage.setItem("storage", JSON.stringify(result))
          return result
          case "RELOAD":
            return { ...state, reload: !state.reload };
      default:
        return state;
    }
  };
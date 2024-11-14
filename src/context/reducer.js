export const initialState = JSON.parse(localStorage.getItem("storage")) || {
    wishlist: []
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
      default:
        return state;
    }
  };
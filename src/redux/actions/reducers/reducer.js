

const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        const tempCart = [...state.carts];
        tempCart[itemIndex].qnty += 1;
        return {
          ...state,
          carts: tempCart,
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };

        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "RMV_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };

    case "RMV_ONE":
      const itemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.carts[itemIndex_dec].qnty >= 1) {
        const dltitem = (state.carts[itemIndex_dec].qnty -= 1);
        return {
          ...state,
          carts: [...state.carts],dltitem
        };
      } else if (state.carts[itemIndex_dec].qnty === 1) {
        const data = state.carts.filter((ele) => ele.id !== action.payload);
        return {
          ...state,
          carts: data,
        };
      }
      break;
    case "STORE_DATA":
      const store = action.payload;
      return {
        ...state,
        storeData: store,
      };
      case "PRICE":
        let price=state.carts.price;
        let {allProducts}=state;
        let tempAllProducts=[...allProducts];
        if(price){
          tempAllProducts=tempAllProducts.filter((element)=>element.price<=price)
        }
          console.log(state.carts.price)
        
  
      break;
    default:
      return state;
  }
};

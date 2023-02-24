

export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item 
  };
};
export const PRICE=(price)=>{
  return{
type:"PRICE",
payload: price
  };
}
export const MEMORIZE=(list)=>{
  return {
    type:"STORE_DATA",
    payload: list
  };
}
export const DLT = (id) => {
    return {
      type: "RMV_CART",
      payload: id 
    };
  };

  export const REMOVE = (item) => {
    return {
      type: "RMV_ONE",
      payload:  item 
    };
  };
  
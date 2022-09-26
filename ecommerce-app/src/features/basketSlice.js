import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    //dispatch action
    // Use the PayloadAction type to declare the contents of `action.payload`
    addItemToBasket: (state, action) => {
      state.items=[...state.items,action.payload] //add the action we do mean it add item in basket

      
    },
    removeItemFromBasket: (state, action) => {
     // state.value += action.payload;
     //use the id that we passed and remove the item from basket with that id
     let copyOfBasket=[...state.items]
     //first index of that id find in item index
     const index=state.items.findIndex((item)=>item.id===action.payload.id)
     if(index!==-1){
      //splice the item out of the basket
      //copyOfBasket=copyOfBasket.splice(index,1); return the array of one element we delete and copy it to the original array
     copyOfBasket.splice(index,1);
      state.items=copyOfBasket
     }else{
      alert('Woah this item inst in the basket')
     }
    },
    totalCost:(state,action)=>{
      
    }
  },
});

export const { addItemToBasket ,removeItemFromBasket} = basketSlice.actions;
//Selector
export const selectItem=(state)=>state.basket.items
export const selectItemCount = (state) => state.basket.items.length;
export const selectBasketTotalAmount=(state)=>
  state.basket.items.reduce((total,item)=>(total+=item.price),0)




export default basketSlice.reducer;

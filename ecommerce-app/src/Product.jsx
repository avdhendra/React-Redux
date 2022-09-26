import React from "react";
import { useDispatch } from "react-redux";
import { addItemToBasket, removeItemFromBasket } from "./features/basketSlice";

export default function Product({ id, title, price }) {
  const dispatch = useDispatch();
  const addItem = () => {
    const producttoAdd = {
      id,
      title,
      price,
    };
    dispatch(addItemToBasket(producttoAdd));
  };
  const removeItem = () => {
    dispatch(removeItemFromBasket({ id }));
  };
  return (
    <div className="flex justify-between p-10 border-blue-700 border m-5">
      <div>
        <p>{title}</p>
        <p>${price}</p>
      </div>
      <div className="flex flex-col">
        <button
          onClick={addItem}
          className="p-2 bg-red-500 rounded-2xl focus:outline-none focus:ring-2 ring-red-800 hover:bg-red-300"
        >
          Add to Basket
        </button>
        <button onClick={removeItem}>Remove Item from the Basket</button>
      </div>
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import { selectBasketTotalAmount, selectItem } from "./features/basketSlice";

export default function BasketView() {
  const items = useSelector(selectItem);
  const basketTotal=useSelector(selectBasketTotalAmount)
  return (
    <div>
    <div className="flex justify-between items-center">
      <h5 className="text-4xl">Your Basket:</h5>
      <p>Total:${basketTotal}</p>
    </div>
    </div>
  );
}

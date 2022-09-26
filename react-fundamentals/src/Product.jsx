import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { basketState, numberOfItemInBasket } from './atoms/basketState'

export default function Product({id,title,price}) {
    const[basket,setBasket]=useRecoilState(basketState)
   // const[count,setCount]=useState(0)
   const count=useRecoilValue(numberOfItemInBasket(id))
   console.log(basket)
    const addItemtoBasket=()=>{
        const item={
           id,title,price 
        }
      //  setCount(count+1)
        setBasket([...basket,item])
    }
    const removeItemFrom=()=>{
        const index=basket.findIndex((basketItem)=>basketItem.id===id)
        let newBasket=[...basket]
        if(index>=0){
            //splice not create new array i just remove one elemenet from the given index
            newBasket.splice(index,1)
      //      setCount(count-1);

        }else{
            console.warn(`Cant remove (id:${id})`)
        }
        setBasket(newBasket)
    }
  return (
    <div>
        <h2>{title}</h2>
        <h3>{price}</h3>
        <button onClick={addItemtoBasket}>+</button>
        <p>{count}</p>
        <button onClick={removeItemFrom}>-</button>
    </div>
  )
}

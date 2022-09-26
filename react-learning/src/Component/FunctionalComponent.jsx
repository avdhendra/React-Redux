import React, { useState } from 'react'

 export default function FunctionalComponent() {
    let [count,setCount]=useState(0);
    const decrement=()=>{
      if(count<=0){
        setCount(0); 
      }else{
        setCount(count-1);  
      }
        
    }
    const increment=()=>{
        setCount(count+1);
    }
  return (
    <div><h1>
        welcom to my counter app
        </h1>
        <p>the count is: {count}</p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        </div>
  )
}


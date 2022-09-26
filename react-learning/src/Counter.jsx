import React from 'react'
import { useState } from 'react'

export default function Counter() {
  const[number,setNumber]=useState(0)
  const [lotterNumber,setLotteryNumber]=useState([])
  const decrement=()=>{
    
    setNumber(number-1)
  }  
  const increment=()=>{
 
    setNumber(number+1)
  }
  const addlottery=()=>{
    setLotteryNumber([...lotterNumber,number])

  }
  return (
    <div>
        <h1>Counter</h1>
      
            <button onClick={decrement}>-</button>
            <p>{number}</p>
            <button onClick={increment}>+</button>
            <button onClick={addlottery}>Generator Number</button>
        

        {//filter the number
        //if we dont use the key it repaint the whole list in map because it checks the item in list which are changes
        
            lotterNumber.filter((num)=>num!==2).map((num,index)=>
            <p key={index}>this is the lottery Number {num}</p>
            )

        }
    </div>
  )
}
//Map able to return the value 
//while foreach not return any value
import React from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { selectItemCount } from "./features/basketSlice";
export default function Header() {
    const numberofItems=useSelector(selectItemCount)
    const navigate=useNavigate()
  return (
    
        <header className='p-4 flex justify-between items-center'>
        {/* Left */}
        <div>
          <h1 className="text-5xl">Ecommerce App</h1>
          <h2>Your No 1 store for React stuff</h2>
        </div>
        <div>
          <h3 onClick={()=>navigate('/checkout')}>Items in your basket: {numberofItems}</h3>
        </div>
      </header>
    
  )
}

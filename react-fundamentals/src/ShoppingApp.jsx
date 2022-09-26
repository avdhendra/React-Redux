import React from 'react'
import { useRecoilValue } from 'recoil'
import { basketState } from './atoms/basketState'
import Product from './Product'

export default function ShoppingApp() {
    const basket=useRecoilValue(basketState)
    
  return (
    <div>
        <h1>Our Shopping App</h1>
        <h2>the Total number of items in your basket :{basket.length} </h2>
    <Product id={215}title="iphone 12" price={999}/>
    <Product id={235}title="MacBook Pro" price={2200}/>
    
    </div>
  )
}

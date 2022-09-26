import React from 'react'
import './Product.css'
export default function Product(props) {
  return (
    <div className='product1'>
        <h2 className='product1__title'>{props.title}</h2>
        <h3>${props.price}</h3>
    </div>
  )
}

import React from 'react'
import PropsPassing2 from './PropsPassing2'
import './PropsPassing.css'
import FunctionalComponent from '../Component/FunctionalComponent'
export default function PropsPassing({name,description,price}) {
  return (
    <div className='product'>
       <PropsPassing2 name={name} description={description}/>
       <h2 className='product__error'>An Error Occured</h2>
       <h3 className='product__price'>{price}</h3>
       <FunctionalComponent/>
    </div>
  )
}

import React from 'react'
import Product from './Product'
import BasketView from './BasketView'
import Header from './Header'
export default function Store() {
  return (
    <div>
            <Header />
            <Product id="1234" title="iPad pro 2021" price={2000} />
            <Product id="9999" title="Soft Skills by John Snom" price={40} />
            <Product id="5678" title="Rubix Cube" price={600} />
            <BasketView />
    </div>
  )
}

import React from 'react'
import "./desing.css"
import ProductList from './produk/product__list'


export default function Design({products}) {
  return (
    <div className='design'>
        <p>Silahkan pilih design</p>
        <div>
            <ProductList products={products} />
        </div>
    </div>
  )
}

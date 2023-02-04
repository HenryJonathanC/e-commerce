import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProductComponents from './ProductComponents'
import { fetchProducts } from '../redux/actions/productsActions'

const ProductListing = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts());
  },[])
  
  return (
    <div className='ui grid container'>
        <ProductComponents />
    </div>
  )
}

export default ProductListing
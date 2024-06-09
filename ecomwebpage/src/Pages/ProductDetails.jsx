import React, { useState } from 'react'
import {useLoaderData} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { selectCartItem, setCartItem } from '../store/Cart';

const ProductDetails = () => {



  const items = useLoaderData();

  // console.log(items);

  const dispatch = useDispatch();
  const allItems = useSelector(selectCartItem)
  const [isRemove, SetisRemove]= useState(allItems.some(item=>item.id === items.id))


  const addTocart = () => {
    let itemStore={
      id: items.id,
      title: items.title,
      price: items.price,
      quantity: 1
      
    }
    dispatch(setCartItem([...allItems, itemStore]))
    SetisRemove(true);
  }


  const removeFromCart = () => {
    dispatch(setCartItem(allItems.filter(item => item.id != items.id)))
    SetisRemove(false);
  }

    return (
        <>
        <div className='product-details'>
          <div className='product-image'>
            <img  src={items.image} alt="" />
          </div>
          <div className='product-info'>
            <h2>{items.title}</h2>
            <h4 className='description'>{items.description}</h4>
            <div className='add-to-cart'>
              <h4>Price: Rs. {items.price}</h4>
              <h4>Rating : {items.rating.rate}</h4>
              <button onClick={() => isRemove ? removeFromCart(): addTocart()}>{ isRemove ? "REMOVE FROM CART": "ADD TO CART"}</button>
            </div>
          </div>
        </div> 
        </>
  )
}

export default ProductDetails

import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItem, setCartItem } from '../store/Cart';

import { IoMdAdd } from 'react-icons/io';
import { IoMdRemove } from 'react-icons/io';

const Modal = forwardRef((props, ref) => {
  const cartItems = useSelector(selectCartItem);
  const dispatch = useDispatch();

  const addItemNo = (id) => {
    dispatch(setCartItem(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )));
  };

  const removeItemNo = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item.quantity > 1) {
      dispatch(setCartItem(cartItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )));
    }
  };

  return (
    <dialog className='modal' ref={ref}>
      <div>
        {cartItems.map(item => (
          <div className='modal-info' key={item.id}>
            <h5 className='title'>{item.title} (Rs.{item.price})</h5>
            <div className='quantity'>
              <button className='add-icon' onClick={() => addItemNo(item.id)}><IoMdAdd /></button>
              <h5>{item.quantity}</h5>
              <button className='remove-icon' onClick={() => removeItemNo(item.id)}><IoMdRemove /></button>
            </div>
          </div>
        ))}
      </div>
      <form className='close' method='dialog'>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default Modal;

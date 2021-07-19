import React, {useContext} from 'react'
import {AppContext} from '../contexts/context'

const CartItem = ({id, name, price, link})=> {
  const {deleteItem, increase, decrease, cart} = useContext(AppContext)
  const cartItem = cart.filter(cartItem => cartItem.id === id)[0]

  return (
    <article className='cart-item'>
      <img className="image-link" src={link}/>
      <div className="item-info">
        <h4>{name}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={()=>deleteItem(id)}>
          remove
        </button>
      </div>
      <div className="arrows">
        <p className="sign" onClick={()=>increase(id)}>+</p>
        <p>Amount: {cartItem.amount}</p>
        <p className="sign" onClick={()=>decrease(id)}>-</p>
      </div>
    </article>  
  )
}

export default CartItem
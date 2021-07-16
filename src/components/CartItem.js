import React from 'react'

const CartItem = ({id, name, price, link})=> {
  return (
    <article className='cart-item'>
      <img className="image-link" src={link}/>
      <div className="item-info">
        <h4>{name}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onclick={()=> console.log('remove')}>
          remove
        </button>
      </div>
      <div className="arrows">
        <p className="sign">+</p>
        <p>Amount</p>
        <p className="sign">-</p>
      </div>
    </article>  
  )
}

export default CartItem
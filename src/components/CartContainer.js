import React, {useContext} from 'react' 
import { AppContext } from '../contexts/context'
import CartItem from './CartItem'

const CartContainer = ()=> {
  const {cart, total, emptyCart} = useContext(AppContext)

  if(cart.length===0) {
    return (
      <section>
        <header className="cart-header-info">
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }
  
  return (
    <section className="cart">
      <header className="cart-header-info">
        <h2>Your bag</h2>
      </header>
     
      <div>
        {cart.map(item=> {
          return <CartItem key={item.id} {...item}/>
        })}
      </div>
      <hr/>

      <footer>
        <div className="cart-total">
          <h4>total<span> ${total}</span></h4>
        </div>
        <button 
          className="btn clear-btn"
          onClick={emptyCart}
        >
          Empty cart
        </button>
      </footer>

    </section>
  )
}

export default CartContainer
import React, {useState, useReducer, useEffect} from 'react'
import {data} from '../data'
// import reducer from '../reducers/reducer'
// import reducer from './reducer'
const reducer = (state, action)=> {
  console.log("action payload in reducer", action.payload)
  switch(action.type) {
    case "EMPTY_CART": 
      console.log("EMPTY CART OPTION RUN UN REDUCER")
      return {...state, cart: []}
    case "DELETE_ITEM": 
      console.log("REMOVE ITEM IN REDUCER")
      const newcart = state.cart.filter(item=> {
        return item.id !== action.payload
      })
      console.log(newcart)
      return {...state, cart: newcart}
    case "DECREASE": 
      console.log("decrease called")
      let newTempCart = state.cart.map(cartItem=> {
        if(cartItem.id===action.payload) {
          if(cartItem.amount ===0) {
            console.log("You have 0 items in cart")
            return cartItem
          }
          return {...cartItem, amount: cartItem.amount-1}
        }
        return cartItem
      })
      return {...state, cart: newTempCart}
    case "INCREASE": 
      console.log("increase called")
      let tempCart = state.cart.map(cartItem=> {
        if(cartItem.id===action.payload) {
          return {...cartItem, amount: cartItem.amount+1}
        } 
        return cartItem
      })  
      return {...state, cart: tempCart}
    case "UPDATE_AMOUNT": 
      console.log("Update amount called")
      const updatedAmount = Number(action.payload)
      return {...state, amount: action.payload.amount, total: action.payload.total}  
    default: 
      return state  
  }
}

const AppContext = React.createContext()

const initialState = { 
  isLoading: false, 
  cart: data, 
  total: 0, 
  amount: 0,
}

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const emptyCart = ()=> {
    dispatch({type: "EMPTY_CART"})
    console.log("empty cart run")
  }

  const deleteItem = (id)=> {
    dispatch({type: "DELETE_ITEM", payload: id})
    console.log("delete item called", id)
  }

  const increase = (id) => {
    dispatch({type: "INCREASE", payload: id})
  }

  const decrease = (id) => {
    dispatch({type: "DECREASE", payload: id})
  }
  
  useEffect(()=> {
      console.log("use effect called on state change")
      // calculate the amount values for every cart item and put in into state's amount to ilustrate number if items in cart
      // calculate the total price using reduce and multiplying the amount by price. Save it as state's total
      const amount = state.cart.reduce((prev, cartItem)=> {
                        return prev + cartItem.amount
                    },0)
      const total = state.cart.reduce((prev, cartItem)=> {
                        return prev + (cartItem.amount*cartItem.price)
      }, 0)
      dispatch({type: "UPDATE_AMOUNT", payload: {amount, total}})

  }, [state.cart])

  return (
    <AppContext.Provider
      value={{...state,
               emptyCart,
               deleteItem, 
               increase, 
               decrease, 
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export {AppContext, AppProvider}
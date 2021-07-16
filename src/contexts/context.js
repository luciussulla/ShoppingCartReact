import React, {useState, useReducer} from 'react'
import {data} from '../data'
// import reducer from '../reducers/reducer'
// import reducer from './reducer'
const reducer = (state, action)=> {
  switch(action.type) {
    case "EMPTY_CART": 
      console.log("EMPTY CART OPTION RUN UN REDUCER")
      return {...state, cart: []}
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

  return (
    <AppContext.Provider
      value={{...state,
               emptyCart
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export {AppContext, AppProvider}
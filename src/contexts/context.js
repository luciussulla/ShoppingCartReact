import React, {useState, useReducer} from 'react'
import {data} from '../data'
import reducer from '../reducers/reducer'
// import reducer from './reducer'
const AppContext = React.createContext()

const initialState = { 
  isLoading: false, 
  cart: data, 
  total: 0, 
  amount: 0,
}

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider
      value={{...state}}
    >
      {children}
    </AppContext.Provider>
  )
}

export {AppContext, AppProvider}
import React, {useContext, useReducer, useEffect} from 'react'
import {AppContext} from './contexts/context'
import Header from './components/Header'
import CartContainer from './components/CartContainer'
import './App.css';

function App() {
  const {isLoading} = useContext(AppContext)
  
  if(isLoading) {
    return (
      <div className="cart">
        <p className="loadingMsg">Loading...</p>
      </div>
    )
  }

  return ( 
      <div className="App">
          <Header/>
          <CartContainer />
      </div>
  );
}

export default App;

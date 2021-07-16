import React, {useContext} from 'react'
import {AppContext} from '../contexts/context'


const Header = ()=> {
  const data = useContext(AppContext)
  const {amount} = data

  console.log(data, 'from header')
  return (
    <header className="main-header">
      <p>Logo</p>
      <p>cart <span className="amountSpan">{amount}</span></p>
    </header>
  )
}

export default Header
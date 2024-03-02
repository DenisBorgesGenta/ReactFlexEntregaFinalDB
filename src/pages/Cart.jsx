import React, { useContext } from 'react'
import { CartContext } from '../components/context/CartContext'

const Cart = () => {
    const {cart, cartTotal, emptyCart, removeItem} = useContext(CartContext)

return(
  <div>
    <h2>Tus productos:</h2>
    {
        cart.lenght === 0 ?
        <h3>Tu carrito esta vacio.</h3> :
        <>
    
    {
        cart.map((item) =>(
    <div>
            
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.description}</div>
            <img src={item.img}/>
            <div><button onClick={()=>removeItem(item.id)}>remover art.</button></div></div>
        ))
    }
    </>
    }

    <h3>Tu total es: ${cartTotal()}</h3>
    <div><button onClick={()=>emptyCart()}>VACIAR CARRITO.</button></div>
  </div>
)
    
}


export {Cart}
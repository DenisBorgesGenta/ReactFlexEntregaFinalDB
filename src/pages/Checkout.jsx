import React, { useContext, useState } from 'react'
import { CartContext } from '../components/context/CartContext'
import { Navigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../services/firebaseConfig'


const Checkout = () =>{
    const {cart, emptyCart} = useContext(CartContext)
    const [values, setValues] = useState({
        name: '',
        address: '',
        email: '',
    })

const handleInputChange = (e) =>{
     setValues({
        ...values,
         [e.target.name]: e.target.value
     })
    }

    const ordersRef = collection(db, 'orders')

    const handleSubmit = (e) =>{
        e.preventDefault()
        const order = {
            cart, values
        }
        
        addDoc(ordersRef, order)
        emptyCart()
      
    } 

    if(cart.length ===0){
     return <Navigate to='/'/>
    }


    const handleUpload=()=>{
        products.forEach((item) => {
            delete item.id
            addDoc(productsRef, item)
        })
    }

   

     return(
        <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            required
            placeholder='Nombre'
            name='name'
            onChange={handleInputChange}></input>
        
            <input
            type='text'
            required
            placeholder='Dirección'
            name='address'
            onChange={handleInputChange}/>
    
            <input
            type='email'
            required
            placeholder='Email'
            name='email'
            onChange={handleInputChange}/>
    
            <button type='submit'>Confirmar compra.</button>
            </form>
             </div>
           )}
        


         

         export {Checkout}
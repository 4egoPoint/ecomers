
import { BsCartX } from "react-icons/bs";//<BsCartX />
import { BsCartPlus } from "react-icons/bs";//<BsCartPlus />
import { useSelector, useDispatch } from 'react-redux'
import "./cart.scss"
import { useEffect, useState } from "react";
import { decrement, increment } from '../../features/cart/cartSlice'


const Cart = () => {
   const [isHaveProduct, setIsHaveProduct] = useState(false)
   const [total, setTotal] = useState(0)
   const cart = useSelector((state) => state.cart)
   const dispatch = useDispatch()
   const del = (product)=>{
      product.curNumber === 0 ? cart.pop(product) : dispatch(decrement(product))
      
   }
   useEffect(()=>{
      recount()
   },[del])
   const recount = () =>{
      let i = 0
      cart.map((product)=>{
         i += product.curNumber * product.price
      })
      setTotal(i)
   }
   return (
      <div className="cart">
         <div className="cart__wrapper">
            <div className="cart__products">
               <h2 className="cart__title">Your future pets are here!</h2>
               <div className="cart__list">
                  {
                     cart.length === 0 ? <div className="summary__list-nun"><img src="data:image/png;base64,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"/></div>:
                     cart.map((product) => <div className="cart__list-item item">
                        <div className="item__img">
                           <img src={product.img} />
                        </div>
                        <div className="item__info">
                           <div className="item__name">{product.name}</div>
                           <div className="item__available">Available: {product.number}</div>
                        </div>
                        <div className="item__number">
                           {
                              product.number === product.curNumber ?<div className="item__plus">+</div>:
                              <div onClick={()=>dispatch(increment(product))} className="item__plus">+</div>
                           }
                           <div className="item__value">{product.curNumber}</div>
                           {
                              0 === product.curNumber ?<div className="item__minus">-</div>:
                              <div onClick={() => del(product)} className="item__minus">-</div>
                           }
                           
                        </div>
                     </div>)
                  }
               </div>
            </div>
            <div className="cart__summary summary">
               <div className="summary__first">
                  <h3 className="summary__prices">Prices:</h3>
                  <div className="summary__list">
                     {
                        cart.length === 0 ? <div className="summary__list-nun"><img src="data:image/png;base64,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"/></div>:
                        cart.map((product) => <div className="summary__item">
                           <div className="summary__name">{product.name}</div>
                           <div className="summary__price">
                              <div className="summary__1">{product.price}$</div>
                              <div className="summary__2">{product.curNumber}x</div>
                           </div>
                        </div>)
                     }
                  </div>
               </div>
               <div className="summary__seck">
                  <div className="summary__total">Total Price: {total}$</div>
                  <button className="summary__button">Proceed to payment!</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cart
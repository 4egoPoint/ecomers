
import { BsCartX } from "react-icons/bs";//<BsCartX />
import { BsCartPlus } from "react-icons/bs";//<BsCartPlus />
import { useSelector, useDispatch } from 'react-redux'
import "./cart.scss"
import { useState } from "react";

const Cart = () => {
   const [isHaveProduct, setIsHaveProduct] = useState(false)
   const cart = useSelector((state) => state.cart)
   return (
      <div className="cart">
         <div className="cart__wrapper">
            <div className="cart__products">
               <h2 className="cart__title">Your future pets are here!</h2>
               <div className="cart__list">
                  {
                     cart.map((product) => <div className="cart__list-item item">
                        <div className="item__img">
                           <img src={product.img} />
                        </div>
                        <div className="item__info">{product.name}</div>
                        <div className="item__number"></div>
                     </div>)
                  }
               </div>
            </div>
            <div className="cart__summary summary">
               <div className="summary__first">
                  <h3 className="summary__prices">Prices:</h3>
                  <div className="summary__list">
                     {
                        cart.map((product) => <div className="summary__item">
                           <div className="summary__name">{product.name}</div>
                           <div className="summary__price">{product.price}$</div>
                        </div>)
                     }
                  </div>
               </div>
               <div className="summary__seck">
                  <div className="summary__total">Total Price: 0$</div>
                  <button className="summary__button">Proceed to payment!</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cart
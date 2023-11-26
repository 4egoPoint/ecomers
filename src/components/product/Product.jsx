
import { TbTruckDelivery } from "react-icons/tb";
import { IoAdd } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../features/cart/cartSlice'
import "./product.scss"
import { useState } from "react";

const Product = ({ id, name, animal, isNew, price, desc, img, }) => {
   const [prod, setProd] = useState({ id, name, animal, isNew, price, desc, img, })
   const [isClicked, setIsClicked] = useState(true)
   const cart = useSelector((state) => state.cart)
   const dispatch = useDispatch()
   const addToCart = () => {
      dispatch(addProduct(prod))
      setIsClicked(false)
   }
   return (
      <div className="product">
         <div className="product__wrapper">
            <div className="product__img">
               <img src={img} />
            </div>
            <div className="product__content">
               <div class="product__col">
                  <h2 className="product__name">{name}</h2>
                  <div className="product__text">{desc}</div>
               </div>
               {isNew ? <div className="product__new">NEW</div> : <></>}
            </div>
            <div className="product__actions">
               <div className="product__price"><TbTruckDelivery /><span>{price}$</span></div>
               {
                  isClicked ? <button 
                  onClick={addToCart} className="product__add">Add<IoAdd /></button> : <button 
                  className="product__add">Add<IoAdd /></button>
               }
            </div>
         </div>
      </div>
   )
}

export default Product
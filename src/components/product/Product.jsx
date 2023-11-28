
import { TbTruckDelivery } from "react-icons/tb";
import { IoAdd } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../features/cart/cartSlice'
import "./product.scss"
import { useEffect, useState } from "react";
//name.toLowerCase().includes(finalWord.toLowerCase())
const Product = ({ finalWord,
   filterAnimal,
   filterMaxPrice,
   filterLoverPrice,
   isNewFilter,
   id,
   name,
   animal,
   isNew,
   price,
   number,
   curNumber,
   desc,
   img, }) => {
   useEffect(() => { }, [filterMaxPrice, filterLoverPrice, finalWord])
   const [prod, setProd] = useState({ id, name, animal, isNew, number, curNumber, price, desc, img, })
   const [isClicked, setIsClicked] = useState(true)
   const cart = useSelector((state) => state.cart)
   const dispatch = useDispatch()
   const addToCart = () => {
      dispatch(addProduct(prod))
      setIsClicked(false)
   }
   const content = () => {
      return (
         <div className="product">
            <div className="product__wrapper">
               <div className="product__img">
                  <img src={img} />
               </div>
               <div className="product__content">
                  <div className="product__col">
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
   if (finalWord !== "") {
      if (name.toLowerCase().includes(finalWord.toLowerCase())) {
         return content()
      }
   } else if (isNewFilter) {
      if (isNew) {
         return content()
      }
   } else if (filterAnimal !== "") {
      if (animal === filterAnimal) {
         if (filterMaxPrice !== 0 || filterLoverPrice !== 0) {
            if (filterLoverPrice !== 0 && price >= filterLoverPrice) {
               if (filterMaxPrice !== 0 && price <= filterMaxPrice) {
                  return content()
               }
            } else if (filterLoverPrice !== 0 && price >= filterLoverPrice) {
               return content()
            } else if (filterMaxPrice !== 0 && price <= filterMaxPrice) {
               return content()
            }
         }
         return content()
      }
   } else if (filterMaxPrice !== 0 || filterLoverPrice !== 0) {
      if (filterMaxPrice !== 0 && filterLoverPrice !== 0) {
         if(price >= filterLoverPrice && price <= filterMaxPrice){
            return content()
         }
      } else if ( filterLoverPrice !== 0 && price >= filterLoverPrice) {
         return content()
      } else if (price <= filterMaxPrice) {
         return content()
      }
   } else {
      return content()
   }

}
export default Product
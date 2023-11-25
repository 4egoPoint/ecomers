
import { TbTruckDelivery } from "react-icons/tb";
import { IoAdd } from "react-icons/io5";
import "./product.scss"

const Product = ({ id, name, animal, isNew, price, age, desc, img, }) => {
   return (
      <div className="product">
         <div className="product__wrapper">
            <div className="product__img">
               <img src={img} />
            </div>
            <div className="product__content">
               <div class="product__col">
                  <h2 className="product__name">{name}</h2>
                  <div className="product__age">Age {age}</div>
                  <div className="product__text">{desc}</div>
               </div>
               {isNew ? <div className="product__new">NEW</div> : <></>}
            </div>
            <div className="product__actions">
               <div className="product__price"><TbTruckDelivery /><span>{price}$</span></div>
               <button className="product__add">Add<IoAdd /></button>
            </div>
         </div>
      </div>
   )
}

export default Product

import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import Product from "../product/Product"
import "./home.scss"

const Home = () => {
   const products = useSelector((state) => state.products)
   console.log(products)
   return (
      <div className='home'>
         <div className="home__bg"></div>
         <div className="home__wrapper">
            <h2 className="home__hello">Welcome</h2>
            <div className="home__content content">
               <div className="content__search">
                  <form>
                     <input type="text" placeholder="Find your pet!" />
                     <button >Search <FaSearch /></button>
                  </form>
               </div>
               <div className="content__filters">
                  <h3>Filters</h3>
                  <div className="content__filters-row">
                     <div className="content__filters-item">
                        <div className="content__filters-drop">
                           <h4 className="dropbtn">Animal <MdKeyboardArrowDown className="dropbtn__ic" /></h4>
                           <div className="dropdown-content">
                              <button >Cat</button>
                              <button >Dog</button>
                              <button >Else</button>
                           </div>
                        </div>
                     </div>
                     <div className="content__filters-item">
                        <div className="content__filters-drop">
                           <h4 className="dropbtn">Age <MdKeyboardArrowDown className="dropbtn__ic" /></h4>
                           <div className="dropdown-content">
                              <button >0-1 year</button>
                              <button >1-3 years</button>
                              <button >3+ years</button>
                           </div>
                        </div>
                     </div>
                     <div className="content__filters-price">
                        <input type="text" placeholder="Price from" />
                     </div>
                     <div className="content__filters-price">
                        <input type="text" placeholder="Price to" />
                     </div>
                  </div>
               </div>
               <div className="content__categories categories">
                  <div className="categories__items">
                     <div className="categories__item categories__item--active">All</div>
                     <div class="categories__item">New</div>
                     <div className="categories__item">Pupular</div>
                  </div>
                  <div className="categories__item-last">Clean Filters</div>
               </div>
               <div className="content__list">
                  {
                     products.map((product) => <Product
                        id={product.id}
                        name={product.name}
                        animal={product.animal}
                        isNew={product.isNew}
                        price={product.price}
                        age={product.age}
                        desc={product.desc}
                        img={product.img}
                     />)
                  }
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home
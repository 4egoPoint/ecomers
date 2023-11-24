
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./home.scss"

const Home = () => {
   return (
      <div className='home'>
         <div class="home__bg"></div>
         <div class="home__wrapper">
            <h2 class="home__hello">Welcome</h2>
            <div class="home__content content">
               <div class="content__search">
                  <form>
                     <input type="text" placeholder="Find your pet!" />
                     <div>Search <FaSearch /></div>
                  </form>
               </div>
               <div class="content__filters">
                  <h3>Filters</h3>
                  <div class="content__filters-row">
                     <div class="content__filters-item">
                        <div class="content__filters-drop">
                           <h4 class="dropbtn">Animal <MdKeyboardArrowDown className="dropbtn__ic" /></h4>
                           <div class="dropdown-content">
                              <button >Cat</button>
                              <button >Dog</button>
                              <button >Else</button>
                           </div>
                        </div>
                     </div>
                     <div class="content__filters-item">
                        <div class="content__filters-drop">
                           <h4 class="dropbtn">Age <MdKeyboardArrowDown className="dropbtn__ic" /></h4>
                           <div class="dropdown-content">
                              <button >0-1 year</button>
                              <button >1-3 years</button>
                              <button >3+ years</button>
                           </div>
                        </div>
                     </div>
                     <div class="content__filters-price">
                        <input type="text" placeholder="Price from" />
                     </div>
                     <div class="content__filters-price">
                        <input type="text" placeholder="Price to" />
                     </div>
                  </div>
               </div>
               <div class="content__categories categories">
                  <div class="categories__items">
                     <div class="categories__item categories__item--active">All</div>
                     <div class="categories__item">New</div>
                     <div class="categories__item">Pupular</div>
                  </div>
                  <div class="categories__item-last">Clean Filters</div>
               </div>
               <div class="content__list"></div>
            </div>
         </div>
      </div>
   )
}

export default Home
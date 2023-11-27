
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import Product from "../product/Product"
import "./home.scss"
import { useState } from "react";

const Home = () => {
   const products = useSelector((state) => state.products)
   const [searchArea, setSearchArea] = useState("")
   const [finalWord, setFinalWord] = useState("")
   const [filterAnimal, setFilterAnimal] = useState("")
   const [isNewFilter, setIsNewFilter] = useState(false)
   const [filterMaxPrice, setFilterMaxPrice] = useState(0)
   const [filterLoverPrice, setFilterLoverPrice] = useState(0)
   console.log(searchArea)
   const onTypeInput = (e) => {
      setSearchArea(e.target.value.toLowerCase())
   }
   const search = (e) => {
      e.preventDefault()
      setFinalWord(searchArea)
   }
   const setAll=()=>{
      const element = document.getElementById("one");
      element.classList.add("categories__item--active");
      const element2 = document.getElementById("two");
      element2.classList.remove("categories__item--active");
      setIsNewFilter(false)
   }
   const setNew=()=>{
      const element = document.getElementById("two");
      element.classList.add("categories__item--active");
      const element2 = document.getElementById("one");
      element2.classList.remove("categories__item--active");
      setIsNewFilter(true)
   }
   const cleanAll = () => {
      setSearchArea("")
      setFinalWord("")
      setFilterAnimal("")
      setIsNewFilter(false)
      setFilterMaxPrice(0)
      setFilterLoverPrice(0)
   }

   return (
      <div className='home'>
         <div className="home__bg"></div>
         <div className="home__wrapper">
            <h2 className="home__hello">Welcome</h2>
            <div className="home__content content">
               <div className="content__search">
                  <form onSubmit={(e) => search(e)}>
                     <input onChange={(e) => onTypeInput(e)} type="text" placeholder="Find your pet!" />
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
                              <button onClick={()=>setFilterAnimal("cat")}>Cat</button>
                              <button onClick={()=>setFilterAnimal("dog")} >Dog</button>
                              <button onClick={()=>setFilterAnimal("")} >All</button>
                           </div>
                        </div>
                     </div>
                     <div className="content__filters-price">
                        <input onChange={(e)=> setFilterLoverPrice(e.target.value)} type="text" placeholder={filterLoverPrice===""?filterLoverPrice:"Price from"} />
                     </div>
                     <div className="content__filters-price">
                        <input onChange={(e)=> setFilterMaxPrice(e.target.value)} type="text" placeholder={filterMaxPrice===""?filterMaxPrice:"Price to"} />
                     </div>
                  </div>
               </div>
               <div className="content__categories categories">
                  <div className="categories__items">
                     <button onClick={()=>setAll()} id="one" className="categories__item categories__item--active">All</button>
                     <button onClick={()=>setNew()} id="two" className="categories__item">New</button>
                  </div>
                  <button onClick={()=>cleanAll()} className="categories__item-last">Clean Filters</button>
               </div>
               <div className="content__list">
                  {
                     products.map((product) => <Product
                        finalWord={finalWord}
                        filterAnimal={filterAnimal}
                        filterMaxPrice={filterMaxPrice}
                        filterLoverPrice={filterLoverPrice}
                        isNewFilter={isNewFilter}
                        id={product.id}
                        name={product.name}
                        animal={product.animal}
                        isNew={product.isNew}
                        price={product.price}
                        number={product.number}
                        curNumber={product.curNumber}
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
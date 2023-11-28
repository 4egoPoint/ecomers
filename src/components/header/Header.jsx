

import { BsCartCheck } from "react-icons/bs";
import "./header.scss"
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <div className='header'>
         <div className="header__wrapper">
            <Link to="/" className="header__logo">Pet</Link>
            <Link to="/cart" className="header__cart"><span>Shopping Cart</span> <BsCartCheck /></Link>
         </div>
      </div> 
   )
}

export default Header
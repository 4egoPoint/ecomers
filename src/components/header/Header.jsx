

import { BsCartCheck } from "react-icons/bs";
import "./header.scss"

const Header = () => {
   return (
      <div className='header'>
         <div className="header__wrapper">
            <h2 className="header__logo">Pet</h2>
            <div className="header__cart"><span>Shopping Cart</span> <BsCartCheck /></div>
         </div>
      </div>
   )
}

export default Header
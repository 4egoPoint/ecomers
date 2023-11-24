

import { BsCartCheck } from "react-icons/bs";
import "./header.scss"

const Header = () => {
   return (
      <div className='header'>
         <div class="header__wrapper">
            <h2 class="header__logo">Pet</h2>
            <div class="header__cart"><span>Shopping Cart</span> <BsCartCheck /></div>
         </div>
      </div>
   )
}

export default Header

import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import FavouritesIcon from './FavouriteIcon';
import AvatarIcon from './AvatarIcon';

const SmallIcons = () => {
  return (
    <div className="flex items-center justify-center space-x-1">
      <div className="w-8 h-8 flex items-center justify-center">
        <Link to="/favourites" ><FavouritesIcon /></Link>
      </div>
      <div className="w-8 h-8 flex items-center justify-center">
        <Link to="/cart" ><CartIcon cartTotalQuantity={0}/></Link>
      </div>
      {/**TODO: skuzit zas bez pt-1 nisu poravnati */}
      <div className="w-8 h-8 flex pt-1 justify-center">
        <button ><AvatarIcon/></button>
      </div>
    </div>
  );
}

export default SmallIcons;

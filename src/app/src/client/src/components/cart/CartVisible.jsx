import React, { useState } from 'react';
import Cart from './Cart';

function CartVisible() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleCartClick = () => {
    setIsCartVisible(true);
  };

  return (
    <div>
      <a
        href="/cart"
        className="fa fa-shopping-cart text-primary"
        onClick={handleCartClick}
      >
        {/* Компонент, представляющий иконку корзины */}
      </a>

      {isCartVisible && <Cart />}
    </div>
  );
}

export default CartVisible;

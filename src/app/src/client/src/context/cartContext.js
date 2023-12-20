import { createContext, useState } from 'react';

export const CartContext = createContext();

export const orderStatuses = {
  success: 'success',
  inProgress: 'in progress',
};

export const CartProvider = ({ children }) => {
  const [order, setOrder] = useState({
    drinks: [],
    totalCount: 0,
    status: orderStatuses.inProgress,
  });

  return (
    <CartContext.Provider value={[order, setOrder]}>
      {children}
    </CartContext.Provider>
  );
};

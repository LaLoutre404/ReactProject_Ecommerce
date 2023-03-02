import React, { useState } from "react";
import { Product } from "../components/GetProductList";

  
interface AppState {
  cartItemCount: number;
  cartItems: Product[];
}
interface AppContext extends AppState {
  addToCart: (product: Product) => void;
  removeItem: (product: Product) => void;
}

export const DataContext = React.createContext<AppContext>({} as AppContext);

function DataProvider({ children }: { children: JSX.Element }) {
  const [state, setState] = useState<AppState>({
    cartItemCount: 0,
    cartItems: [],
  });

  const { cartItemCount, cartItems } =
    state;

    const addToCart = (product: Product) => {
        setState({
            ...state,
            cartItemCount: state.cartItemCount + 1,
            cartItems: [...state.cartItems, product],
        });
    };
    
    const removeItem = (product: Product) => {
        const updatedCartItems = state.cartItems.filter((item) => item !== product);
        setState({
            ...state,
            cartItemCount: state.cartItemCount - 1,
            cartItems: updatedCartItems,
        });
    };

  return (
    <DataContext.Provider
      value={{
        cartItemCount,
        cartItems,
        addToCart,
        removeItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
import React, { createContext, useState, useReducer} from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (newItem) => {
        const existingItem = cartItems.find(item => item.id === newItem.id);
        if (existingItem) {
            
            const updatedItems = cartItems.map(item =>
                item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedItems);
        } else {
            
            setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
        }
}

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };
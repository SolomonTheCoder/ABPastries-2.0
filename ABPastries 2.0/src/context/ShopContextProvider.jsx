import { useState } from "react"
import { createContext } from "react"

export const ShopContext = createContext(null)

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        setCartItems((prev) => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId, removeAll = false) => {
        setCartItems((prev) => {
            if (removeAll) {
                return prev.filter(item => item.id !== productId); 
            } else {
                return prev
                    .map(item =>
                        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                    )
                    .filter(item => item.quantity > 0); 
            }
        });
    };

    return (
        <ShopContext.Provider value={{ addToCart, removeFromCart, cartItems }}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
import { createContext, useState, useEffect} from "react";

const CartContext = createContext();

function CartProvider({children}) {
    const [cartItems, setCartItems] = useState(()=> {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(()=> {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prev)=> {
            const existingId = prev.find((item)=> item.id === product.id);
            if(existingId) {
                return prev.map((item) => 
                item.id === product.id
                ? {...item, quantity: item.quantity + 1}
            : item );
            }

            return [...prev, {...product, quantity: 1}];
        })
    }

    const removeFromCart = (productId) => {
        setCartItems((prev)=> prev.filter((item) => item.id !== productId));
    }

    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider} ;
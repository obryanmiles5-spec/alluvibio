'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  productId?: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  strength?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: { id: string; name: string; price: number; image: string; strength?: string }) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  minOrderRequired: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const minOrderRequired = 120; // £120.00 minimum order

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('alluvi_cart');
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          setTimeout(() => {
            setCart(parsed);
            setIsLoaded(true);
          }, 0);
          return;
        }
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
    setTimeout(() => {
      setIsLoaded(true);
    }, 0);
  }, []);

  // Save cart to localStorage when changed
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('alluvi_cart', JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = (product: { id: string; name: string; price: number; image: string; strength?: string }) => {
    const cartItemId = product.strength ? `${product.id}-${product.strength}` : product.id;
    const cartItemName = product.strength ? `${product.name} (${product.strength})` : product.name;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === cartItemId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, {
        id: cartItemId,
        productId: product.id,
        name: cartItemName,
        price: product.price,
        image: product.image,
        strength: product.strength,
        quantity: 1
      }];
    });
    setIsCartOpen(true); // Open the cart side drawer automatically
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        isCartOpen,
        setIsCartOpen,
        minOrderRequired,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

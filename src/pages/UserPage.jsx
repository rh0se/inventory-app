import React, { useState } from 'react';
import Nav from "../components/Nav";
import Hero from '../components/Hero';
import Products from "../components/Products";
import Cart from '../components/Cart';

const UserPage = () => {
  // Declare cartItems state and setter function
  const [cartItems, setCartItems] = useState([]);

  // Function to add product to the cart
  const addToCart = (product, quantity) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  return (
    <>
      <Nav />
      <Hero />
      <div className="desktop:flex">
        {/* Pass addToCart function to Products and cartItems, setCartItems to Cart */}
        <Products addToCart={addToCart} />
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </div>
    </>
  );
};

export default UserPage;

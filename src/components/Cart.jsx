import React from "react";
import add from "../assets/images/add.png";
import minus from "../assets/images/minus.png";

const Cart = ({ cartItems, setCartItems, setSelectedProduct, setQuantity }) => {
  // Calculate total number of items and price
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const handleEditClick = (product) => {
    setSelectedProduct(product); // Set the selected product for editing
    setQuantity(product.quantity); // Set the quantity to match the cart
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleQuantityChange = (productId, adjustment) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + adjustment) }
            : item
        )
        .filter((item) => item.quantity > 0) // Automatically remove items with quantity 0
    );
  };

  return (
    <section className="md:pt-[150px] font-sans">
      <div className="font-sans w-[307px] p-6 rounded-[20px] m-auto shadow-md">
        <h1 className="text-[#2E3A6E] text-xl text-center font-semibold">Your Order</h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-navfont">Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col mb-4 pb-4">
                {/* Item Details */}
                <div className="flex justify-between gap-3 items-center">
                  <p>
                    <span className="text-navfont font-semibold flex gap-3">{item.quantity}x <span className="font-normal text-dialogbg">{item.title}</span></span>
                  </p>
                  <p className="font-normal text-dialogbg">${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex justify-between items-center mt-2">
                  <div className="flex w-[68px] bg-offwhite self-center rounded-3xl items-center justify-between m-5">
                    <button
                      className="px-2 py-1 rounded"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      < img src={minus} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 rounded"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      < img src={add} />
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4">
                    <button
                      className="text-navfont text-xs font-semibold"
                      onClick={() => handleEditClick(item)}
                    >
                      Edit
                    </button>
                   {/*  <button
                      className="text-red-500 underline"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button> */}
                  </div>
                </div>
              </div>
            ))}

            {/* Total Section */}
            <div className="mt-3 flex justify-center">
              <button
                className="bg-[#2E3A6E] text-white py-2 px-4 rounded-full w-[251px] m-auto"
              >
                Add {totalItems} Items for ${totalPrice.toFixed(2)}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;

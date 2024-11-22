import React, { useEffect, useState } from 'react';
import x from "../assets/images/x.png";
import add from "../assets/images/add.png";
import minus from "../assets/images/minus.png";

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch products
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.slice(0, 6)); // Limit to 6 products
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });

    // Fetch categories
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setQuantity(1); // Reset quantity when opening the dialog
  };

  const handleCloseDialog = () => {
    setSelectedProduct(null);
  };

  const handleQuantityChange = (adjustment) => {
    setQuantity((prev) => Math.max(1, prev + adjustment));
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct, quantity);
      handleCloseDialog(); // Close the dialog after adding to cart
    }
  };

  return (
    <div className="pt-[64px] font-sans text-navfont max-w-[834px] lg:ml-[120px]">
      <h1 className="font-semibold text-[28px] mb-4 md:text-left text-center">Order Again</h1>

      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : (
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-md">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-4 max-w-[409px] flex flex-col gap-[16px] cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 object-contain mb-4 rounded-lg"
                />
                <h3 className="text-sm font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-500">{`$${product.price}`}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dialog for Product Details */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-11 rounded-[20px] md:w-[704px] relative max-h-[98vh] flex flex-col overflow-auto">
            <button
              onClick={handleCloseDialog}
              className="absolute top-4 right-11 hover:text-black"
              aria-label="Close"
            >
              <img src={x} />
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="h-48 object-contain mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold mb-2 text-navfont">{selectedProduct.title}</h2>
            <p className="text-gray-500 text-lg mb-4 text-dialogbg">{`$${selectedProduct.price}`}</p>

            <div className="flex w-[108px] bg-offwhite self-center rounded-3xl items-center justify-between m-5">
              <button onClick={() => handleQuantityChange(-1)} className="px-4 py-2 rounded-lg">
                <img src={minus} />
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button onClick={() => handleQuantityChange(1)} className="px-4 py-2 rounded-lg">
                <img src={add} />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-[206px] m-auto bg-[#2E3A6E] text-white py-2 rounded-[32px]"
            >
              Add for ${(selectedProduct.price * quantity).toFixed(2)}
            </button>
          </div>
        </div>
      )}

      {/* Categories Section */}
      <div className="mt-8 w-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-[32px] font-semibold text-navfont">Categories</h1>
        <div className="flex flex-wrap gap-6 mt-6">
          {categories.map((category) => (
            <button
              key={category}
              className="bg-white border-[1px] border-[#E6E7E9] text-navfont py-2 px-4 rounded-[30px]  hover:bg-gray-100"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

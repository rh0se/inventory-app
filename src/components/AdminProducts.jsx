import React, { useState, useEffect } from 'react';
import arrowRight from "../assets/images/arrowRight.png";

const AdminProducts = () => {
  const [categories, setCategories] = useState([]); // To store fetched categories
  const [selectedCategory, setSelectedCategory] = useState(''); // Default empty category
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false); // Track visibility of categories list
  const [products, setProducts] = useState([]); // Store fetched products for the selected category
  const [loading, setLoading] = useState(false); // Track loading state
  const [showDialog, setShowDialog] = useState(false); // Controls if the dialog is shown
  const [currentProduct, setCurrentProduct] = useState(null); // The product currently being updated
  const [inventoryToAdd, setInventoryToAdd] = useState(1); // The quantity to add to the product

  // Fetch categories from the Fake Store API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
        if (data.length > 0) {
          setSelectedCategory(data[0]); // Set the first category as the default selected one
        }
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  // Fetch products based on selected category
  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then(response => response.json())
        .then(data => {
          // Initialize each product with a quantity of 1
          const updatedProducts = data.map(product => ({ ...product, quantity: 10 }));
          setProducts(updatedProducts);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
          setLoading(false);
        });
    }
  }, [selectedCategory]);

  // Toggle category list visibility
  const handleToggleCategories = () => {
    setIsCategoriesVisible(!isCategoriesVisible);
  };

  // Open the modal dialog and set the current product
  const handleAddInventory = (product) => {
    setCurrentProduct(product);
    setInventoryToAdd(1); // Default to 1 when opening the dialog
    setShowDialog(true); // Open the dialog
  };

  // Handle quantity change in the dialog
  const handleQuantityChange = (value) => {
    setInventoryToAdd(parseInt(value) || 1); // Ensure the value is a valid number
  };

  // Handle the "Add" action in the dialog
  const handleAddInventoryConfirm = () => {
    if (currentProduct && inventoryToAdd > 0) {
      setProducts(prevProducts =>
        prevProducts.map(product =>
          product.id === currentProduct.id
            ? { ...product, quantity: product.quantity + inventoryToAdd }
            : product
        )
      );
      setShowDialog(false); // Close the dialog after adding inventory
    }
  };

  // Close the dialog without updating
  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <>
      {/* Header Section */}
      <div className='text-navfont flex justify-between items-center font-sans mt-[90px] lg:ml-[120px] ml-9'>
        <div className='text-navfont flex font-sans'>
          <p
            className='font-bold cursor-pointer'
            onClick={handleToggleCategories}
          >
            More Categories
          </p>
          <div className='flex items-center'>
            <div className='flex items-center gap-[4px] lg:ml-[90px] ml-9'>
              <p className='text-sm'>Categories</p>
              <img src={arrowRight} className='-rotate-90 w-[14px] h-[14px]' alt="Arrow" />
            </div>
            <p className='text-sm'>{selectedCategory}</p> {/* Displays selected category */}
          </div>
        </div>
        <button className='md:text-white md:bg-navfont md:rounded-md mx-10 p-2 md:block hidden'>
          Add Product
        </button>
      </div>

      {/* Categories List and Header */}
      <div className='md:flex font-sans text-navfont'>
        <div className='lg:ml-[120px] text-navfont flex flex-col lg:w-[175px] mt-2 gap-[8px] ml-9'>
          {/* Conditionally render the category list based on visibility */}
          {isCategoriesVisible && categories.map((category, index) => (
            <button
              key={index}
              className={`text-left border-b border-[#DFE2E9] lg:h-[39px] ${selectedCategory === category ? 'font-bold' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div>
          {/* Display the currently selected category */}
          <h1 className='ml-[33px] mt-3 text-[28px] font-semibold'>{selectedCategory}</h1>

          {/* Display products if selected category is loaded */}
          <div>
            {loading ? (
              <p>Loading products...</p>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ml-[45px] mr-5 lg:w-[893px]">
                {products.length > 0 ? (
                  products.slice(0, 9).map(product => (
                    <div key={product.id} className="border p-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-contain mb-4 rounded-lg"
                      />
                      <h3 className="text-sm font-semibold">{product.title}</h3>
                      <p className="text-sm text-gray-500">{`$${product.price}`}</p>

                      {/* Quantity and Add Inventory in a flex row */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold">Qty: {product.quantity}</span>
                        </div>
                        <button
                          className="text-white bg-navfont rounded-md px-4 py-2"
                          onClick={() => handleAddInventory(product)}
                        >
                          Add Inventory
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No products found in this category.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Product Button for smaller screens */}
      <button className='text-white bg-navfont rounded-md mx-10 p-2 md:hidden mt-10'>
        Add Product
      </button>

      {/* Add Inventory Dialog (Modal) */}
      {showDialog && currentProduct && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl mb-4">Add Product to Inventory</h2>
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Product:</span>
              <span>{currentProduct.title}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Price:</span>
              <span>{`$${currentProduct.price}`}</span>
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="block text-sm font-semibold">Quantity</label>
              <input
                type="number"
                id="quantity"
                value={inventoryToAdd}
                onChange={(e) => handleQuantityChange(e.target.value)}
                className="border p-2 w-full mt-2"
                min="1"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleAddInventoryConfirm}
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                Add
              </button>
              <button
                onClick={handleCloseDialog}
                className="bg-gray-300 text-black py-2 px-4 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminProducts;

import './../../assets/styles/AddProdct.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Editor } from 'primereact/editor';


function AddProduct() {
  const [text, setText] = useState('');
  console.log(text)
  const [productData, setProductData] = useState({
    productName: '',
    productPrice: '',
    productDescription: "",
    MainProductImage: null,
    Image1: null,
    Image2: null,
    Image3: null,
    productCategory: '',
    productDiscount: '0.50',
    productQuantity: '5',
    quantity:'1',
    productAddDate: '2024-01-26',
  });
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
  
    if (type === 'file') {
      // Ensure there are files before attempting to access them
      if (files && files.length > 0) {
        setProductData({ ...productData, [name]: files[0] });
      }
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      for (const key in productData) {
        formData.append(key, productData[key]);
      }

      const response = await axios.post('http://localhost:3001/AddNewProduct', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 201) {
        console.log('Product added successfully');
        // Clear form fields after successful submission
        alert("Product added successfully")
        setProductData({
          productName: '',
          productPrice: '',
          productDescription: '',
          MainProductImage: null,
          Image1: null,
          Image2: null,
          Image3: null,
          
          productCategory: '',
          productDiscount: '',
          productQuantity: '',
          productAddDate: '',
        });
      } else {
        // Handle other status codes here if needed
        console.log('Server returned status code:', response.status);
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle Axios or network-related errors here
    }
  };

    // State to manage the selected value of the dropdown
  const handleDropdownChange = (event) => {
  const selectedCategory = event.target.value;
  setProductData({ ...productData, productCategory: selectedCategory });
};

console.log(productData.productCategory);

  
// State to manage the Discount selected value of the dropdown

const handleDropdownChangeForGender = (event) => {
  const selectedCategory = event.target.value;
  setProductData({ ...productData,  productFor: selectedCategory });

};


const handleDropdownChangeForDiscount = (event) => {
  const selectedCategory = event.target.value;
  setProductData({ ...productData, productDiscount: selectedCategory });

};






const handleChangeForEditor = (event) => {
  const e = event.target.value
 const set=e.htmlValue;
  setProductData({ ...productData, productDescription: e });
};

  return (
    
    <div className="add-product-container">
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="input-container">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={productData.productName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="productPrice">Product Price:</label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            value={productData.productPrice}
            onChange={handleChange}
            required
          />
        </div>


            <div className="input-container">
            <label htmlFor="productDescription">Product Description:</label>
           
            <div className="card">
            <Editor
  value={productData.productDescription}
  onTextChange={(e) => {
    setText(e.htmlValue);
    setProductData({ ...productData, productDescription: e.htmlValue });
  }}
  id="productDescription"
  name="productDescription"
  style={{ height: '300px' }}
/>
            </div>
          </div>



<div className='inlineC'>



  <div className="input-container">
    <label htmlFor="productCategory">Select Category:</label>
    <select
      id="productCategory"
      value={productData.productCategory}
      onChange={handleDropdownChange}
      name="productCategory"
    >
      <option value="">-- Select --</option>
      {/* <option value="Mens">Mens</option>
      <option value="Women">Women</option> */}
      <option value="sungalsses">Sun Glasses</option>
      <option value="reading">Reading</option>
      <option value="sports">Sports</option>
      <option value="transparent">Transparent</option>
    </select>

    {/* Display the selected value */}
    {productData.productCategory && (
      <p>You selected: {productData.productCategory}</p>
    )}
    {/* Additional form fields and submit button */}
    {/* ... */}
  </div>



    <div  className="input-container">
      <label htmlFor="productDiscount">Select Discount:</label>
      <select id="productDiscount" value={productData.productDiscount} onChange={ handleDropdownChangeForDiscount}>
        <option value="">-- Select --</option>
        <option value="0.90">10%</option>
        <option value="0.80">20%</option>
        <option value="0.70">30%</option>
        <option value="0.60">40%</option>
        <option value="0.50">50%</option>
        <option value="0.40">60%</option>
        <option value="0.30">70%</option>
        <option value="0.20">80%</option>
      </select>

     
    </div>

 </div>


        <div className="input-container">
          <label htmlFor="MainProductImage">Mian Image:</label>
          <input
            type="file"
            id="MainProductImage"
            name="MainProductImage"
            onChange={handleChange}
            accept=".jpg, .jpeg, .png"
        
          />
        </div>

 

        <div className="input-container">
          <label htmlFor="Image1">Image 1:</label>
          <input
            type="file"
            id="Image1"
            name="Image1"
            onChange={handleChange}
            accept=".jpg, .jpeg, .png"
        
          />
        </div>

        
        <div className="input-container">
          <label htmlFor="Image2">Image 2:</label>
          <input
            type="file"
            id="Image2"
            name="Image2"
            onChange={handleChange}
            accept=".jpg, .jpeg, .png"
        
          />
        </div>

        
        <div className="input-container">
          <label htmlFor="Image3">Image 3:</label>
          <input
            type="file"
            id="Image3"
            name="Image3"
            onChange={handleChange}
            accept=".jpg, .jpeg, .png"
        
          />
        </div>
 

        <div className="input-container">
          <label htmlFor="productQuantity">Product Quantity:</label>
          <input
            type="number"
            id="productQuantity"
            name="productQuantity"
            value={productData.productQuantity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="productAddDate">Product Add Date:</label>
          <input
            type="date"
            id="productAddDate"
            name="productAddDate"
            value={productData.productAddDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="button-container">
          <button type="submit" className='button-container ' >Add Product</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;

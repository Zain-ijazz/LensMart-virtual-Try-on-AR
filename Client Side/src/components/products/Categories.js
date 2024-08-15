// Create a Categories.css file for styling
import './../../assets/styles/Categories.css';
 //import DisplayProducts from '../components/products/DisplayProducts';
//import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function Categories() {
  //const navigate = useNavigate();
  const categoriesData = [
    
    {
      titleNo: "sunglasses",
      title: 'Sun Glasses',
      image: 'https://t3.ftcdn.net/jpg/06/63/94/06/360_F_663940650_tgwzXF1XTF6VWXrbNj8boIbzdEPE2WJJ.jpg',
    },
    
    {
      titleNo: "transparent",

      title: 'Transparent',
      image: 'https://static.zennioptical.com/marketing/landingpage/readers24/round2/Readers_lp_card_carousel_3-xs.png',
    },
    {
      titleNo: "sports",

      title: 'Sports Glasses',
      image: 'https://images.ctfassets.net/u4vv676b8z52/7BnwR6mkURTK1LRGxZruMe/808ed4277c62e5d52039baa0fea18bb5/Hero_Article_EnUK_Sports-Eye-Protection.jpg?fm=jpg&q=80',
    },
    {
      titleNo: "kids",

      title: 'Kids Glasses',
      image: 'https://s3.zeelool.com/admin/shop/nav/7c58b16471f909f295af07070bdb25fc.jpg',
    }

  ];
  return ( 
<>
    <div className="categories px-8 py-12 bg-[#fffffe]">
    <h2 className="categories-heading text-[#0f0e17] montserrat-headline">Featured Categories</h2> {/* Add the heading here */}
    <h3 className='text-[#2e2f3e] hind-madurai-regular'>Select your categories of your glasses.</h3>
    <div className="category-container">
      {categoriesData.map((category, index) => (
    <Link to={`/productList/${category.titleNo}`} className='category-item'   >
        <div className="category" key={index} >
          <img src={category.image} alt={category.title} className="category-image" />
        </div>
        <h3 className='hind-madurai-regular'>{category.title}</h3>
    </Link>
    

      ))}
    </div>

    
  </div>

  {/* <DisplayProducts cat={selectedCategory}/>  */}
  </>
  );
}

export  default Categories;

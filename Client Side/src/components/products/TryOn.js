import React, { useState } from 'react'
import './../../assets/styles/TryOn.css';
import link_img from "./../../assets/styles/img-link.avif";
import { Link } from 'react-router-dom';


export default function TryOn() {


  const [iframeVisible, setIframeVisible] = useState(false);

  const handleButtonClick = () => {
    setIframeVisible(true);
  };




  return (
    <section className="try-on bg-[#0f0e17]">
      <div className="left bg-[#0f0e17]">
        <h1 className='montserrat-headline text-[#fffffe]'>GLASSES TRY-ON</h1>
        <p className='text-[#a7a9be]'>Use our virtual try-on feature to see how the glasses look on your face.
</p>
       
       <div className='mt-10'>
        <Link to={'/product'} className='text-[#fffffe] bg-[#ff8906] px-8 py-[10px] rounded-full hover:bg-[#fffffe] hover:text-[#ff8906]  hind-madurai-regular'>Try On Now</Link>
       </div>
       
      </div>
      <div className="right">
        <a href="#">
          <img src={link_img} alt={"Link Image"} className="img-link" />
        </a>
      </div>

    </section>

  )
}

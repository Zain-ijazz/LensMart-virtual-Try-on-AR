import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../../features/cartSlice';
import { Link } from 'react-router-dom';
export default function Cart() {
  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  const handleCheckoutClick = () => {
    if (cart.length === 0 || totalQuantity === 0) {
      alert('Your cart is empty. Add items to proceed to checkout.');
    } }
  return (
    <>
     <section className="min-h-screen bg-[#fffffe]">
  <div className="container py-20 px-24">
    <h1 className='montserrat-headline text-[#0f0e17]'>Shoping Cart</h1>
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4 bg-[#0f0e17]">
          <div className="card-header py-3">
            <h5 className="mb-0 text-[#fffffe] hind-madurai-medium">Items({cart.length})</h5>
          </div>
          <div className="card-body">
           { cart.map((data)=>(

             <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0 pb-4">
               
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src=  {`http://localhost:3001/uploads/${data.MainProductImage}`}
                  
                    className="w-100" alt="item image" />
                  <a href="#!">
                    <div className="mask" style={{backgroundcolor: "rgba(251, 251, 251, 0.2)"}}></div>
                  </a>
                </div>
                
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0 text-[#fffffe] hind-madurai-medium">
                
                <p>{data.productName}</p>
              <br/>
              
                <button type="button" className="btn btn-primary btn-sm me-1 mb-2 bg-[#ff8906] hover:bg-red-600" data-mdb-toggle="tooltip"
                  title="Remove item"
                  onClick={() => dispatch(removeItem(data._id))}>
                     <i className="fas fa-trash"></i>
                </button>
                {/* <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                  title="Move to the wish list">
                  <i className="fas fa-heart"></i>
                </button> */}
               
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
             
                <div className="flex mb-4 justify-center items-center" style={{maxwidth: "300px"}}>
                  <button className="btn btn-primary px-3 me-2 bg-[#ff8906] hover:bg-orange-500 focus:bg-[#ff8906]"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                    onClick={() =>
                      dispatch(decreaseItemQuantity(data._id))
                    }>
                    <i className="fas fa-minus"></i>
                  </button>
                  <div className="form-outline">
                    <input id="form1" min="0" name="quantity" value={data.quantity} type="number" className="bg-[#fffffe] text-[#0f0e17] focus:text-[#0f0e17] focus:outline-none py-1 rounded-md px-1 w-100" placeholder='Quantity'/>
                  </div>
                  <button className="btn btn-primary px-3 ms-2 bg-[#ff8906] hover:bg-orange-500 focus:bg-[#ff8906]"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                    onClick={() =>
                      dispatch(increaseItemQuantity(data._id))
                    }>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <p className="text-start text-md-center text-[#fffffe] hind-madurai-medium">
                RS. {data.productPrice} 
                </p>
               
              </div>
            </div>

           ))
            
            }

            <hr className="my-4" />

       
           
          </div>
        </div>
        <div className="card mb-4">
          
        </div>
   
      </div>
      <div className="col-md-4">
        <div className="card mb-4 bg-[#0f0e17]">
          <div className="card-header py-3">
            <h5 className="mb-0 text-[#fffffe] hind-madurai-medium">Summary</h5>
          </div>
          <div className="card-body bg-[#0f0e17]">
            <ul className="text-[#fffffe]">
              <li className="list-group-item d-flex justify-content-between align-items-center px-0 hind-madurai-medium py-2">
               Total Quantity
                <span>{totalQuantity}</span>
              </li>
            <hr className='text-white'/>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3 hind-madurai-medium py-2">
                <div>
                Total amount
                
                    
             
                </div>
                <span>{totalPrice}</span>
              </li>
            </ul>

            {/* <Link to="/CheckOut"><button type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
             </Link> */}
 {/* Other cart content */}
 {cart.length > 0 && totalQuantity > 0 ? (
        <Link to="/CheckOut">
          <button type="button" className="btn btn-lg btn-block bg-[#e53170] hover:bg-pink-600 hind-madurai-regular text-[#fffffe] hover:text-[#fffffe]">
            Go to checkout
          </button>
        </Link>
      ) : (
        <button
          type="button"
          className="btn btn-lg btn-block bg-[#e53170] hover:bg-pink-600 hind-madurai-regular text-[#fffffe] hover:text-[#fffffe]"
          onClick={handleCheckoutClick}
        >
          Go to checkout
        </button>
      )}


          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

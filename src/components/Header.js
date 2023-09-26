import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <>
        <div className='UpperHeader'> 
          <img id="shipping" src="shipping.png" alt="shipping"></img>
          <p className='delivery'><Link to="/">Free Delivery</Link> | <Link to="/return">Return Policy</Link></p>
          <div className='leftheader'>
            <p className='login'><Link to="/login">Login</Link></p>
            <p className='followUS'> Follow US</p>
            <Link to="https://www.facebook.com/" className="fa fa-facebook"></Link>
            <Link to="https://twitter.com/i/flow/login" className="fa fa-twitter"></Link>
            <Link to="https://www.instagram.com/accounts/login/?hl=en" className="fa fa-instagram"></Link>
          </div>
        </div>
        <div className='secondhead'>
          <p className='name'>ShopKart</p>
          <p className='inner2head'> WISHLIST(0) &nbsp;&nbsp; BAG(0)</p>
          <hr></hr>
        </div>
    </>
  );
}

export default Header;

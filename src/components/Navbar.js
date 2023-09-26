import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/ourproducts" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                OUR PRODUCT
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/product1">PRODUCT1</Link>
                <Link className="dropdown-item" to="/product2">PRODUCT2</Link>
                <Link className="dropdown-item" to="/product3">PRODUCT3</Link>
                <Link className="dropdown-item" to="/product4">PRODUCT4</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


import React from 'react';

const ContentMain = () => {
  return (
    <>
      <div className='maincontainer'>
        <h2 className='products'>New Products</h2>
        <img className="plus"src="Star 2.png"></img><hr className='contenthr'></hr>
        <div className="aside">
            <p>Apparel</p>
            <h5>Accessories</h5>
            <p>Best Sellers</p>
            <p>50% Off</p>
        </div>
        <div className='section'>
            <div className="card"> 
            <img src="img1.png" alt="Avatar"/>
                <div className="container">
                <h4><b>FLORIDA JACKET</b></h4> 
                <p>I used javascript ,react, css to make this website your given a bit difficult to understand.<br></br><b>$100</b></p> 
                </div>
            </div>
            <div className="card">
            <img src="img2.png" alt="Avatar"/>
                <div className="container">
                <h4><b>FLORIDA JACKET</b></h4> 
                <p>I used javascript ,react, css to make this website your given a bit difficult to understand.<br></br><b>$100</b></p> 
                </div>
            </div>
            <div className="card">
            <img src="img3.png" alt="Avatar"/>
                <div className="container">
                <h4><b>FLORIDA JACKET</b></h4> 
                <p>I used javascript ,react, css to make this website your given a bit difficult to understand.<br></br><b>$100</b></p> 
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default ContentMain;

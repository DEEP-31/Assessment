import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <div className='banner'>
        <div className='nesteddiv'></div>
        <img className='star' src='star 3.png'></img>
        <img className="jessica" src='jessica.png'></img>
        <p className='jacket'>Oregon jacket<br></br>$120</p>
        <h2 id="fresh"> Fresh</h2>
        <h2 id="year"> 2022</h2>
        <h2 id="look"> Look</h2>
       <Link to='https://www.amazon.in/?&ext_vrnc=hi&tag=googinhydr1-21&ref=pd_sl_4b3e4wrxds_b&adgrpid=60639568242&hvpone=&hvptwo=&hvadid=617721280315&hvpos=&hvnetw=g&hvrand=17870415743605271052&hvqmt=b&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9303870&hvtargid=kwd-311187680635&hydadcr=5841_2362028'> 
       <p className='seemore'>see more &#8599;</p></Link>
    </div>
  );
}

export default Banner;

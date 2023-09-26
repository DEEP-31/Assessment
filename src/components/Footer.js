import React from 'react';
import { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({name:'', email:'',message:''});

  const handleInputChanges=(e)=>{
    const {name, value} = e.target;
    setFormData({...formData,[name]:value});
  }

  const saveFeedBack=(e)=>{
        e.preventDefault();
         sessionStorage.setItem('submittedData', JSON.stringify({...formData}));
        //  sessionStorage.setItem({...formData})
         alert("Feedback Submitted.")
         setFormData({name:'', email:'',message:''})   
  }  
   
  return (
    <>
      <div className='footer'>
           <h2 className='newsfooter1'>Newslleter</h2>
           <p className='newsfooter'>Get news about articles and updates in your inbox.</p>
           <div className='userinfo'>       
                <form >
                  <label className='label'>
                    Name &nbsp;
                    <input className='input' type="text" name="name" value={formData.name} onChange={handleInputChanges}/>
                  </label><br></br>
                  <hr className='hrinput'></hr>
                  <label className='label'>
                    Email &nbsp;
                    <input className='input' type="email" name="email" value={formData.email} onChange={handleInputChanges}/>
                  </label><br></br>
                  <hr className='hrinput'></hr>
                  <label className='label'>
                    Message &nbsp;
                    <input className='input' type="text" name="message"value={formData.message} onChange={handleInputChanges}/>
                  </label>
                  <hr className='hrinput'></hr>

                </form>
           </div>
            <button className='btnUser' type ="submit"onClick={saveFeedBack}>Send</button>

           <h1 className='foocon1'>GET</h1><br></br>
           <h1 className='foocon'>IN TOUCH</h1>
           <div className='lastFooter'>
               <p className='footertext'>Copyright 2022 All Rights are reserved by SG</p>
           </div>
      </div>
    </>
  );
}

export default Footer;

// Login.js
import React, { useState } from 'react';

const Login = () => {
  console.log('cockroach');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  debugger
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const savelogininfo=(e)=>{
    e.preventDefault();
     sessionStorage.setItem('submittedData', JSON.stringify({...username,...password}));
     alert("Feedback Submitted.")
     setUsername({username:' '});
     setPassword({password:' '});   
  }  

  return (
    <>
       <div className='myStyle'>
            <div>
            <form>
              <div style={{margin:"30px"}}>
                <label>Username:</label>
                <input type="text" value={username} onChange={handleUsernameChange} style={{margin:"20px"}}/>
              </div>
              <div style={{margin:"30px", marginLeft:"35px"}}>
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} style={{margin:"20px"}} />
              </div>
              <button type="submit" style={{margin:"30px", fontSize:"20px",marginLeft:"100px"}} onclick={savelogininfo}>Log In</button>
            </form>
            </div>
       </div>
    </>
  );
};

export default Login;

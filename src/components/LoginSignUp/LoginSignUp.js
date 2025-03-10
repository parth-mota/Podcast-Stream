import React, { useState } from 'react'
import './LoginSignUp.css'

import user_icon from '../Img/person.png';
import email_icon from '../Img/email.png';
import password_icon from '../Img/password.png';
const LoginSignUp= ()=> {
    const [action,setAction] = useState("Sign Up");
  return (
    <div className='container'> 
        <div className='header'>
            
            <div id='text'>{action}</div>
        </div>
        <div className='inputs'>
            {action==="Login" ? <div></div>:
            <div className='input'>
            <img src={user_icon} alt=''/>
            <input className='text' placeholder='Name' required/>
        </div>}
            <div className='input'>
                <img src={email_icon} alt=''/>
                <input className='email' placeholder='Email' required/>
            </div>
            <div className='input'>
                <img src={password_icon} alt=''/>
                <input className='password' placeholder='Password' required/>
            </div>
        </div>
        {action==="Sign Up" ? <div></div>:
        <div className='forgot-password'>
            Forgot Password? <span>Reset Here!</span>
        </div>}
        
        <div className='submit-container'>
            <button className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
            <button  className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</button>
        </div>
    </div>
  )
}
export default LoginSignUp;
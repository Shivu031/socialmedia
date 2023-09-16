import React, { useContext, useRef } from 'react'
import './login.css'
import { loginCalls } from '../../apiCalls';
import {AuthContext} from '../../context/AuthContext';

const Login = () => {

  const localUrl = "http://127.0.0.1:5000/images/"

  const email = useRef();
  const password = useRef();
  const {user,isFetching,error,dispatch} = useContext(AuthContext)

  const handleClick = (e)=>{
    e.preventDefault();
    loginCalls({email:email.current.value,password:password.current.value},dispatch)
  };

  console.log(user)

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Social Media</h3>
            <span className="loginDesc">
                Connect with friends and the world around you on Social Media.
            </span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
                <input placeholder="Email" type='email' required className="loginInput" ref={email} />
                <input placeholder="Password" type='password'required minLength="5" className="loginInput" ref={password} />
                <button className="loginButton" type='submit' disabled={isFetching}>{isFetching ? <i className="fa-solid fa-spinner"></i> : "Log In"}</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">{isFetching ? <i className="fa-solid fa-spinner"></i> : "Create a New Account"}</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login

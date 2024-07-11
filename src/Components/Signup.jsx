import { useEffect, useRef, useState } from 'react'
import '../Styles/Auth.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './utils/AuthContext'
function Signup() {
  const navigate = useNavigate();
  const registerForm = useRef(null);
  const {user,registerUser} = useAuth();

  useEffect(()=>{
    if(user){
      navigate('/room')
    }
  },[user])

  const handleSubmit = (e)=>{
    e.preventDefault();
    const name = registerForm.current.name.value
    const email = registerForm.current.email.value
    const password = registerForm.current.password.value
    const confirmPass = registerForm.current.confirmPass.value

    if(password!==confirmPass){
      alert("Passwords do not match")
      return
    }
    const userInfo = {name,email, password, confirmPass};
    registerUser(userInfo);
  }


  return (
    <div className='authentication-section'>
    <h2>Register Here</h2>
    <div className='auth-form'>
      <form ref={registerForm} onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='enter your name' />
        <input placeholder='email' type="email" name='email' />
        <input placeholder='password' type="password" name='password'/>
        <input type="password" name='confirmPass' placeholder='confirm password' />
        <button type='submit'>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Signup
import React from 'react'
import {auth , provider } from './firebaseConfig'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom' 

export default function Login({setIsAuth}) {
    let navigate = useNavigate();
    const signIn = ()=>{
       
signInWithPopup(auth, provider).then((result)=>{
    
    localStorage.setItem('isAuth', true);
setIsAuth(true);
navigate('/');

});
    };
  return (
    <div className='login'>
    <p>sign in with google</p>
    <button onClick={signIn} className='login-btn'>sign in</button>
    </div>
  )
}

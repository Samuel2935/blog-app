import React, { useState } from 'react';
import Home from './Home';
import {signOut} from 'firebase/auth'
import Login from './Login';
import Posts from './Posts';
import Hook from './Hooks'
// import Hook from './Components';
import './Home.css';
import './Posts.css'
import './Login.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,

} from 'react-router-dom';
import './App.css';
import { auth } from './firebaseConfig';




function App() {

  const signUserOut = ()=>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = '/Login'
    })

  }
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  return (
    
    <Router>
    
      <nav>
            

        <Link style={{ color: 'green' }} to="/">
          {' '}
          Home
        </Link>
       
        {!isAuth ? (
          <Link to="/Login">Login</Link>
        ) : (
          <>
           <Link to="/Posts">Posts</Link>
           <button onClick={signUserOut} style={{ backgroundColor: '#203040', color: ' #61dafb', fontSize: '25px'}}>
            log out
          </button>
          </>
         
        )}
      
      </nav>
    {/* <Hook/> */}
    <Hook/>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>} />
        <Route path="/Posts" element={<Posts isAuth={isAuth}/>} />
        <Route path="/Login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
    
  );
}

export default App;

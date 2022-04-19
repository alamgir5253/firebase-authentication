import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import './Header.css'
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  
  const handleSignOut = ()=>{
    signOut(auth)
  }
  return (
    <div className='header-container'>
      <nav>
        <Link className='link' to='/'> home</Link>
        <Link className='link' to='/blog'>blog</Link>
        {user ?<span onClick={handleSignOut} className='link'>logout</span> :<Link className='link' to='/login'>login</Link>}
        <Link className='link' to='/about'>about</Link>
        <Link className='link' to='/signup'>signup</Link>
      </nav>
    </div>
  );
};

export default Header;
import React from 'react';
import './NavigationBar.css';
import { Link, useLocation } from 'react-router-dom';

function NavigationBar() {
  const location = useLocation();

  return (
    <>
      <h1 className='centered-header'>"Unlock Blessings:</h1>
      <h1 className='centered-header1'>Book Pooja, Donate, and Connect!"</h1>
      <div className='right'>
        <Link className="link-box" to="/signup">Signup</Link>
        <Link className="link-box" to="/login">Login</Link>
      </div>

    </>
  );
}

export default NavigationBar;

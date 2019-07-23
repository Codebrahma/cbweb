import React from 'react';
import { Link } from 'gatsby';

const ThankYou = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <p style={{ fontSize: '30px' }} >Thank You!</p>
      <br />
      <p style={{ fontSize: '20px' }}>We will get back to you within 24 hours. Our typical response time is 5 minutes.</p>
      <br />
      <Link 
        to="/"
      >
        Back to Homepage
      </Link>
    </div>
  )
}

export default ThankYou;
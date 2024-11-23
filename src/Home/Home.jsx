import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='container'>
    <div className="home-container">
      <h1>TRiTool</h1>
      <div className="tools-container">
      <Link to='/calculator' className='link'>
        <div className="tool-box calculator">
          <h2>Calculator</h2>
          <p>Perform quick calculations</p>
        </div>
       </Link>
        <Link to='/stopwatch' className='link'>
        <div className="tool-box stopwatch">
          <h2>Stopwatch</h2>
          <p>Track your time effortlessly</p>
        </div>
        </Link>
        <Link to='/converter' className='link'>
        <div className="tool-box currency-converter">
          <h2>Currency Converter</h2>
          <p>Convert currencies instantly</p>
        
        </div>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Home;

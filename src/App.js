import React from 'react';
import Spline from '@splinetool/react-spline';

const App = () => {
  return (
    <div className='app-container'>
      <nav className='navbar'>
        <ul className='navbar-left'>
          <li><a href="/">Blob</a></li>
        </ul>
        <ul className='navbar-right'>
          <li><a href="https://github.com/Pav125/Blob/">Github</a></li>
        </ul>
      </nav>
      <div className='header-container'>
        <div className='header-blob'>
        <Spline scene="https://prod.spline.design/zX1W-7kc1a4rOcAS/scene.splinecode" />
        </div>
        <p className='blob-text'>3D blobs are cool</p>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery.react';

ReactDOM.render(
  <div className="container">
    <header>
      <img src="assets/images/header.jpg"/>
    </header>
    <Gallery/>
  </div>,
  document.getElementById('root')
);

import 'normalize.css';
import './main.scss';
import '../assets/css/animation.css';
import '../assets/css/fontello.css';
import 'baguettebox.js/dist/baguettebox.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import GalleryContainer from './components/GalleryContainer.react';

ReactDOM.render(
  <div className="container">
    <header>
      <img src="assets/image/header.jpg"/>
    </header>
    <GalleryContainer/>
  </div>,
  document.getElementById('root')
);

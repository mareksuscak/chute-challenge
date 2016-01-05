import 'normalize.css';
import '../assets/css/general.scss';
import '../assets/css/animation.scss';
import '../assets/css/fontello.scss';
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

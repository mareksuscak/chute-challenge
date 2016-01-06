import 'normalize.css';
import './main.scss';
import '../../vendor/fontello/css/animation.css';
import '../../vendor/fontello/css/fontello.css';
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

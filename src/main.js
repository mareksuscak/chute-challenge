import 'normalize.css';
import './styles/general.scss';
import 'baguettebox.js/dist/baguettebox.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import GalleryContainer from './components/GalleryContainer.react';

ReactDOM.render(
  <div className="container">
    <header>
      <img src="assets/images/header.jpg"/>
    </header>
    <GalleryContainer/>
  </div>,
  document.getElementById('root')
);

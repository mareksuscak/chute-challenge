import './Gallery.scss';
import React, { Component } from 'react';

class Gallery extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <section className="gallery">
        <i className="fa fa-twitter" style={{ fontSize: 20 }} />
        <span style={{ fontSize: 14 }}>This text should be Open Sans</span>
      </section>
    );
  }
}

export default Gallery;

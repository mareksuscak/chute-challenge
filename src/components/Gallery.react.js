import './Gallery.scss';
import React, { Component, PropTypes } from 'react';
import Image from './Image.react';
import map from 'lodash/collection/map';
import AssetSchema from '../schemas/asset';

class Gallery extends Component {
  constructor(props, context) {
    super(props, context);
  }

  renderAssetCollection() {
    return map(this.props.assets, (asset) =>
      <Image {...asset} key={asset.id}/>
    );
  }

  render() {
    return (
      <section className="gallery">
        {this.renderAssetCollection()}
      </section>
    );
  }
}

Gallery.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.shape(AssetSchema)),
};

export default Gallery;

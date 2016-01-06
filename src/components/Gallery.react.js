import './Gallery.scss';
import React, { Component, PropTypes } from 'react';
import Image from './Image.react';
import map from 'lodash/collection/map';
import AssetSchema from '../schemas/asset';
// import BaguetteBox from 'baguettebox.js';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  itemSelector: '.image',
  columnWidth: 315,
  gutter: 35,
};

class Gallery extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    /* BaguetteBox.run('.image header', {
      // Pick up all links from the header no matter what the href is holding.
      filter: /.+/i,
    });*/
  }

  componentWillUnmount() {
    // BaguetteBox.destroy();
  }

  renderAssetCollection() {
    return map(this.props.assets, (asset) =>
      <Image {...asset} key={asset.shortcut}/>
    );
  }

  render() {
    return (
      <Masonry
        className={'gallery'}
        elementType={'section'}
        options={masonryOptions}
        disableImagesLoaded={false}
      >
        {this.renderAssetCollection()}
      </Masonry>
    );
  }
}

Gallery.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.shape(AssetSchema)).isRequired,
};

export default Gallery;

import './AssetGallery.scss';
import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import AssetCard from './AssetCard.react';
import map from 'lodash/collection/map';
import AssetSchema from '../schemas/asset';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  itemSelector: '.asset-card',
  columnWidth: 315,
  gutter: 35,
  isFitWidth: true,
};

class AssetGallery extends Component {
  static propTypes = {
    assets: PropTypes.arrayOf(PropTypes.shape(AssetSchema)).isRequired,
  };

  renderAssetCollection() {
    return map(this.props.assets, (asset) =>
      <AssetCard {...asset} key={asset.shortcut}/>
    );
  }

  render() {
    return (
      <Masonry
        className={'asset-gallery'}
        elementType={'section'}
        options={masonryOptions}
        disableImagesLoaded={false}
      >
        {this.renderAssetCollection()}
      </Masonry>
    );
  }
}

export default AssetGallery;

import React from 'react';
import Component from 'react-pure-render/component';
import AssetGallery from './AssetGallery.react';
import InfiniteScroll from './InfiniteScroll.react';
import AlbumApi from '../api/albumApi';
import map from 'lodash/collection/map';

// Container component inspired by:
// https://medium.com/@learnreact/container-components-c0e67432e005#.rkxj8u626
class AssetGalleryContainer extends Component {
  state = {
    assets: [],
    loadedPageCount: 0,
    hasMorePages: false,
    isLoadingInitialBatch: true,
  };

  componentWillMount() {
    this.loadMore(); // Load the first batch
  }

  processApiResponse(response) {
    const newAssets = map(response.data, (asset) => {
      return {
        author: {
          username: asset.user.username,
          avatarUrl: asset.user.avatar,
        },
        service: asset.source.service,
        importUrl: asset.source.import_url,
        url: asset.url,
        caption: asset.caption,
        shortcut: asset.shortcut,
      };
    });

    const assets = this.state.assets
      .slice()
      .concat(newAssets);

    this.setState({ assets, isLoadingInitialBatch: false });

    return response;
  }

  updatePageCount(response) {
    const newState = {
      loadedPageCount: this.state.loadedPageCount + 1,
      hasMorePages: !!response.pagination.next_page,
    };
    this.setState(newState);
  }

  handleApiError(/* error */) {
    // TODO: Whooops, we would need to handle API errors here.
  }

  loadMore() {
    const opts = {
      page: this.state.loadedPageCount + 1,
    };
    AlbumApi.fetchAssets('aACiujyl', opts)
      .then((r) => this.processApiResponse(r))
      .then((r) => this.updatePageCount(r))
      .catch((r) => this.handleApiError(r));
  }

  render() {
    const { assets } = this.state;
    const element = this.state.isLoadingInitialBatch
      ? (<div className="loader"><i className="icon icon-spin2 animate-spin"/></div>)
      : <AssetGallery assets={assets}/>;

    return (
      <InfiniteScroll hasMore={this.state.hasMorePages} loadMore={() => this.loadMore()}>
        {element}
      </InfiniteScroll>
    );
  }
}

export default AssetGalleryContainer;

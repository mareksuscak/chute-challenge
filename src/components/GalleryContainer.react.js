import React, { Component } from 'react';
import Gallery from './Gallery.react';
import InfiniteScroll from './InfiniteScroll.react';
import AlbumApi from '../api/albumApi';
import map from 'lodash/collection/map';

// Container component inspired by:
// https://medium.com/@learnreact/container-components-c0e67432e005#.rkxj8u626
class GalleryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: [],
      loadedPageCount: 0,
      hasMorePages: false,
    };
  }

  componentWillMount() {
    this.loadMore(); // Load the first batch
  }

  processApiResponse(response) {
    // TODO
  }

  updatePageCount(response) {
    const newState = {
      loadedPageCount: this.state.loadedPageCount + 1,
      hasMorePages: !!response.pagination.next_page,
    };
    this.setState(newState);
  }

  handleApiError(error) {
    // TODO
  }

  loadMore() {
    AlbumApi.fetchAssets('aACiujyl', { page: this.state.loadedPageCount + 1 })
      .then(this.processApiResponse)
      .then(this.updatePageCount)
      .catch(this.handleApiError);
  }

  render() {
    const { assets } = this.state;
    return (
      <InfiniteScroll hasMore={this.state.hasMorePages} loadMore={this.loadMore}>
        <Gallery assets={assets}/>
      </InfiniteScroll>
    );
  }
}

export default GalleryContainer;

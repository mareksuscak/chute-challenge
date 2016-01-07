import React, { Component, PropTypes } from 'react';

class InfiniteScroll extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    hasMore: PropTypes.bool.isRequired,
    loadMore: PropTypes.func.isRequired,
  };

  render() {
    return React.cloneElement(this.props.children);
  }
}

export default InfiniteScroll;

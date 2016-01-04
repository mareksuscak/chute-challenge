import React, { Component, PropTypes } from 'react';

class InfiniteScroll extends Component {
  render() {
    return React.cloneElement(this.props.children);
  }
}

InfiniteScroll.propTypes = {
  children: PropTypes.element.isRequired,
  hasMore: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default InfiniteScroll;

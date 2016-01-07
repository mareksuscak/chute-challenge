import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';

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

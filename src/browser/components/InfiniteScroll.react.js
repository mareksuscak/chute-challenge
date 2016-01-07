import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import throttle from 'lodash/function/throttle';

class InfiniteScroll extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    hasMore: PropTypes.bool.isRequired,
    loadMore: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.throttledHandleScroll = throttle(() => this.handleScroll(), 500);
    window.addEventListener('mousewheel', this.throttledHandleScroll, false);
    window.addEventListener('wheel', this.throttledHandleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('mousewheel', this.throttledHandleScroll, false);
    window.removeEventListener('wheel', this.throttledHandleScroll, false);
  }

  handleScroll() {
    if (!this.props.hasMore) {
      return;
    }

    this.props.loadMore();
  }

  isInsideViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight);
  }

  render() {
    return React.cloneElement(this.props.children);
  }
}

export default InfiniteScroll;

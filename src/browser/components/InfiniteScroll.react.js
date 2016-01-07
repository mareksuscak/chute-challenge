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

    if (this.isNearBottom()) {
      this.props.loadMore();
    }
  }

  isNearBottom() {
    const rect = document.body.getBoundingClientRect();
    return (rect.bottom - document.documentElement.clientHeight) <= (rect.height / 2);
  }

  render() {
    return React.cloneElement(this.props.children);
  }
}

export default InfiniteScroll;

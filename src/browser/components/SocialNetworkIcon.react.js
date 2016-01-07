import './SocialNetworkIcon.scss';
import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import classNames from 'classnames';
import includes from 'lodash/collection/includes';

export const supportedServices = ['instagram', 'twitter'];

class SocialNetworkIcon extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    href: PropTypes.string,
  };

  wrapLinkAround(icon) {
    const { href } = this.props;
    return <a href={href} className="social-network-link" target="_blank">{icon}</a>;
  }

  render() {
    if (!includes(supportedServices, this.props.type)) {
      return null;
    }

    const elementType = this.props.href ? 'a' : 'span';
    const props = { className: 'social-network-icon' };

    const className = classNames('icon', `icon-${this.props.type}`);
    const icon = <i className={className}/>;

    if (this.props.href) {
      props.href = this.props.href;
      props.target = '_blank';
    }

    return React.createElement(elementType, props, icon);
  }
}

export default SocialNetworkIcon;

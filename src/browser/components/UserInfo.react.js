import './UserInfo.scss';
import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import toSocialProfileUri from '../lib/toSocialProfileUri';

class UserInfo extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
  };

  state = {
    avatarRemoved: false,
  };

  handleLoadError() {
    this.setState({ avatarRemoved: true });
  }

  render() {
    const socialProfileUri = toSocialProfileUri(this.props.username, this.props.service);
    const elementType = socialProfileUri ? 'a' : 'div';
    const props = { className: 'user-info' };
    const src = this.state.avatarRemoved ? 'assets/image/anonymous.jpg' : this.props.avatarUrl;
    const key = this.state.avatarRemoved ? 'avatar-static' : 'avatar';
    const children = [
      <img className="avatar" key={key} src={src} onError={(e) => this.handleLoadError(e)}/>,
      <span className="username" key="username">{this.props.username}</span>,
    ];

    if (socialProfileUri) {
      props.href = socialProfileUri;
      props.target = '_blank';
    }

    return React.createElement(elementType, props, children);
  }
}

export default UserInfo;

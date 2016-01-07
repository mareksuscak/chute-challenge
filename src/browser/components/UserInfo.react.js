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

  render() {
    const socialProfileUri = toSocialProfileUri(this.props.username, this.props.service);
    const elementType = socialProfileUri ? 'a' : 'div';
    const props = { className: 'user-info' };
    const children = [
      <img className="avatar" key="avatar" src={this.props.avatarUrl}/>,
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

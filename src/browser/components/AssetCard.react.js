import './AssetCard.scss';
import React, { Component } from 'react';
import AssetSchema from '../schemas/asset';
import SocialNetworkIcon from './SocialNetworkIcon.react';
import UserInfo from './UserInfo.react';

class AssetCard extends Component {
  static propTypes = AssetSchema;

  state = {
    hidden: false,
  };

  handleLoadError(/* error */) {
    // Hide the asset card once the image fails to load.
    this.setState({ hidden: true });
  }

  render() {
    return (
      <article className="asset-card" hidden={this.state.hidden}>
        <a className="thumbnail" href={this.props.url}>
          <img src={`${this.props.url}/311x313`} onError={(e) => this.handleLoadError(e)}/>
        </a>

        <section className="meta">
          <UserInfo {...this.props.author} service={this.props.service}/>
          <SocialNetworkIcon type={this.props.service} href={this.props.importUrl}/>
        </section>

        <p className="caption">{this.props.caption}</p>
      </article>
    );
  }
}

export default AssetCard;

import './AssetCard.scss';
import React from 'react';
import Component from 'react-pure-render/component';
import AssetSchema from '../schemas/asset';
import SocialNetworkIcon from './SocialNetworkIcon.react';
import UserInfo from './UserInfo.react';
import instagramText from '../lib/instagramText';
import twitterText from 'twitter-text';

const formatters = {
  instagram: (t) => instagramText.autoLink(t),
  twitter: (t) => twitterText.autoLink(twitterText.htmlEscape(t)),
  uploaded: (t) => t,
};

class AssetCard extends Component {
  static propTypes = AssetSchema;

  state = {
    hidden: false,
  };

  handleLoadError(/* error */) {
    // Hide the asset card once the image fails to load.
    this.setState({ hidden: true });
  }

  createCaptionMarkup() {
    const text = this.props.caption ? this.props.caption : '';
    const format = formatters[this.props.service];
    return { __html: format(text) };
  }

  render() {
    return (
      <article className="asset-card" hidden={this.state.hidden}>
        <a className="thumbnail" href={`#${this.props.shortcut}`}>
          <img src={`${this.props.url}/311x313`} onError={(e) => this.handleLoadError(e)}/>
        </a>

        <a href="#_" className="lightbox" id={this.props.shortcut}>
          <img src={this.props.url}/>
        </a>

        <section className="meta">
          <UserInfo {...this.props.author} service={this.props.service}/>
          <SocialNetworkIcon type={this.props.service} href={this.props.importUrl}/>
        </section>

        <p className="caption" dangerouslySetInnerHTML={this.createCaptionMarkup()}></p>
      </article>
    );
  }
}

export default AssetCard;

import './Image.scss';
import React, { Component } from 'react';
import AssetSchema from '../schemas/asset';
import classNames from 'classnames';

class Image extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      removed: false,
    };
  }

  handleImageRemoved() {
    this.setState({ removed: true });
  }

  wrapIcon(icon) {
    return (
      <a className="service-link" href={this.props.importUrl} target="_blank">
        {icon}
      </a>
    );
  }

  renderServiceIcon() {
    if (['instagram', 'twitter'].indexOf(this.props.service) >= 0) {
      const className = classNames('icon', `icon-${this.props.service}`);
      const icon = <i className={className}/>;
      return this.props.importUrl ? this.wrapIcon(icon) : icon;
    }
  }

  render() {
    const className = classNames('image', {
      '-removed': this.state.removed,
    });
    return (
      <article className={className}>
        <header>
          <a href={this.props.url}>
            <img src={`${this.props.url}/311x313`} onError={() => this.handleImageRemoved()}/>
          </a>
        </header>

        <section className="meta">
          <img className="avatar" src={this.props.author.avatarUrl}/>
          <span className="username">{this.props.author.username}</span>
          {this.renderServiceIcon()}
        </section>

        <footer>
          <p className="caption">{this.props.caption}</p>
        </footer>
      </article>
    );
  }
}

Image.propTypes = AssetSchema;

export default Image;

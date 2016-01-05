import './Image.scss';
import React, { Component } from 'react';
import AssetSchema from '../schemas/asset';
import classNames from 'classnames';

class Image extends Component {
  constructor(props, context) {
    super(props, context);
  }

  renderServiceIcon() {
    if (['instagram', 'twitter'].indexOf(this.props.service) >= 0) {
      const className = classNames('icon', `icon-${this.props.service}`);
      return <i className={className}/>;
    }
  }

  render() {
    return (
      <article className="image">
        <header>
          <a href={this.props.url}>
            <img src={`${this.props.url}/315x150`}/>
          </a>
        </header>

        <div>
          <img src={this.props.author.avatarUrl}/>
          <span>{this.props.author.username}</span>
          {this.renderServiceIcon()}
        </div>

        <footer>
          <p>{this.props.caption}</p>
        </footer>
      </article>
    );
  }
}

Image.propTypes = AssetSchema;

export default Image;

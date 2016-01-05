import './Image.scss';
import React, { Component } from 'react';
import AssetSchema from '../schemas/asset';

class Image extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <article className="image">
        <header>
          <a href="https://media.getchute.com/m/12I4gudgjf/c/2500342/315x150">
            <img src="https://media.getchute.com/m/12I4gudgjf/c/2500342/315x150"/>
          </a>
        </header>

        <section className="">
          <img src=""/>
          <span>{this.props.author.name}</span>
          <i className="icon icon-twitter"/>
        </section>

        <footer>
          <p>Description goes here.</p>
        </footer>
      </article>
    );
  }
}

Image.propTypes = AssetSchema;

export default Image;

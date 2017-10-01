import React from 'react';
import PropTypes from 'prop-types';
import Author from '../Author/Author';
import CaptionedImage from '../CaptionedImage/CaptionedImage';
import Title from '../Title/Title';
import './NextArticle.scss';

class Page extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="NextArticle">
        <Title title={this.props.data.Title} />
        <CaptionedImage
          imageUrl={this.props.data.MainImageUrl}
          caption={this.props.data.Excerpt}
          captionLink={this.props.data.Url}
        />
        <Author authorBio={this.props.data} />
        <a className="NextArticle__button" href={this.props.data.Url}>Read More</a>
      </div>
    );
  }
}

export default Page;

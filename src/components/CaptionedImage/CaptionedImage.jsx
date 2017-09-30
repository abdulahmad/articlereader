import React from 'react';
import PropTypes from 'prop-types';
import './CaptionedImage.scss';

const CaptionedImage = ({ imageUrl, caption, captionLink, alt }) => (
  <div className="CaptionedImage">
    <img className="CaptionedImage__img" src={imageUrl} alt={alt} />
    <span className="CaptionedImage__caption"><a href={captionLink}>{caption}</a></span>
  </div>
);

export default CaptionedImage;

CaptionedImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  caption: PropTypes.string,
  captionLink: PropTypes.string,
  alt: PropTypes.string
};

CaptionedImage.defaultProps = {
  caption: '',
  captionLink: '#',
  alt: ''
};

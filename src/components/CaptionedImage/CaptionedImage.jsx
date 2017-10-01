import React from 'react';
import PropTypes from 'prop-types';
import './CaptionedImage.scss';

const CaptionedImage = ({ title, imageUrl, caption, captionLink, alt }) => (
  <div className="CaptionedImage">
    <a href={captionLink} target="_blank">
      <h2 className="CaptionedImage__title">{title}</h2>
      <div className="CaptionedImage_imgWrap">
        <img className="CaptionedImage__img" src={`http:${imageUrl}`} alt={alt} />
      </div>
      <div className="CaptionedImage__caption">{caption}</div>
    </a>
  </div>
);

export default CaptionedImage;

CaptionedImage.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  caption: PropTypes.string,
  captionLink: PropTypes.string,
  alt: PropTypes.string
};

CaptionedImage.defaultProps = {
  title: '',
  caption: '',
  captionLink: '#',
  alt: ''
};

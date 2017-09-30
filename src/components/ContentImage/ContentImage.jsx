import React from 'react';
import PropTypes from 'prop-types';
import CaptionedImage from '../CaptionedImage/CaptionedImage';
import './ContentImage.scss';

const ContentImage = ({ content }) => (
  <CaptionedImage
    title={content.StrippedTitle}
    imageUrl={content.Url}
    alt=""
    caption={`Source: ${content.Attributions.SourceName}`}
    captionLink={content.Attributions.SourceUrl}
  />
);

export default ContentImage;

ContentImage.propTypes = {
  content: PropTypes.object.isRequired,
};

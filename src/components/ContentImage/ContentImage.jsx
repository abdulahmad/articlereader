import React from 'react';
import PropTypes from 'prop-types';
import CaptionedImage from '../CaptionedImage/CaptionedImage';
import './ContentImage.scss';

const ContentImage = ({ content }) => (
  <CaptionedImage
    title={content.StrippedTitle}
    imageUrl={content.Url}
    alt=""
    caption={`Source: ${content.Attributions[0].SourceName}`}
    captionLink={content.Attributions[0].SourceUrl}
  />
);

export default ContentImage;

ContentImage.propTypes = {
  content: PropTypes.object.isRequired,
};

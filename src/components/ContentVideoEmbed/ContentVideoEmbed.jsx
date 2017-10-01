import React from 'react';
import PropTypes from 'prop-types';

const ContentVideoEmbed = ({ content }) => (
  <div>
    {/* eslint-disable jsx-a11y/media-has-caption */}
    <video src={content.Properties.mp4_url} controls>
      <p>Your browser doesn&amp;t support HTML5 video. Here is a <a href={content.Properties.mp4_url}>link to the video</a> instead.</p>
    </video>
    {/* eslint-enable jsx-a11y/media-has-caption */}
  </div>
);

export default ContentVideoEmbed;

ContentVideoEmbed.propTypes = {
  content: PropTypes.object.isRequired,
};

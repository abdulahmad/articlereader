import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import './ContentVideoEmbed.scss';

const ContentVideoEmbed = ({ content }) => {
  const onChange = function (isVisible) {
    if (isVisible) {
      document.getElementById(`vid_${content.ComponentId}`).play();
    } else {
      document.getElementById(`vid_${content.ComponentId}`).pause();
    }
  };
  return (
    <div className="ContentVideoEmbed">
      <VisibilitySensor onChange={onChange}>
        {/* eslint-disable jsx-a11y/media-has-caption */}
        <video id={`vid_${content.ComponentId}`} src={`http:${content.Properties.mp4_url}`} controls>
          <p>Your browser doesn&amp;t support HTML5 video. Here is a <a href={content.Properties.mp4_url}>link to the video</a> instead.</p>
        </video>
        {/* eslint-enable jsx-a11y/media-has-caption */}
      </VisibilitySensor>
    </div>
  );
};

export default ContentVideoEmbed;

ContentVideoEmbed.propTypes = {
  content: PropTypes.object.isRequired,
};

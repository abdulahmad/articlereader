import React from 'react';
import PropTypes from 'prop-types';
import './ContentImage.scss';

const ContentImage = ({ name }) => (
  <div>{`Image ${name}`}</div>
);

export default ContentImage;

ContentImage.propTypes = {
  name: PropTypes.string.isRequired,
};

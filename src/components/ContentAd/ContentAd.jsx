import React from 'react';
import PropTypes from 'prop-types';
import './ContentAd.scss';

const ContentAd = ({ name }) => (
  <div>{`Ad ${name}`}</div>
);

export default ContentAd;

ContentAd.propTypes = {
  name: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import './Ad.scss';

const Ad = ({ name }) => (
  <div>{`Hi ${name}`}</div>
);

export default Ad;

Ad.propTypes = {
  name: PropTypes.string.isRequired,
};

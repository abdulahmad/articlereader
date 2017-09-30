import React from 'react';
import PropTypes from 'prop-types';
import './Image.scss';

const Image = ({ name }) => (
  <div>{`Hi ${name}`}</div>
);

export default Image;

Image.propTypes = {
  name: PropTypes.string.isRequired,
};

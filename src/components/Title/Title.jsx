import React from 'react';
import PropTypes from 'prop-types';
import './Title.scss';

const Title = ({ title }) => (
  <h1 className="Title">{title}</h1>
);

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

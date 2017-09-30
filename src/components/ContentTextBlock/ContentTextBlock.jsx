import React from 'react';
import PropTypes from 'prop-types';
import './ContentTextBlock.scss';

const ContentTextBlock = ({ name }) => (
  <div>{`TextBlock ${name}`}</div>
);

export default ContentTextBlock;

ContentTextBlock.propTypes = {
  name: PropTypes.string.isRequired,
};

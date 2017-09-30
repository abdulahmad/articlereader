import React from 'react';
import PropTypes from 'prop-types';
import './ContentTextBlock.scss';

const ContentTextBlock = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content.Content }} /> // eslint-disable-line react/no-danger
);

export default ContentTextBlock;

ContentTextBlock.propTypes = {
  content: PropTypes.object.isRequired,
};

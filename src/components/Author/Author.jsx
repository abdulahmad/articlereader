import React from 'react';
import PropTypes from 'prop-types';
import './Author.scss';

const Author = ({ authorBio }) => (
  <div className="Author">By {authorBio.Name ? authorBio.Name : authorBio.UserName}</div>
);

export default Author;

Author.propTypes = {
  authorBio: PropTypes.object.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

const HtmlHead = ({ title, metaDescription, metaImage, metaUrl }) => (
  <head>
    <title>{title}</title>

    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

    <meta name="description" content={metaDescription} />
    <meta name="twitter:card" value="summary" />
    <meta property="og:title" content={title} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={metaUrl} />
    <meta property="og:image" content={metaImage} />
    <meta property="og:description" content={metaDescription} />

  </head>
);

export default HtmlHead;

HtmlHead.propTypes = {
  title: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired,
  metaImage: PropTypes.string.isRequired,
  metaUrl: PropTypes.string.isRequired,
};

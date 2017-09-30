import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";

const HtmlHead = ({ title, metaDescription, metaImage, metaUrl }) => (
  <Helmet>
    <title>{title}</title>

    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

    <meta name="description" content={metaDescription} />
    <meta name="twitter:card" value="summary" />
    <meta property="og:title" content={title} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={metaUrl} />
    <meta property="og:image" content={metaImage} />
    <meta property="og:description" content={metaDescription} />

  </Helmet>
);

export default HtmlHead;

HtmlHead.propTypes = {
  title: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired,
  metaImage: PropTypes.string.isRequired,
  metaUrl: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import ContentTextBlock from '../ContentTextBlock/ContentTextBlock';
import ContentImage from '../ContentImage/ContentImage';
import ContentAd from '../ContentAd/ContentAd';

const Content = ({ pageContent }) => {
  const contentObj = [];

  pageContent.forEach((contentSlot) => {
    if (contentSlot.Type === 'TextBlock') {
      contentObj.push(<ContentTextBlock content={contentSlot} />);
    } else if (contentSlot.Type === 'Image') {
      contentObj.push(<ContentImage content={contentSlot} />);
    } else if (contentSlot.Type === 'Ad Placeholder') {
      contentObj.push(<ContentAd content={contentSlot} />);
    }
  });

  const listItems = contentObj.map(contentElement =>
    <div key={contentElement.props.content.ComponentId}>{contentElement}</div>
  );
  return listItems;
};

export default Content;

Content.propTypes = {
  pageContent: PropTypes.array.isRequired,
};

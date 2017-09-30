import React from 'react';
import PropTypes from 'prop-types';
// import ContentTextBlock from '../ContentTextBlock/ContentTextBlock';
// import ContentImage from '../ContentImage/ContentImage';
// import ContentAd from '../ContentAd/ContentAd';

const Content = ({ pageContent }) => {
  console.log(pageContent);
  const contentObj = [];
  // for (const contentSlot in pageContent) {
  //   if (contentSlot.Type === 'TextBlock') {
  //     contentObj.push(<ContentTextBlock content={contentSlot} />);
  //   } else if (contentSlot.Type === 'Image') {
  //     contentObj.push(<ContentImage content={contentSlot} />);
  //   } else if (contentSlot.Type === 'Ad Placeholder') {
  //     contentObj.push(<ContentAd content={contentSlot} />);
  //   }
  // }
  const contentList = contentObj.map(contentSlot =>
    <div>{contentSlot}</div>,
  );
  return ({ contentList });
};

export default Content;

Content.propTypes = {
  pageContent: PropTypes.object.isRequired,
};

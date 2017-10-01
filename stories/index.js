import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import Author from '../src/components/Author/Author';
import CaptionedImage from '../src/components/CaptionedImage/CaptionedImage';
import Content from '../src/components/Content/Content';
import ContentAd from '../src/components/ContentAd/ContentAd';
import ContentImage from '../src/components/ContentImage/ContentImage';
import ContentTextBlock from '../src/components/ContentTextBlock/ContentTextBlock';
import Page from '../src/components/Page/Page';
import Pagination from '../src/components/Pagination/Pagination';
import Title from '../src/components/Title/Title';

import data from '../src/data/fun-adam-sandler-facts.json';

import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
// .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
// .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


storiesOf('Article', module)
  .add('Author', () => <Author authorBio={data.OriginalAuthor} />)
  .add('CaptionedImage', () =>
    <CaptionedImage
      title={data.Title}
      imageUrl={data.MainImageUrl}
      caption={data.MainImageAttributions[0].SourceName}
      captionLink={data.MainImageAttributions[0].SourceUrl}
      alt="Here is some Alternate Text"
    />)
  .add('Content', () => <Content pageContent={data.Pages['1']} />)
  .add('ContentAd', () => <ContentAd />)
  .add('ContentImage', () => <ContentImage content={data.Pages['1'][1]} />)
  .add('ContentTextBlock', () => <ContentTextBlock content={data.Pages['1'][0]} />)
  .add('Page', () => <Page data={data} />)
  .add('Pagination', () =>
    <Pagination
      currentPage="2"
      previousPage={action('previousPage')}
      nextPage={action('nextPage')}
    />)
  .add('Title', () => <Title title={data.Title} />);

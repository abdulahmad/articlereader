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

// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
// .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
// .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Article', module)
  .add('Author', () => <Author />)
  .add('CaptionedImage', () => <CaptionedImage />)
  .add('Content', () => <Content />)
  .add('ContentAd', () => <ContentAd />)
  .add('ContentImage', () => <ContentImage />)
  .add('ContentTextBlock', () => <ContentTextBlock />)
  .add('Page', () => <Page />)
  .add('Pagination', () => <Pagination />)
  .add('Title', () => <Title />);

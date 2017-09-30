import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import data from './data/fun-adam-sandler-facts.json';
import App from './App';
import HtmlHead from './components/HtmlHead/HtmlHead';

ReactDOM.render(<HtmlHead
  title={data.Title}
  metaDescription={data.Excerpt}
  metaImage={data.MainImageUrl}
  metaUrl="" />, document.getElementById('root-head')); // eslint-disable-line no-undef
ReactDOM.render(<App data={data} />, document.getElementById('root')); // eslint-disable-line no-undef

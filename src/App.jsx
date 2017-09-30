import React, { Component } from 'react';
import './App.scss';
import HtmlHead from './components/HtmlHead/HtmlHead';
import Page from './components/Page/Page';
import data from './data/fun-adam-sandler-facts.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HtmlHead
          title={data.Title}
          metaDescription={data.Excerpt}
          metaImage={data.MainImageUrl}
          metaUrl=""
        />
        <Page data={data} />
      </div>
    );
  }
}

export default App;

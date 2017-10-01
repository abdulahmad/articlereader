import React from 'react';
import PropTypes from 'prop-types';
import scrollToComponent from 'react-scroll-to-component';
import Author from '../Author/Author';
import Content from '../Content/Content';
import CaptionedImage from '../CaptionedImage/CaptionedImage';
import Pagination from '../Pagination/Pagination';
import Title from '../Title/Title';
import NextArticle from '../NextArticle/NextArticle';

class Page extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  previousPage() {
    const newPage = this.state.currentPage - 1;
    this.changePage(newPage);
  }

  nextPage() {
    const newPage = this.state.currentPage + 1;
    this.changePage(newPage);
  }

  changePage(newPage) {
    if (newPage <= Object.keys(this.props.data.Pages).length && newPage > 0) { // ensure there is a valid next page
      this.setState({
        currentPage: newPage
      });
      scrollToComponent(this.anchor, {
        offset: 0,
        align: 'top',
        duration: 700
      });
      return newPage;
    }
    return this.state.currentPage; // don't change pages if there is no valid next page
  }

  render() {
    return (
      <div>
        <Title title={this.props.data.Title} />
        <CaptionedImage
          imageUrl={this.props.data.MainImageUrl}
          caption={`Source: ${this.props.data.MainImageAttributions[0].SourceName}`}
          captionLink={this.props.data.MainImageAttributions[0].SourceUrl}
        />
        <Author authorBio={this.props.data.OriginalAuthor} />
        <div ref={(c) => { this.anchor = c; }} />
        <Content pageContent={this.props.data.Pages[this.state.currentPage]} />
        <Pagination currentPage={this.state.currentPage} previousPage={this.previousPage} nextPage={this.nextPage} />
        <NextArticle data={this.props.data.NextArticle} />
      </div>
    );
  }
}

export default Page;

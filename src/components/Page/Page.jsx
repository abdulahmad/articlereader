import React from 'react';
import PropTypes from 'prop-types';
import scrollToComponent from 'react-scroll-to-component';
import Author from '../Author/Author';
import Content from '../Content/Content';
import CaptionedImage from '../CaptionedImage/CaptionedImage';
import Pagination from '../Pagination/Pagination';
import Title from '../Title/Title';

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
    if (newPage > 0) { // ensure there is a valid previous page
      this.setState({
        currentPage: newPage
      });
      scrollToComponent(this.anchor, {
        offset: 0,
        align: 'top',
        duration: 1500
      });
      return newPage;
    }
    return this.state.currentPage; // don't change pages if there is no valid previous page
  }

  nextPage() {
    const newPage = this.state.currentPage + 1;
    if (newPage <= Object.keys(this.props.data.Pages).length) { // ensure there is a valid next page
      this.setState({
        currentPage: newPage
      });
      scrollToComponent(this.anchor, {
        offset: 0,
        align: 'top',
        duration: 1500
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
        <Content pageContent={this.props.data.Pages[this.state.currentPage]} ref={(c) => { this.anchor = c; }} />
        <Pagination currentPage={this.state.currentPage} previousPage={this.previousPage} nextPage={this.nextPage} />
      </div>
    );
  }
}

export default Page;

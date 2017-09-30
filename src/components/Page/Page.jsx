import React from 'react';
import PropTypes from 'prop-types';
import Content from '../Content/Content';
import Pagination from '../Pagination/Pagination';

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
      return newPage;
    }
    return this.state.currentPage; // don't change pages if there is no valid previous page
  }

  nextPage() {
    const newPage = this.state.currentPage + 1;
    if (newPage <= Object.keys(this.props.data.Pages).length) { // ensure there is a valid next page
      return newPage;
    }
    return this.state.currentPage; // don't change pages if there is no valid next page
  }

  render() {
    return (
      <div>
        <Content pageContent={this.props.data.Pages[this.state.currentPage]} />
        <Pagination currentPage={this.state.currentPage} previousPage={this.previousPage} nextPage={this.nextPage} />
      </div>
    );
  }
}

export default Page;

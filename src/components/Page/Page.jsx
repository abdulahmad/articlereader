import React from 'react';
import Content from '../Content/Content';
import Pagination from '../Pagination/Pagination';
import PropTypes from 'prop-types';

class Page extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  previousPage() {
    let newPage = this.state.currentPage--;
    if(newPage > 0) { // ensure there is a valid previous page
      return newPage; 
    }
    return this.state.currentPage; // don't change pages if there is no valid previous page
  }

  nextPage() {
    let newPage = this.state.currentPage++;
    if(newPage <= Object.keys(this.props.data.Pages).length) { // ensure there is a valid next page
      return newPage;
    }
    return this.state.currentPage; // don't change pages if there is no valid next page
  }

  render() {
    return (
      <div>
        <Content pageContent={this.props.data.Pages[this.state.currentPage]} />
        <Pagination currentPage={this.state.currentPage} />
      </div>
    );
  }
}

export default Page;

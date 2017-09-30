import React from 'react';
import PropTypes from 'prop-types';

class Pagination extends React.Component {

  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    previousPage: PropTypes.func.isRequired,
    nextPage: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <div onClick={this.props.previousPage()}>&lt;</div>
        {this.props.currentPage}
        <div onClick={this.props.nextPage()}>&gt;</div>
      </div>
    );
  }
}

export default Pagination;

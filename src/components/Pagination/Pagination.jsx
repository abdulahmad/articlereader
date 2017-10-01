import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';

class Pagination extends React.Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    previousPage: PropTypes.func.isRequired,
    nextPage: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="Pagination">
        <button className="Pagination__button" onClick={this.props.previousPage}>&lt;</button>
        <span className="Pagination__page">{this.props.currentPage}</span>
        <button className="Pagination__button" onClick={this.props.nextPage}>&gt;</button>
      </div>
    );
  }
}

export default Pagination;

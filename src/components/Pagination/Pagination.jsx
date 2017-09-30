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
        <button onClick={this.props.previousPage}>&lt;</button>
        {this.props.currentPage}
        <button onClick={this.props.nextPage}>&gt;</button>
      </div>
    );
  }
}

export default Pagination;

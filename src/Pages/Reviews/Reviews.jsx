import React, { Component } from 'react';
import Truncate from 'react-truncate';
import PropTypes from 'prop-types';
import { getReviews } from '../../services/api';

class Reviews extends Component {
  state = {
    reviews: [],
    isTruncated: false,
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { id } = this.props;
    getReviews(id).then(({ results }) => this.setState({ reviews: results }));
  }

  toggleTruncate = truncated => {
    this.setState({ isTruncated: !truncated });
  };

  render() {
    const { reviews, isTruncated } = this.state;
    return (
      <>
        {reviews.length > 0 ? (
          <ul className="reviews">
            {reviews.map(({ author, content, id }) => (
              <li key={id}>
                <h3>{author}</h3>
                <Truncate
                  lines={isTruncated ? 10 : null}
                  ellipsis={<span>...</span>}
                  // onTruncate={this.toggleTruncate}
                >
                  {content}
                </Truncate>
                {/* <button type="button" onClick={this.toggleTruncate}>
                  Show {isTruncated ? ' more' : ' less'}
                </button> */}
              </li>
            ))}
          </ul>
        ) : (
          <p>There are no reviews yet</p>
        )}
      </>
    );
  }
}

export default Reviews;

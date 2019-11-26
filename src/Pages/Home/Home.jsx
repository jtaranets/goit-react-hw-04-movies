import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getPopularMovies } from '../../services/api';
import Gallery from '../../components/Gallery/Gallery';
import withHAndleClick from '../../components/WithHandleClick/WithHandleClick';

class Home extends Component {
  state = { movies: [] };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  componentDidMount() {
    getPopularMovies().then(({ results }) =>
      this.setState({ movies: results }),
    );
  }

  render() {
    const { movies } = this.state;
    const { onClick } = this.props;
    return (
      <>
        <Gallery movies={movies} onClick={onClick} />
      </>
    );
  }
}

export default withHAndleClick(Home);

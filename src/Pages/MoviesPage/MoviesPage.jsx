import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import SearchBar from '../../components/SearchBar/SearchBar';
import { searchMovies } from '../../services/api';
import Gallery from '../../components/Gallery/Gallery';
import withHAndleClick from '../../components/WithHandleClick/WithHandleClick';

const getQuery = query => queryString.parse(query.location.search).query;

class MoviesPage extends Component {
  state = { movies: [] };

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    onClick: () => null,
  };

  componentDidMount() {
    const query = getQuery(this.props);
    if (query) {
      searchMovies(query).then(({ results }) =>
        this.setState({ movies: results }),
      );
    }
  }

  componentDidUpdate(prevProps) {
    const prevMovies = getQuery(prevProps);
    const currentMovies = getQuery(this.props);
    if (prevMovies !== currentMovies) {
      searchMovies(currentMovies).then(({ results }) =>
        this.setState({ movies: results }),
      );
    }
  }

  handleSearch = value => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${value}`,
    });
  };

  render() {
    const { onClick } = this.props;
    const { movies } = this.state;
    return (
      <>
        <SearchBar onSearch={this.handleSearch} />
        {movies.length > 0 && <Gallery movies={movies} onClick={onClick} />}
      </>
    );
  }
}

export default withHAndleClick(MoviesPage);

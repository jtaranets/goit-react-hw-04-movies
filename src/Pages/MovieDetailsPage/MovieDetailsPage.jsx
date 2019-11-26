import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Loadable from 'react-loadable';
import PropTypes from 'prop-types';
import { getMovieDetails } from '../../services/api';
import styles from './MovieDetailsPage.module.css';

const Cast = Loadable({
  loader: () => import('../Cast/Cast' /* webpackChunkName: "cast-page" */),
  loading() {
    return <h2>Loading...</h2>;
  },
});

const Reviews = Loadable({
  loader: () =>
    import('../Reviews/Reviews' /* webpackChunkName: "reviews-page" */),
  loading() {
    return <h2>Loading...</h2>;
  },
});

class MovieDetailsPage extends Component {
  state = {
    currentMovie: {},
  };

  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.getMovie();
  }

  getMovie = () => {
    const id = this.props.match.params.movieId;
    getMovieDetails(id).then(
      ({ poster_path, overview, release_date, title, tagline, vote_average }) =>
        this.setState({
          currentMovie: {
            poster_path,
            overview,
            release_date,
            title,
            tagline,
            vote_average,
          },
        }),
    );
  };

  handleGoBackClick = () => {
    const { location, history } = this.props;

    location.state ? history.push(location.state.prevPage) : history.push('/');
  };

  render() {
    const { currentMovie } = this.state;
    const {
      poster_path,
      overview,
      release_date,
      title,
      tagline,
      vote_average,
    } = currentMovie;
    const { match } = this.props;
    const { url, path, params } = match;
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <img
          className={styles.image}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          height={700}
          alt="movie poster"
        />
        <p className={styles.date}>{release_date}</p>
        <p className={styles.tag}>{tagline}</p>
        <p className={styles.vote}>{vote_average}</p>
        <p className={styles.descr}>{overview}</p>
        <div className={styles.links}>
          <NavLink
            className={styles.link}
            activeClassName={styles.activeLink}
            to={`${url}/cast`}
          >
            Cast
          </NavLink>
          <NavLink
            className={styles.link}
            activeClassName={styles.activeLink}
            to={`${url}/reviews`}
          >
            Reviews
          </NavLink>
        </div>
        <Route
          path={`${path}/cast`}
          render={props => <Cast {...props} id={params.movieId} />}
        />
        <Route
          path={`${path}/reviews`}
          render={props => <Reviews {...props} id={params.movieId} />}
        />
        <button
          className={styles.btn}
          onClick={this.handleGoBackClick}
          type="button"
        >
          Back to all movies
        </button>
      </div>
    );
  }
}

export default MovieDetailsPage;

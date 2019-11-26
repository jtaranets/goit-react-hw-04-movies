import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './Gallery.module.css';

const Gallery = ({ movies = [], cast = [], onClick = () => null }) => (
  <ul className={styles.list}>
    {movies &&
      movies.map(({ title, backdrop_path, id }) => (
        <li className={styles.item} key={id} onClick={() => onClick(id)}>
          <Card name={title} imgPath={backdrop_path} />
        </li>
      ))}
    {cast &&
      cast.map(({ id, name, profile_path, character }) => (
        <li key={id}>
          <Card name={name} character={character} imgPath={profile_path} />
        </li>
      ))}
  </ul>
);

Gallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  cast: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};

Gallery.defaultProps = {
  movies: [],
  cast: [],
  onClick: () => null,
};

export default Gallery;

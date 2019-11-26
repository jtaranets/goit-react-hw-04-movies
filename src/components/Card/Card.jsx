import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ name, character, imgPath }) => (
  <>
    {name ? (
      <h3 className={styles.title}>{name}</h3>
    ) : (
      <h3 className={styles.title}>No name yet</h3>
    )}
    {character && <h3 className={styles.title}>as {character}</h3>}
    <img
      className={styles.image}
      src={`https://image.tmdb.org/t/p/w200${imgPath}`}
      alt="movie poster"
    />
  </>
);

Card.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imgPath: PropTypes.string,
};

Card.defaultProps = {
  name: '',
  character: '',
  imgPath: '',
};

export default Card;

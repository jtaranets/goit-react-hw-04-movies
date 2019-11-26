import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
  state = { value: '' };

  static propTypes = {
    onSearch: PropTypes.func,
  };

  static defaultProps = {
    onSearch: () => null,
  };

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  handleSubmit = ev => {
    const { value } = this.state;
    ev.preventDefault();
    this.props.onSearch(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          placeholder="Type search words and press Enter"
          value={value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchBar;

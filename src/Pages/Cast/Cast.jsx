import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from '../../components/Gallery/Gallery';
import { getMovieCast } from '../../services/api';

class Cast extends Component {
  state = {
    cast: [],
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { id } = this.props;
    getMovieCast(id).then(({ cast }) => this.setState({ cast }));
  }

  render() {
    const { cast } = this.state;

    return <Gallery cast={cast} />;
  }
}

export default Cast;

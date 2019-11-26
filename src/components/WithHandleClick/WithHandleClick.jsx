import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withHandleClick = WrappedComponent =>
  class WithHandleClick extends Component {
    state = {
      id: '',
    };

    static propTypes = {
      history: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
    };

    handleClick = id => {
      this.props.history.push({
        pathname: `/movies/${id}`,
        state: { prevPage: this.props.location },
      });
    };

    render() {
      return <WrappedComponent {...this.props} onClick={this.handleClick} />;
    }
  };

export default withHandleClick;

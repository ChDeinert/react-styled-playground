import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class WithStyledComponentsButton extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  render() {
    const { className, children } = this.props;
    return <button className={className} onClick={this.clickHandler}>{children}</button>;
  }

  clickHandler(event) {
    event.preventDefault();
    this.props.onClick();
  }
}

WithStyledComponentsButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

WithStyledComponentsButton.defaultProps = {
  children: '',
};

export default styled(WithStyledComponentsButton)`
  font-size: 1rem;
  color: #333;
  padding: 0.5em 1em;
  border: 2px solid #669;
  border-radius: 0.5em;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #669;
  }
`;

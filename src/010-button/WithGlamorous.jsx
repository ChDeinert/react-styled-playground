import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'glamorous';

class WithGlamorousButton extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  render() {
    const { children } = this.props;
    return (
      <Button
        color="#333"
        fontSize="1rem"
        border="2px solid #669"
        borderRadius=".5em"
        padding=".5em 1em"
        backgroundColor="#fff"
        cursor="pointer"
        css={{
          ':hover': {
            color: '#fff',
            backgroundColor: '#669',
          },
        }}
        onClick={this.clickHandler}
      >
        {children}
      </Button>
    );
  }

  clickHandler(event) {
    event.preventDefault();
    this.props.onClick();
  }
}

WithGlamorousButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

WithGlamorousButton.defaultProps = {
  children: '',
};

export default WithGlamorousButton;

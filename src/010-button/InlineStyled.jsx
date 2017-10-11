import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InlineStyledButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
  }

  render() {
    const { children } = this.props;
    const { mouseOver } = this.state;

    const style = {
      fontSize: '1rem',
      color: mouseOver ? '#fff' : '#333',
      padding: '.5em 1em',
      border: '2px solid #669',
      borderRadius: '.5em',
      backgroundColor: mouseOver ? '#669' : '#fff',
      cursor: 'pointer',
    };
    return (
      <button
        style={style}
        onClick={this.clickHandler}
        onMouseEnter={this.mouseEnterHandler}
        onMouseLeave={this.mouseLeaveHandler}
      >
        {children}
      </button>
    );
  }

  clickHandler(event) {
    event.preventDefault();
    this.props.onClick();
  }

  mouseEnterHandler() {
    this.setState({
      mouseOver: true,
    });
  }

  mouseLeaveHandler() {
    this.setState({
      mouseOver: false,
    });
  }
}

InlineStyledButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

InlineStyledButton.defaultProps = {
  children: '',
};

export default InlineStyledButton;

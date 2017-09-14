import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Link extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
    };
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
  }

  render() {
    const { href, children } = this.props;
    const { mouseOver } = this.state;

    const style = {
      color: mouseOver ? '#669' : '#333',
      textDecoration: 'none',
      fontSize: '18px',
      borderBottom: mouseOver ? '1px solid #669' : '1px dotted #333',
    };
    return (
      <a
        style={style}
        href={href}
        onMouseEnter={this.mouseEnterHandler}
        onMouseLeave={this.mouseLeaveHandler}
      >
        {children}
      </a>
    );
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

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Link.defaultProps = {
  children: '',
};

export default Link;

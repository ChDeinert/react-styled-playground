import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BreadcrumbItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
    };
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
  }

  render() {
    const { item: { label, href } } = this.props;
    const { mouseOver } = this.state;
    const itemStyle = {
      display: 'inline-block',
      margin: '0 0 0 0',
    };
    const itemLinkStyle = {
      textDecoration: 'none',
      color: mouseOver ? '#0D47A1' : '#2196F3',
    };
    const itemTextStyle = {
      color: '#616161',
    };

    if (!href) {
      return <span style={itemTextStyle}>{label}</span>;
    }

    return (
      <li style={itemStyle}>
        <a
          style={itemLinkStyle}
          href={href}
          onMouseEnter={this.mouseEnterHandler}
          onMouseLeave={this.mouseLeaveHandler}
        >
          {label}
        </a>
      </li>
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

BreadcrumbItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
  }).isRequired,
};

export default BreadcrumbItem;

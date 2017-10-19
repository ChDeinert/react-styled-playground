import React from 'react';
import PropTypes from 'prop-types';

import BreadcrumbItem from './elements/BreadcrumbItem';

const InlineStyledBreadcrumb = ({ items }) => {
  const listStyle = {
    fontFamily: '-apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", Arial, sans-serif',
    fontSize: '1rem',
    borderBottom: '1px solid #eee',
    padding: '.75em 1.5em',
    margin: '0 0 1em 0',
    listStyle: 'none',
  };
  const spacerStyle = {
    color: '#9E9E9E',
    margin: '0 .5em',
  };

  const breadcrumbItems = items.map((item, i) => (
    <span key={`breadcrumbItem-${item.label}`}>
      <BreadcrumbItem item={item} />
      {i < items.length - 1 ? <span style={spacerStyle}>&rsaquo;</span> : null }
    </span>
  ));

  return <ol style={listStyle}>{breadcrumbItems}</ol>;
};

InlineStyledBreadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    }),
  ).isRequired,
};

export default InlineStyledBreadcrumb;

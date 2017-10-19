import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WithStyledComponentsBreadcrumb = ({ className, items }) => (
  <ol className={className}>
    {items.map(item => (
      <li key={`breadcrumbItem-${item.label}`}>
        {item.href ? (
          <a href={item.href}>{item.label}</a>
        ) : (
          <span>{item.label}</span>
        )}
      </li>
    ))}
  </ol>
);

WithStyledComponentsBreadcrumb.propTypes = {
  className: PropTypes.string.isRequired,
  items: PropTypes.arrayOf({
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
  }).isRequired,
};

export default styled(WithStyledComponentsBreadcrumb)`
  font-size: 1rem;
  font-family: -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;
  border-bottom: 1px solid #eee;
  padding: .75em 1.5em;
  margin: 0 0 1em 0;
  list-style: none;
  > li {
    display: inline-block;
    margin: 0;
    &:before {
      content: "›";
      color: #9E9E9E;
      margin: 0 .5em;
    }
    &:first-child {
      &:before {
        content: " ";
        margin: 0;
      }
    }
    > a {
      color: #2196F3;
      text-decoration: none;
      &:hover, &:active, &:focus {
        color: #0D47A1;
      }
    }
    > span {
      color: #616161;
    }
  }
`;

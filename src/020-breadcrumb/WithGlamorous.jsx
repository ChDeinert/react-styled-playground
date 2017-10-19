import React from 'react';
import PropTypes from 'prop-types';
import { A, Li, Ol, Span } from 'glamorous';

const WithGlamorousBreadcrumb = ({ items }) => (
  <Ol
    fontSize="1rem"
    fontFamily={
      '-apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", Arial, sans-serif'
    }
    borderBottom="1px solid #eee"
    padding=".75em 1.5em"
    margin="0 0 1em 0"
    listStyle="none"
  >
    {items.map(item => (
      <Li
        display="inline-block"
        margin="0"
        css={{
          ':before': {
            content: '›',
            color: '#9E9E9E',
            margin: '0 .5em',
          },
          ':first-child': {
            ':before': {
              content: ' ',
              margin: '0',
            },
          },
        }}
        key={`breadcrumbItem-${item.label}`}
      >
        {item.href ? (
          <A
            color="#2196F3"
            textDecoration="none"
            css={{ ':hover,:active,:focus': { color: '#0D47A1' } }}
            href={item.href}
          >
            {item.label}
          </A>
        ) : (
          <Span color="#616161">{item.label}</Span>
        )}
      </Li>
    ))}
  </Ol>
);

WithGlamorousBreadcrumb.propTypes = {
  items: PropTypes.arrayOf({
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
  }).isRequired,
};

export default WithGlamorousBreadcrumb;

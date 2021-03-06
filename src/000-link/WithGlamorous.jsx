import React from 'react';
import PropTypes from 'prop-types';
import { A } from 'glamorous';

const WithGlamorousLink = (props) => {
  const { href, children } = props;
  return (
    <A
      color="#333"
      textDecoration="none"
      fontSize={18}
      borderBottom="1px dotted #333"
      css={{
        ':hover': {
          color: '#669',
          borderBottom: '1px solid #669',
        },
      }}
      href={href}
    >
      {children}
    </A>
  );
};

WithGlamorousLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};

WithGlamorousLink.defaultProps = {
  children: '',
};

export default WithGlamorousLink;

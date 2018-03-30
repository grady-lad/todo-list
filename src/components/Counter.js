import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ count, text }) => (<p><span>{count}</span>{text}</p>);
Counter.defaultProps = {
  count: 0,
  text: ' remaining'
};
Counter.propTypes = {
  count: PropTypes.number,
text: PropTypes.string,
};
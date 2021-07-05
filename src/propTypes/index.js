import PropTypes from 'prop-types';

export const propTypeTask = PropTypes.shape({
  title: PropTypes.string,
  completed: PropTypes.bool,
  color: PropTypes.string,
});
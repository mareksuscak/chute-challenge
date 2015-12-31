import { PropTypes } from 'react';

export default {
  author: PropTypes.string,
  source: PropTypes.oneOf(['instagram', 'twitter', 'uploaded']),
  href: PropTypes.string,
  description: PropTypes.string,
};

import { PropTypes } from 'react';

export default {
  shortcut: PropTypes.string.isRequired,
  author: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  }).isRequired,
  service: PropTypes.oneOf(['instagram', 'twitter', 'uploaded']).isRequired,
  importUrl: PropTypes.string,
  url: PropTypes.string.isRequired,
  caption: PropTypes.string,
};

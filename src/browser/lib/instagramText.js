// Taken from https://github.com/bmac/instagram-formatter and updated by mareksuscak
import reduce from 'lodash/collection/reduce';

function formatUrl(tweet) {
  // ref: http://stackoverflow.com/questions/19625183/js-find-urls-in-text-make-links
  return tweet.replace(
    /((http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?)/g,
    '<a href="$1">$1</a>'
  );
}

function formatUsername(tweet) {
  // ref: http://stackoverflow.com/questions/5973187/parsing-twitter-name-with-regex-and-javascript
  return tweet.replace(
    /\B@([\w-]+)/gm,
    '<a href="http://instagram.com/$1">@$1</a>'
  );
}

function formatHashtag(tweet) {
  return tweet.replace(
    /\B#([\w-]+)/gm,
    '<a href="https://www.instagram.com/explore/tags/$1/">#$1</a>'
  );
}

function autoLink(text) {
  const fns = [
    formatUrl,
    formatUsername,
    formatHashtag,
  ];

  return reduce(fns, (acc, fn) => fn(acc), text);
}

export default { autoLink };

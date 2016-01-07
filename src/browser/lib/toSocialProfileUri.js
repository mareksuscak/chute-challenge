import includes from 'lodash/collection/includes';
import keys from 'lodash/object/keys';

const transformers = {
  instagram: (username) => `https://instagram.com/${username}`,
  twitter: (username) => `https://twitter.com/${username}`,
};

export default function toSocialProfileUri(username, service) {
  if (!includes(keys(transformers), service)) return null;
  const transformer = transformers[service];
  return transformer(username);
}

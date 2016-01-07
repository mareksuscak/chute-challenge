import toSocialProfileUri from '../../src/browser/lib/toSocialProfileUri';
import { expect } from 'chai';

describe('toSocialProfileUri', () => {
  it('should return a link to twitter profile when service type is twitter', () => {
    const uri = toSocialProfileUri('mareksuscak', 'twitter');
    expect(uri).to.equal('https://twitter.com/mareksuscak');
  });

  it('should return a link to instagram profile when service type is instagram', () => {
    const uri = toSocialProfileUri('mareksuscak', 'instagram');
    expect(uri).to.equal('https://instagram.com/mareksuscak');
  });

  it('should return null when service type is unsupported', () => {
    const uri = toSocialProfileUri('mareksuscak', 'facebook');
    expect(uri).to.equal(null);
  });
});

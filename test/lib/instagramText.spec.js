import { expect } from 'chai';
import instagramText from '../../src/browser/lib/instagramText';

describe('instagramText', () => {
  describe('autoLink', () => {
    it('should properly autolink instagram post', () => {
      const html = instagramText.autoLink('#insta #tweet @username marek');
      expect(html).to.equal('<a href="https://www.instagram.com/explore/tags/insta/">#insta</a> <a href="https://www.instagram.com/explore/tags/tweet/">#tweet</a> <a href="http://instagram.com/username">@username</a> marek');
    });
  });
});

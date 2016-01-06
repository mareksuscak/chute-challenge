import Promise from 'bluebird';
import request from 'superagent';
import assign from 'lodash/object/assign';

const API_BASE = 'https://api.getchute.com/v2';

export default {
  fetchAssets: (albumId, opts = {}) => {
    return new Promise((resolve, reject) => {
      const defs = {
        'per_page': 20,
        'page': 1,
      };
      const query = assign({}, defs, opts);
      request
        .get(`${API_BASE}/albums/${albumId}/assets`)
        .query(query)
        .withCredentials()
        .accept('json')
        .end((err, res) => {
          if (err || !res.ok) {
            reject(err);
          } else {
            // Despite providing "Accept: application/json" header
            // Chute's API returns "Content-Type: text/html" therefore
            // superagent is unable to automatically parse res.text
            // into res.body.
            resolve(JSON.parse(res.text));
          }
        });
    });
  },
};

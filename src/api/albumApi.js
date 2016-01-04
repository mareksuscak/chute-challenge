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
          if (err || !res.ok) reject(err);
          else resolve(res.body);
        });
    });
  },
};

let request = require('supertest');

async function getRequest(baseUrl, uri, responseCode) {
  return request
    .agent(baseUrl)
    .get(uri)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.error(err.response);
      return Promise.reject(err);
    });
}

async function postRequest(baseUrl, uri, requestBody, token) {
  return request
    .agent(baseUrl)
    .post(uri)
    .send(requestBody)
    .set('Content-Type', 'application/json')
    .set('Authorization', token)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.error(err.response);
      return Promise.reject(err);
    });
}

module.exports = {
  getRequest,
  postRequest,
};

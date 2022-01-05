let request = require('supertest');

async function getRequest(...arg) {
  return request
    .agent(arg[0])
    .get(arg[1])
    .expect(arg[2])
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.error(err.response);
      return Promise.reject(err);
    });
}

async function postRequest(...arg) {
  return request
    .agent(arg[0])
    .post(arg[1])
    .send(arg[2])
    .set('Content-Type', 'application/json')
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

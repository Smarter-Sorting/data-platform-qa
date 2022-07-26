let config = require('./data-qa/support/setUp');
const poolClient = require('./poolClient');

const Pool = require('pg-pool');

const pool = new Pool({
  database: config.db,
  user: config.dbUser,
  password: config.dbPass,
  port: config.dbPort,
  host: config.dbHost,
  max: 10, // Pool max size
  idleTimeoutMillis: 1000, // Close idle clients after 1 second
});

module.exports.query = (text, values) => {
  return pool.query(text, values);
};

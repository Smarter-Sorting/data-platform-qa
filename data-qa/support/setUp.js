const interpretersBaseUrl = process.env.INTERPRTERS_BASE_URL;
const localhostBinning = process.env.LOCALHOST_BINNING;
const localhostFactory = process.env.LOCALHOST_FACTORY;
const mlBaseUrl = process.env.ML_BASE_URL;
const mlToken = process.env.ML_TOKEN;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const db = process.env.DB;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;




module.exports = {
  interpretersBaseUrl,
  localhostBinning,
  localhostFactory,
  mlBaseUrl,
  mlToken,
  dbUser,
  dbPass,
  db,
  dbHost,
  dbPort
};

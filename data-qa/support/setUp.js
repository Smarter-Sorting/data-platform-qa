const interpretersBaseUrl = process.env.INTERPRTERS_BASE_URL;
const localhostBinning = process.env.LOCALHOST_BINNING;
const localhostFactory = process.env.LOCALHOST_FACTORY;
const mlBaseUrl = process.env.ML_BASE_URL;
const mlToken = process.env.ML_TOKEN;

const testRailDomain = process.env.TESTRAIL_DOMAIN
const testRailUsername = process.env.TESTRAIL_USERNAME
const testRailPassword = process.env.TESTRAIL_PASSWORD
const testRailProjectId = process.env.TESTRAIL_PROJECTID
const testRailSuiteId = process.env.TESTRAIL_SUITEID
const testRailAssignedToId = process.env.TESTRAIL_ASSIGNEDTOID

module.exports = {
  interpretersBaseUrl,
  localhostBinning,
  localhostFactory,
  mlBaseUrl,
  mlToken,
  testRailDomain,
  testRailUsername,
  testRailPassword,
  testRailProjectId,
  testRailSuiteId,
  testRailAssignedToId
};

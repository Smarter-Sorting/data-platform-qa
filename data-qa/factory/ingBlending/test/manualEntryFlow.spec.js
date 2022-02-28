let testData = require('../testDataLoad');
let config = require('../../../support/setUp.js');
let commons = require('../../../support/helpers.js');

describe('Factory - Ingredients blending API', function () {
  context('Validate [Manual entry] flow - single ingredient list', () => {
    runtest(testData.manualFlowSingleIng);
  });
  context('Validate [Manual entry] flow - multi ingredient list', () => {
    runtest(testData.manualFlowMultiIng);
  });
});

function runtest(testData) {
  Object.entries(testData.variants).forEach(([variant, data]) => {
    it(`Verify response:  ${variant}`, async () => {
      const res = await commons.postRequestFactorySessionID(
        config.localhostFactory,
        testData.uri,
        data.request,
        data.response.session_id,
      );
      expect(res.statusCode).to.be.equal(data.responseCode);
      expect(res.body).to.be.deep.equal(data.response);
    });
  });
}

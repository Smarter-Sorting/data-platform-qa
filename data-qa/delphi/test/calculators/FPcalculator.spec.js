let testData = require('../../fixtures/calculators/FPcalculatorTestData.json');
let config = require('../../../support/setUp.js');
let commons = require('../../../support/helpers.js');

describe('FP calculator tests', () => {
  context(
    'Validate that sending request in correct format expected response will be received',
    () => {
      Object.entries(testData.variants).forEach(([variant, data]) => {
        it(`Should get a proper response with ${variant}`, async () => {
          const res = await commons.postRequest(
            config.mlBaseUrl,
            testData.uri,
            data.request,
            `Basic ${config.mlToken}`,
          );
          expect(res.statusCode).to.be.equal(data.responseCode);
          expect(res.body).to.be.deep.equal(data.response);
        });
      });
    },
  );
});

let testData = require('../testDataLoad');
let config = require('../../../support/setUp.js');
let commons = require('../../../support/helpers.js');

describe('Multi-component Binning - Albertsons', function () {
  context(
    'Validate that sending request in correct format expected response will be received',
    () => {
      runtest(testData.albUnreg);
      runtest(testData.albReg);
      runtest(testData.albMixUnreg);
      runtest(testData.albMixReg);
      runtest(testData.albMixTwoItems);
      runtest(testData.albMixThreeItems);
    },
  );
});

function runtest(testData) {
  Object.entries(testData.variants).forEach(([variant, data]) => {
    it(`Verify response in scenario:  ${variant}`, async () => {
      const res = await commons.postRequest(
        config.localhostBinning,
        testData.uri,
        data.request,
        ``,
      );
      expect(res.statusCode).to.be.equal(data.responseCode);
      expect(res.body).to.be.deep.equal(data.response);
    });
  });
}

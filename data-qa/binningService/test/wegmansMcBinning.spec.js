let testData = require('../testDataLoad');
let config = require('../../support/setUp.js');
let commons = require('../../support/helpers.js');

describe('Multi-component Binning', function () {
  context(
    'Validate that sending request in correct format expected response will be received',
    () => {
      runtest(testData.wegUnreg);
      runtest(testData.wegReg);
      runtest(testData.wegMixUnreg);
      runtest(testData.wegMixReg);
      runtest(testData.wegMixTwoItems);
      runtest(testData.wegMixThreeItems);
    },
  );
});

function runtest(testData) {
  Object.entries(testData.variants).forEach(([variant, data]) => {
    it(`Verify response in scenario:  ${variant}`, async () => {
      const res = await commons.postRequest(
        config.mcBinning,
        testData.uri,
        data.request,
        ``,
      );
      expect(res.statusCode).to.be.equal(data.responseCode);
      expect(res.body).to.be.deep.equal(data.response);
    });
  });
}

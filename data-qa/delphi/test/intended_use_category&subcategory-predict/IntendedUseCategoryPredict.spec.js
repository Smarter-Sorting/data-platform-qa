let testData = require('../../fixtures/intended_use_category&subcategory-predict/IntendedUseCategorySubcategoryPredictTestData.json');
let config = require('../../../support/setUp.js');
let commons = require('../../../support/helpers.js');

describe('Predict intended use category tests', function () {
  context(
    'Validate that sending request in correct format expected response will be received',
    function () {
      Object.entries(testData.variants).forEach(([variant, data]) => {
        it(`Should get a proper response with ${variant}`, async () => {
          const res = await commons.postRequest(
            config.mlBaseUrl,
            testData.uri_category,
            data.request,
            `Basic ${config.mlToken}`,
          );
          expect(res.statusCode).to.be.equal(data.responseCode);
          expect(res.body).to.deep.equalInAnyOrder(data.response_category);
        });
      });
    },
  );
});

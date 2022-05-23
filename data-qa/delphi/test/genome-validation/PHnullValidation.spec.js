let testData = require('../../fixtures/genome-validation/PHnullValidationTestData.json');
let config = require('../../../support/setUp.js');
let commons = require('../../../support/helpers.js');

describe('Validate genome - PH null validation tests', function () {
    context(
        'Validate that sending request in correct format expected response will be received',
        function () {
            Object.entries(testData.variants).forEach(([variant, data]) => {
                it(`Should get a proper response with ${variant}`, async () => {
                    const res = await commons.postRequest(
                        config.interpretersBaseUrl,
                        testData.uri,
                        data.request,
                        '',
                    );
                    expect(res.statusCode).to.be.equal(data.responseCode);
                    expect(res.body).to.be.deep.equal(data.response);
                });
            });
        },
    );
});

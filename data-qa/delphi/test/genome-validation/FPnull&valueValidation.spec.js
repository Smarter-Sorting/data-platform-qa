let fpNullValidationTestData = require('../../fixtures/genome-validation/FPnullValidationTestData.json');
let fpValueValidationTestData = require('../../fixtures/genome-validation/FPvalueValidationTestData.json');
let config = require('../../../support/setUp.js');
let commons = require('../../../support/helpers.js');

describe('Validate genome - FP validation tests', () => {
    context(
        'FP null validation: Validate that sending request in correct format expected response will be received',
        () => {
            fpValidation(fpNullValidationTestData);
        },
    );
    context(
        'FP value validation: Validate that sending request in correct format expected response will be received',
        () => {
            fpValidation(fpValueValidationTestData);
        },
    );
});

function fpValidation(testData) {
    Object.entries(testData.variants).forEach(([variant, data]) => {
        it(`Should get a proper response with ${variant}`, async () => {
            const res = await commons.postRequest(
                config.interpretersBaseUrl,
                testData.uri,
                data.request,
                '',
            );
            expect(res.statusCode).to.be.equal(data.responseCode);
            expect(res.body.observations[0].normalized_value.flashpoint).to.be.deep.equal(data.response_fp);
            expect(res.body.observations[0].normalized_value.flashpoint_details).to.be.deep.equal(data.response_fp_details);
        });
    });
}

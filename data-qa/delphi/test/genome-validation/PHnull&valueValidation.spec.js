let phNullValidationTestData = require('../../fixtures/genome-validation/PHnullValidationTestData.json');
let phValueValidationTestData = require('../../fixtures/genome-validation/PHvalueValidationTestData.json');
let config = require('../../../support/setUp.js');
let commons = require('../../../support/helpers.js');

describe('Validate genome - PH validation tests', () => {
    context(
        'PH null validation: Validate that sending request in correct format expected response will be received',
        () => {
            phValidation(phNullValidationTestData);
        },
    );
    context(
        'PH value validation: Validate that sending request in correct format expected response will be received',
        () => {
            phValidation(phValueValidationTestData);
        },
    );
});

function phValidation(testData) {
    Object.entries(testData.variants).forEach(([variant, data]) => {
        it(`Should get a proper response with ${variant}`, async () => {
            const res = await commons.postRequest(
                config.interpretersBaseUrl,
                testData.uri,
                data.request,
                '',
            );
            expect(res.statusCode).to.be.equal(data.responseCode);
            expect(res.body.observations[0].normalized_value.ph).to.be.deep.equal(data.response_ph);
            expect(res.body.observations[0].normalized_value.ph_details).to.be.deep.equal(data.response_ph_details);
        });
    });
}

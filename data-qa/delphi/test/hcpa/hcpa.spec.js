let testData = require('../../fixtures/hcpa/newRecords.json');
let config = require('../../../support/setUp.js');
let commons = require('../../../support/helpers.js');
const { expect } = require('chai');

describe('Ingredients blending tests', function () {
  context(
    'Validate that sending request in correct format expected response will be received',
    function () {
      for (const data of testData) {
        it(`Should get a proper response with ingredient name ${data.hcpa_name} receive expected CAS values ${data.cas_numbers}`, async () => {
          const res = await commons.postRequest(
            config.interpretersBaseUrl,
            '/one_pager/ingredient_input',
            `{"ingredient_text_input": "${data.hcpa_name}", "sds_ingredients": []}`,
            '',
          );
          // console.debug(res);
          expect(res.statusCode).to.be.equal(200);
          let actualCasValues = res.body[0].cas_numbers;
          let expectedCasValues = data.cas_numbers.split(',');

          if (expectedCasValues == '') {
            expect(actualCasValues.toString()).to.equal(data.cas_numbers);
          } else {
            expect(actualCasValues).to.have.deep.members(expectedCasValues);
          }
        });
      }
    },
  );
});

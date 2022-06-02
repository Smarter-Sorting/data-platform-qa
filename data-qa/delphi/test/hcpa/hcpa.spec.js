let testData = require('../../fixtures/hcpa/newRecords.json');
let config = require('../../../support/setUp.js');
let commons = require('../../../support/helpers.js');

describe('Ingredients blending tests', function () {
  context(
    'Validate that sending request in correct format expected response will be received',
    function () {
      //   for (const data of testData) {
      //     console.debug('data for current loop:' + data.hcpa_name);
      //     it(`Should get a proper response with ingredient name ${data.hcpa_name} receive expected CAS values ${data.cas_numbers}`, async () => {
      //       const res = await commons.postRequest(
      //         config.interpretersBaseUrl,
      //         '/one_pager/ingredient_input',
      //         `{"ingredient_text_input": ${data.hcpa_name}, "sds_ingredients": []}`,
      //         '',
      //       );
      //       expect(res.statusCode).to.be.equal(data.responseCode);
      //       //expect(res.body).to.be.deep.equal(data.response); //some responces have ingrdients listed in different order so deep.equal fails
      //       expect(res.body).to.deep.equalInAnyOrder(data.cas_numbers);
      //     });
      // }
      //Object.entries(testData).forEach((data) => {
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
          //expect(res.body).to.be.deep.equal(data.response); //some responces have ingrdients listed in different order so deep.equal fails
          casValues = res.body[0].cas_numbers;
          expect('{' + casValues.toString() + '}').to.equal(data.cas_numbers);
        });
      }
    },
  );
});

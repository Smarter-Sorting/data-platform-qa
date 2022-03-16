let testData = require('../testDataLoad');
let config = require('../../../support/setUp.js');
let commons = require('../../../support/helpers.js');

describe('Single item binning - Albertsons', function () {
  context('Validate [UNIVERSAL WASTE] bin rules', () => {
    runtest(testData.albUniversalWaste);
  });
  context('Validate [AEROSOL AER] bin rules', () => {
    runtest(testData.albAerosol);
  });
  context('Validate [OXIDIZER OX] bin rules', () => {
    runtest(testData.albOzidizer);
  });
  context('Validate [CORROSIVE ACID A-C] bin rules', () => {
    runtest(testData.albCorrosiveAcid);
  });
  context('Validate [CORROSIVE BASE A-B] bin rules', () => {
    runtest(testData.albCorrosiveBase);
  });
  context('Validate [FLAMMABLE FL] bin rules', () => {
    runtest(testData.albFlammalbe);
  });
  context('Validate [STATE REG-TOXIC ST] bin rules', () => {
    runtest(testData.albStateReg);
  });
  context('Validate [NON HAZARDOUS NH] bin rules', () => {
    runtest(testData.albNonHaz);
  });
});

function runtest(testData) {
  Object.entries(testData.variants).forEach(([variant, data]) => {
    // before(async () => {
    //   //trigger rebinning POST request
    //   console.debug('before for ' + variant);
    //   const rebinning = await commons.postRequest(
    //     config.localhostBinning,
    //     testData.triggerBinningUri,
    //     data.request,
    //     ``,
    //   );
    //   expect(rebinning.statusCode).to.be.equal(data.responseCode);
    // });
    it(`Verify response for rule:  ${variant}`, async () => {
      //trigger rebinning POST request
      const rebinning = await commons.postRequest(
        config.localhostBinning,
        testData.triggerBinningUri,
        data.request,
        ``,
      );
      expect(rebinning.statusCode).to.be.equal(data.responseCode);

      //get all bins for UPC 09122116 and company albertsons
      const res = await commons.getRequest(
        config.localhostBinning,
        testData.getBinsUri,
      );
      expect(res.statusCode).to.be.equal(data.responseCode);

      //validate bin name and bin priority for all states
      const responseBody = res.body.bins;
      responseBody.forEach((obj) => {
        expect(obj.company).to.be.equal(testData.company);
        expect(obj.name).to.be.equal(testData.name);
        expect(obj.priority).to.be.equal(testData.priority);
      });
    });
  });
}

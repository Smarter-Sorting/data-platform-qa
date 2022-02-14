let testData = require('../testDataLoad');
let config = require('../../support/setUp.js');
let commons = require('../../support/helpers.js');

describe('Single item binning - Wegmans', function () {
  context('Validate [Electronics Recycling] bin rules', () => {
    runtest(testData.wegElectronicRecycling);
  });
  context('Validate [Reclamation] bin rules', () => {
    runtest(testData.wegElectronicRecycling);
  });
  context('Validate [Batteries] bin rules', () => {
    runtest(testData.wegBatteries);
  });
  context('Validate [Light Bulbs] bin rules', () => {
    runtest(testData.wegLightbulbs);
  });
  context('Validate [Cylinders] bin rules', () => {
    runtest(testData.wegCylinders);
  });
  context('Validate [Aerosols/Flammables] bin rules', () => {
    runtest(testData.wegAerosolsFlammables);
  });
  context('Validate [Oxidizers/Bleach] bin rules', () => {
    runtest(testData.wegOxidizersBleach);
  });
});

function runtest(testData) {
  Object.entries(testData.variants).forEach(([variant, data]) => {
    it(`Verify response for rule:  ${variant}`, async () => {
      //trigger rebinning POST request
      const rebinning = await commons.postRequest(
        config.mcBinning,
        testData.triggerBinningUri,
        data.request,
        ``,
      );
      expect(rebinning.statusCode).to.be.equal(data.responseCode);

      //get all bins for UPC 09122116 and company albertsons
      const res = await commons.getRequest(
        config.mcBinning,
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

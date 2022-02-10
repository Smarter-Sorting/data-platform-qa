// wegmans multi-component binnig test data
let wegUnreg = require('../fixtures/binning/wegmansMC/wegmansMCSameUnregBinsTestData.json');
let wegReg = require('../fixtures/binning/wegmansMC/wegmansMCSameRegBinsTestData.json');
let wegMixUnreg = require('../fixtures/binning/wegmansMC/wegmansMCDiffUnregBinsTestData.json');
let wegMixReg = require('../fixtures/binning/wegmansMC/wegmansMCDiffRegBinsTestData.json');
let wegMixTwoItems = require('../fixtures/binning/wegmansMC/wegmansMCDiffMixBinsTwoChildrenTestData.json');
let wegMixThreeItems = require('../fixtures/binning/wegmansMC/wegmansMCDiffMixBinsThreeChildrenTestData.json');

//albertsons single component test data
let albUniversalWaste = require('../fixtures/binning/albertsonsSI/universalWasteBin.json');
let albAerosol = require('../fixtures/binning/albertsonsSI/aerosolBin.json');
let albOzidizer = require('../fixtures/binning/albertsonsSI/oxidizerBin.json');
let albCorrosiveAcid = require('../fixtures/binning/albertsonsSI/corrosiveAcidBin.json');
let albFlammalbe = require('../fixtures/binning/albertsonsSI/flammableBin.json');

module.exports = {
  wegUnreg,
  wegReg,
  wegMixUnreg,
  wegMixReg,
  wegMixTwoItems,
  wegMixThreeItems,
  albUniversalWaste,
  albAerosol,
  albOzidizer,
  albCorrosiveAcid,
  albFlammalbe,
};

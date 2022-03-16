// wegmans multi-component binnig test data
let wegUnreg = require('./fixtures/wegmansMC/wegmansMCSameUnregBinsTestData.json');
let wegReg = require('./fixtures/wegmansMC/wegmansMCSameRegBinsTestData.json');
let wegMixUnreg = require('./fixtures/wegmansMC/wegmansMCDiffUnregBinsTestData.json');
let wegMixReg = require('./fixtures/wegmansMC/wegmansMCDiffRegBinsTestData.json');
let wegMixTwoItems = require('./fixtures/wegmansMC/wegmansMCDiffMixBinsTwoChildrenTestData.json');
let wegMixThreeItems = require('./fixtures/wegmansMC/wegmansMCDiffMixBinsThreeChildrenTestData.json');

// albertsons multi-component binnig test data
let albUnreg = require('./fixtures/albertsonsMC/albertsonsMCSameUnregBinsTestData.json');
let albReg = require('./fixtures/albertsonsMC/albertsonsMCSameRegBinsTestData.json');
let albMixUnreg = require('./fixtures/albertsonsMC/albertsonsMCDiffUnregBinsTestData.json');
let albMixReg = require('./fixtures/albertsonsMC/albertsonsMCDiffRegBinsTestData.json');
let albMixTwoItems = require('./fixtures/albertsonsMC/albertsonsMCDiffMixBinsTwoChildrenTestData.json');
let albMixThreeItems = require('./fixtures/albertsonsMC/albertsonsMCDiffMixBinsThreeChildrenTestData.json');

//albertsons single component test data
let albUniversalWaste = require('./fixtures/albertsonsSI/universalWasteBin.json');
let albAerosol = require('./fixtures/albertsonsSI/aerosolBin.json');
let albOzidizer = require('./fixtures/albertsonsSI/oxidizerBin.json');
let albCorrosiveAcid = require('./fixtures/albertsonsSI/corrosiveAcidBin.json');
let albCorrosiveBase = require('./fixtures/albertsonsSI/corrosiveBaseBin.json');
let albFlammalbe = require('./fixtures/albertsonsSI/flammableBin.json');
let albStateReg = require('./fixtures/albertsonsSI/stateRegBin.json');
let albNonHaz = require('./fixtures/albertsonsSI/nonHazBin.json');

//wegmans single component test data
let wegElectronicRecycling = require('./fixtures/wegmansSI/electronicRecyclingBin.json');
let wegReclamation = require('./fixtures/wegmansSI/reclamationBin.json');
let wegBatteries = require('./fixtures/wegmansSI/batteriesBin.json');
let wegLightbulbs = require('./fixtures/wegmansSI/lightbulbsBin.json');
let wegCylinders = require('./fixtures/wegmansSI/cylindersBin.json');
let wegAerosolsFlammables = require('./fixtures/wegmansSI/aerosolsFlammablesBin.json');
let wegOxidizersBleach = require('./fixtures/wegmansSI/oxidizersBleachBin.json');
let wegCorrosiveWithAmmonia = require('./fixtures/wegmansSI/corrosiveWithAmmoniaBin.json');
let wegCorrosiveWithoutAmmonia = require('./fixtures/wegmansSI/corrosiveWithoutAmmoniaBin.json');
let wegCorrosiveAcidic = require('./fixtures/wegmansSI/corrosiveAcidicBin.json');
let wegToxic = require('./fixtures/wegmansSI/toxicBin.json');
let wegCompactor = require('./fixtures/wegmansSI/compactorBin.json');

module.exports = {
  wegUnreg,
  wegReg,
  wegMixUnreg,
  wegMixReg,
  wegMixTwoItems,
  wegMixThreeItems,
  albUnreg,
  albReg,
  albMixUnreg,
  albMixReg,
  albMixTwoItems,
  albMixThreeItems,
  albUniversalWaste,
  albAerosol,
  albOzidizer,
  albCorrosiveAcid,
  albCorrosiveBase,
  albFlammalbe,
  albStateReg,
  albNonHaz,
  wegElectronicRecycling,
  wegReclamation,
  wegLightbulbs,
  wegBatteries,
  wegCylinders,
  wegAerosolsFlammables,
  wegOxidizersBleach,
  wegCorrosiveWithAmmonia,
  wegCorrosiveWithoutAmmonia,
  wegCorrosiveAcidic,
  wegToxic,
  wegCompactor,
};

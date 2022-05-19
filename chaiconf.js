let chai = require('chai');
let deepEqualInAnyOrder = require('deep-equal-in-any-order');

// print stack trace on assertion errors
chai.config.includeStack = true;

// register globals
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.expect = chai.expect;
global.assert = chai.assert;
global.deepEqualInAnyOrder = chai.use(deepEqualInAnyOrder);

// enable should style
chai.should();

require('coffee-script');

var utils = require('../lib/utils');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports['utils'] = {
    setUp:function (done) {
        // setup here
        done();
    },
    'endsWith':function (test) {
        test.expect(5);

        test.equal(utils.endsWith('', 'def'), false);
        test.equal(utils.endsWith('abc', ''), true);
        test.equal(utils.endsWith('abcdef', 'def'), true);
        test.equal(utils.endsWith('abcDef', 'Def'), true);
        test.equal(utils.endsWith('abc.', '.'), true);

        test.done();
    }
};
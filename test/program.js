require('coffee-script');

var Program = require('../lib/program');

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

exports['program'] = {
    setUp:function (done) {
        this._program = new Program();
        done();
    },
    '_getFileFunctions':function (test) {
        var file = {
            'abd':function () {
            },
            'abdDef':function () {
            },
            'abddef':function () {
            },
            '_abdDef':function () {
            }
        };

        test.expect(3);
        // tests here
        test.deepEqual(this._program._getFileFunctions(file, 'Def'), ['abdDef', '_abdDef']);
        test.deepEqual(this._program._getFileFunctions(file, 'def'), ['abddef']);
        test.deepEqual(this._program._getFileFunctions(file, 'non'), []);

        test.done();
    },
    '_getFileContent':function (test) {
        var compiledTemplates1 = [
            {
                'name':'test_1',
                'content':{
                    'source':'source test 1'
                }
            },
            {
                'name':'test_2',
                'content':{
                    'source':'source test 2'
                }
            }
        ];
        var compiledTemplates2 = [
            {
                'name':'abc',
                'content':{
                    'source':'def'
                }
            }
        ];

        test.expect(3);
        // tests here
        test.equal(this._program._getFileContent(compiledTemplates1),
            "(function(){define(function(){return{test_1 : source test 1,test_2 : source test 2};});}).call(this);"
        );
        test.equal(this._program._getFileContent(compiledTemplates2),
            "(function(){define(function(){return{abc : def};});}).call(this);"
        );
        test.equal(this._program._getFileContent([]),
            "(function(){define(function(){return{};});}).call(this);"
        );

        test.done();
    }
};
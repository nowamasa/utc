# utc
A simple [underscore.js](http://underscorejs.org/#template) template compiler.

[![Build Status](https://secure.travis-ci.org/nowamasa/utc.png?branch=master)](http://travis-ci.org/nowamasa/utc)

## Getting Started
Install the module with: `npm install -g utc`

## Using utc (CLI)
Once you have installed utc type `utc --help` to see all available options

    Options:
        -h, --help              output usage information
        -V, --version           output the version number
        -d, --directory         directory
        -s, --fileSuffix        file suffix
        -f, --functionSuffix    function suffix

## Examples
Inside 'templates' folder create a file called 'sampleTemplate.js':
```js
(function () {
    define(function () {
        return {
            getListTemplateStr: function () {
                return this._helper() + ": <%= name %>";
            },
            _helper: function () {
                return "hello";
            }
        };
    });
}).call(this);
```
run `utc -d "templates" -s "Template" -f "Str"` and you should have the same file with a new content
```js
(function () {
    define(function () {
        return{
            getListTemplateStr: function (obj) {
                var __p = '';
                var print = function () {
                    __p += Array.prototype.join.call(arguments, '')
                };
                with (obj || {}) {
                    __p += 'hello: ' +
                        ( name ) +
                        '';
                }
                return __p;
            }
        };
    });
}).call(this);
```
## License
Copyright (c) 2012 nowamasa  
Licensed under the MIT license.

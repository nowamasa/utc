# utc
Simple [underscore.js](http://underscorejs.org/#template) template compiler.

## Getting Started
Install the module with: `npm install -g utc`

## Using utc (CLI)
Once you have installed utc type `utc --help` to see all available options

    Options:
        -h, --help              output usage information
        -V, --version           output the version number
        -o, --folder            specify the template folder
        -s, --fileSuffix        specify the file suffix
        -f, --functionSuffix    specify the function suffix

## Examples
Inside 'templates' folder create a file called 'sampleTemplate.js':

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

run `cli -o "templates" -s "Template" -f "Str"` and you should have the same file with a new content

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

## License
Copyright (c) 2012 nowamasa  
Licensed under the MIT license.

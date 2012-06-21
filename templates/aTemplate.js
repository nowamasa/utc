(function () {
    define(function () {
        return {
            getListTemplateStr:function (obj) {
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
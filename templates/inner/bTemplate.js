(function () {
    define(function () {
        return {
            getListTemplateStr:function (obj) {
                var __p = '';
                var print = function () {
                    __p += Array.prototype.join.call(arguments, '')
                };
                with (obj || {}) {
                    __p += '';
                    _.each(people, function (name) {
                        ;
                        __p += ' <li>' +
                            ( name ) +
                            '</li> ';
                    });
                    ;
                    __p += 'hello: ' +
                        ( name ) +
                        '<b>' +
                        _.escape(value) +
                        '</b>';
                }
                return __p;
            }
        };
    });
}).call(this);
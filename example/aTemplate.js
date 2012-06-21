(function () {

    define(function () {
        return {
            getListTemplateStr:function () {
                return "hello: <%= name %>";
            },
            foo:function () {
                return true;
            }
        };
    });

}).call(this);

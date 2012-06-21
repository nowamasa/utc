(function () {

    define(function () {
        return {
            getListTemplateStr:function () {
                return this._helper_a() + "hello: <%= name %>" + this._helper_b()
            },
            _helper_a:function () {
                return "<% _.each(people, function(name) { %> <li><%= name %></li> <% }); %>";
            },
            _helper_b:function () {
                return "<b><%- value %></b>";
            }
        };
    });

}).call(this);
(function() { var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; templates["simple-1"] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <ul>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"color\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <div>\r\n            No colors!\r\n        </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "primary";
},"8":function(container,depth0,helpers,partials,data) {
    return "secondary";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"simple-1\" style=\"background-color: blue; border: 1px solid black\">\r\n    <div class=\"colors\">\r\n        <span class=\"hello\">Hello "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "! <strong>You have "
    + alias4(((helper = (helper = helpers.messageCount || (depth0 != null ? depth0.messageCount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"messageCount","hash":{},"data":data}) : helper)))
    + " messages!</strong></span>\r\n\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.colors : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\r\n    <button type=\"button\" class=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.primary : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "\">Click me!</button>\r\n</div>";
},"useData":true});})();
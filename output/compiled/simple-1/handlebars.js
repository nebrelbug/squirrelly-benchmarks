(function() { var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; templates["simple-1"] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"colors") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":9,"column":21}}})) != null ? stack1 : "")
    + "        </ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"color\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <div>\n            No colors!\n        </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "primary";
},"8":function(container,depth0,helpers,partials,data) {
    return "secondary";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"simple-1\" style=\"background-color: blue; border: 1px solid black\">\n    <div class=\"colors\">\n        <span class=\"hello\">Hello "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":34},"end":{"line":3,"column":42}}}) : helper)))
    + "! <strong>You have "
    + alias4(((helper = (helper = lookupProperty(helpers,"messageCount") || (depth0 != null ? lookupProperty(depth0,"messageCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"messageCount","hash":{},"data":data,"loc":{"start":{"line":3,"column":61},"end":{"line":3,"column":77}}}) : helper)))
    + " messages!</strong></span>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"colors") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":15,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n    <button type=\"button\" class=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"primary") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":17,"column":33},"end":{"line":17,"column":79}}})) != null ? stack1 : "")
    + "\">Click me!</button>\n</div>";
},"useData":true});})();
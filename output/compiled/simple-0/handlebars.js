(function() { var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; templates["simple-0"] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Hello "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":14}}}) : helper)))
    + "! <strong>You have "
    + alias4(((helper = (helper = lookupProperty(helpers,"messageCount") || (depth0 != null ? lookupProperty(depth0,"messageCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"messageCount","hash":{},"data":data,"loc":{"start":{"line":1,"column":33},"end":{"line":1,"column":49}}}) : helper)))
    + " messages! "
    + alias4(((helper = (helper = lookupProperty(helpers,"colors") || (depth0 != null ? lookupProperty(depth0,"colors") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colors","hash":{},"data":data,"loc":{"start":{"line":1,"column":60},"end":{"line":1,"column":70}}}) : helper)));
},"useData":true});})();
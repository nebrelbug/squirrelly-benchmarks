// Compiled using marko@4.13.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/templating-benchmarks$0.0.0/templates/friends/template.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/dist/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/dist/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/dist/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Friends</title></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"friends\">");

  var for__6 = 0;

  marko_forEach(input.friends, function(friend) {
    var keyscope__7 = "[" + ((for__6++) + "]");

    out.w("<div class=\"friend\"><ul><li>Name: " +
      marko_escapeXml(input.getFullNameRaptor(friend)) +
      "</li><li>Balance: " +
      marko_escapeXml(friend.balance) +
      "</li><li>Age: " +
      marko_escapeXml(friend.age) +
      "</li><li>Address: " +
      marko_escapeXml(friend.address) +
      "</li><li>Image: <img" +
      marko_attr("src", friend.picture) +
      "></li><li>Company: " +
      marko_escapeXml(friend.company) +
      "</li><li>Email: <a href=\"mailto:" +
      marko_escapeXmlAttr(friend.email) +
      "\">" +
      marko_escapeXml(friend.email) +
      "</a></li><li>About: " +
      marko_escapeXml(friend.about) +
      "</li>");

    if (friend.tags.length) {
      out.w("<li>Tags: <ul>");

      var for__22 = 0;

      marko_forEach(friend.tags, function(tag) {
        var keyscope__23 = "[" + (((for__22++) + keyscope__7) + "]");

        out.w("<li>" +
          marko_escapeXml(tag) +
          "</li>");
      });

      out.w("</ul></li>");
    }

    if (friend.friends.length) {
      out.w("<li>Friends: <ul>");

      var for__27 = 0;

      marko_forEach(friend.friends, function(friend) {
        var keyscope__28 = "[" + (((for__27++) + keyscope__7) + "]");

        out.w("<li>" +
          marko_escapeXml(friend.name) +
          " (" +
          marko_escapeXml(friend.id) +
          ")</li>");
      });

      out.w("</ul></li>");
    }

    out.w("</ul></div>");
  });

  out.w("</div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "30");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ak_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/templating-benchmarks$0.0.0/templates/friends/template.marko",
    tags: [
      "marko/dist/components/taglib/component-globals-tag",
      "marko/dist/components/taglib/init-components-tag",
      "marko/dist/taglibs/async/await-reorderer-tag"
    ]
  };

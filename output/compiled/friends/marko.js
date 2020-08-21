// Compiled using marko@4.22.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/templating-benchmarks$0.0.0/templates/friends/template.marko",
    marko_renderer = require("marko/dist/runtime/components/renderer"),
    marko_forOf = require("marko/dist/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/dist/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/dist/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/dist/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/dist/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/dist/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/dist/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html lang=en><head><meta charset=UTF-8><title>Friends</title></head><body><div class=friends>");

  var $for$0 = 0;

  marko_forOf(input.friends, function(friend) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div class=friend><ul><li>Name: " +
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
      "</li><li>Email: <a" +
      marko_attr("href", "mailto:" + (friend.email == null ? "" : friend.email)) +
      ">" +
      marko_escapeXml(friend.email) +
      "</a></li><li>About: " +
      marko_escapeXml(friend.about) +
      "</li>");

    if (friend.tags.length) {
      out.w("<li>Tags: <ul>");

      var $for$1 = 0;

      marko_forOf(friend.tags, function(tag) {
        var $keyScope$1 = "[" + ((($for$1++) + $keyScope$0) + "]");

        out.w("<li>" +
          marko_escapeXml(tag) +
          "</li>");
      });

      out.w("</ul></li>");
    }

    if (friend.friends.length) {
      out.w("<li>Friends: <ul>");

      var $for$2 = 0;

      marko_forOf(friend.friends, function(friend) {
        var $keyScope$2 = "[" + ((($for$2++) + $keyScope$0) + "]");

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

  await_reorderer_tag({}, out, __component, "24");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/templating-benchmarks$0.0.0/templates/friends/template.marko",
    tags: [
      "marko/dist/core-tags/components/init-components-tag",
      "marko/dist/core-tags/core/await/reorderer-renderer",
      "marko/dist/core-tags/components/preferred-script-location-tag"
    ]
  };

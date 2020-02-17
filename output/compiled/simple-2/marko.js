// Compiled using marko@4.18.46 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/templating-benchmarks$0.0.0/templates/simple-2/template.marko",
    marko_renderer = require("marko/dist/runtime/components/renderer"),
    helpers_escape_xml = require("marko/dist/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_forOf = require("marko/dist/runtime/helpers/for-of");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><h1 class=\"header\">" +
    marko_escapeXml(input.header) +
    "</h1><h2 class=\"header2\">" +
    marko_escapeXml(input.header2) +
    "</h2><h3 class=\"header3\">" +
    marko_escapeXml(input.header3) +
    "</h3><h4 class=\"header4\">" +
    marko_escapeXml(input.header4) +
    "</h4><h5 class=\"header5\">" +
    marko_escapeXml(input.header5) +
    "</h5><h6 class=\"header6\">" +
    marko_escapeXml(input.header6) +
    "</h6><ul class=\"list\">");

  var $for$0 = 0;

  marko_forOf(input.list, function(item) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<li class=\"item\">" +
      marko_escapeXml(item) +
      "</li>");
  });

  out.w("</ul></div>");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/templating-benchmarks$0.0.0/templates/simple-2/template.marko"
  };

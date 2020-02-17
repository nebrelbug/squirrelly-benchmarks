// Compiled using marko@4.18.46 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/templating-benchmarks$0.0.0/templates/simple-1/template.marko",
    marko_renderer = require("marko/dist/runtime/components/renderer"),
    helpers_escape_xml = require("marko/dist/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_str = require("marko/dist/runtime/helpers/to-string"),
    marko_forOf = require("marko/dist/runtime/helpers/for-of"),
    marko_styleAttr = require("marko/dist/runtime/html/helpers/style-attr"),
    marko_classAttr = require("marko/dist/runtime/html/helpers/class-attr");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"simple-1\" style=\"background-color: blue; border: 1px solid black\"><div class=\"colors\"><span class=\"hello\">Hello " +
    marko_escapeXml(input.name) +
    "! <strong>You have " +
    marko_str(input.messageCount) +
    " messages!</strong></span>");

  if (input.colors.length) {
    out.w("<ul>");

    var $for$0 = 0;

    marko_forOf(input.colors, function(color) {
      var $keyScope$0 = "[" + (($for$0++) + "]");

      out.w("<li" +
        marko_styleAttr("background-color: " + color) +
        " class=\"color\">" +
        marko_escapeXml(color) +
        "</li>");
    });

    out.w("</ul>");
  } else {
    out.w("<div>No colors!</div>");
  }

  out.w("</div><button type=\"button\"" +
    marko_classAttr(input.primary ? "primary" : "secondary") +
    ">" +
    marko_escapeXml(input.buttonLabel) +
    "</button></div>");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/templating-benchmarks$0.0.0/templates/simple-1/template.marko"
  };

// Compiled using marko@4.22.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/templating-benchmarks$0.0.0/templates/reverse-helper/template.marko",
    marko_renderer = require("marko/dist/runtime/components/renderer"),
    module_util_module = require("../../helpers/util"),
    util_module = module_util_module.default || module_util_module,
    reverse = module_util_module.reverse,
    marko_str = require("marko/dist/runtime/helpers/to-string");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div>" +
    marko_str(reverse(input.A)) +
    marko_str(reverse(input.B)) +
    marko_str(reverse(input.C)) +
    marko_str(reverse(input.D)) +
    marko_str(reverse(input.E)) +
    "</div>");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/templating-benchmarks$0.0.0/templates/reverse-helper/template.marko"
  };

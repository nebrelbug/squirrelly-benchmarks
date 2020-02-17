// Compiled using marko@4.18.46 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/templating-benchmarks$0.0.0/templates/simple-0/template.marko",
    marko_renderer = require("marko/dist/runtime/components/renderer"),
    marko_str = require("marko/dist/runtime/helpers/to-string");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("Hello " +
    marko_str(input.name) +
    "! You have " +
    marko_str(input.messageCount) +
    " messages! " +
    marko_str(input.colors));
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/templating-benchmarks$0.0.0/templates/simple-0/template.marko"
  };

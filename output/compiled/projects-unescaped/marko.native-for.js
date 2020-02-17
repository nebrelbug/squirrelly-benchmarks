// Compiled using marko@4.18.46 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/templating-benchmarks$0.0.0/templates/projects-unescaped/template.native-for.marko",
    marko_renderer = require("marko/dist/runtime/components/renderer"),
    marko_str = require("marko/dist/runtime/helpers/to-string"),
    marko_loadTag = require("marko/dist/runtime/helpers/load-tag"),
    component_globals_tag = marko_loadTag(require("marko/dist/core-tags/components/component-globals-tag")),
    marko_attr = require("marko/dist/runtime/html/helpers/attr"),
    init_components_tag = marko_loadTag(require("marko/dist/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/dist/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>" +
    marko_str(data.title) +
    "</title></head><body>");

  component_globals_tag({}, out);

  out.w("<p>" +
    marko_str(data.text) +
    "</p>");

  var i = 0,
      len = data.projects.length

  while (i < len) {
    var project = data.projects[i]

    out.w("<a" +
      marko_attr("href", "" + project.url) +
      ">" +
      marko_str(project.name) +
      "</a><p>" +
      marko_str(project.description) +
      "</p>");

    i++
  }

  if (!data.projects.length) {
    out.w("No projects");
  }

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "7");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/templating-benchmarks$0.0.0/templates/projects-unescaped/template.native-for.marko",
    tags: [
      "marko/dist/core-tags/components/component-globals-tag",
      "marko/dist/core-tags/components/init-components-tag",
      "marko/dist/core-tags/core/await/reorderer-renderer"
    ]
  };

// Compiled using marko@4.22.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/templating-benchmarks$0.0.0/templates/projects-escaped/template.native-for.marko",
    marko_renderer = require("marko/dist/runtime/components/renderer"),
    helpers_escape_xml = require("marko/dist/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/dist/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/dist/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/dist/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/dist/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/dist/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>" +
    marko_escapeXml(data.title) +
    "</title></head><body><p>" +
    marko_escapeXml(data.text) +
    "</p>");

  var i = 0,
      len = data.projects.length

  while (i < len) {
    var project = data.projects[i]

    out.w("<a" +
      marko_attr("href", project.url) +
      ">" +
      marko_escapeXml(project.name) +
      "</a><p>" +
      marko_escapeXml(project.description) +
      "</p>");

    i++
  }

  if (!data.projects.length) {
    out.w("No projects");
  }

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "7");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/templating-benchmarks$0.0.0/templates/projects-escaped/template.native-for.marko",
    tags: [
      "marko/dist/core-tags/components/init-components-tag",
      "marko/dist/core-tags/core/await/reorderer-renderer",
      "marko/dist/core-tags/components/preferred-script-location-tag"
    ]
  };

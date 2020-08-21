// Compiled using marko@4.22.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/templating-benchmarks$0.0.0/templates/search-results/template.marko",
    marko_renderer = require("marko/dist/runtime/components/renderer"),
    helpers_escape_xml = require("marko/dist/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_forOf = require("marko/dist/runtime/helpers/for-of"),
    marko_attr = require("marko/dist/runtime/html/helpers/attr"),
    marko_classAttr = require("marko/dist/runtime/html/helpers/class-attr");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=search-results-container><div class=searching id=searching><div class=wait-indicator-icon></div> Searching...</div><div id=resultsContainer><div class=hd><span class=count><span id=count>" +
    marko_escapeXml(input.totalCount) +
    "</span> results</span><div class=view-modifiers><div class=view-select>View: <div class=\"view-icon view-icon-selected\" id=viewIconGallery><i class=icon-th></i></div><div class=view-icon id=viewIconList><i class=icon-th-list></i></div></div></div></div><div id=resultsTarget><div" +
    marko_classAttr("search-results view-" + (input.view == null ? "" : input.view)) +
    ">");

  var $for$0 = 0;

  marko_forOf(input.searchRecords, function(searchRecord) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div class=search-item><div class=\"search-item-container drop-shadow\"><div class=img-container><img" +
      marko_attr("src", searchRecord.imgUrl) +
      "></div><h4 class=title><a" +
      marko_attr("href", searchRecord.viewItemUrl) +
      ">" +
      marko_escapeXml(searchRecord.title) +
      "</a></h4>" +
      marko_escapeXml(searchRecord.description));

    if (searchRecord.featured) {
      out.w("<div>Featured!</div>");
    }

    if (searchRecord.sizes && searchRecord.sizes.length) {
      out.w("<div>Sizes available:<ul>");

      var $for$1 = 0;

      marko_forOf(searchRecord.sizes, function(size) {
        var $keyScope$1 = "[" + ((($for$1++) + $keyScope$0) + "]");

        out.w("<li>" +
          marko_escapeXml(size) +
          "</li>");
      });

      out.w("</ul></div>");
    }

    out.w("</div></div>");
  });

  out.w("</div></div></div></div>");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/templating-benchmarks$0.0.0/templates/search-results/template.marko"
  };

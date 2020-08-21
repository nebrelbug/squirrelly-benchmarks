// Compiled using marko@4.22.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/templating-benchmarks$0.0.0/templates/if-expression/template.marko",
    marko_renderer = require("marko/dist/runtime/components/renderer"),
    marko_forOf = require("marko/dist/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/dist/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_classAttr = require("marko/dist/runtime/html/helpers/class-attr");

function render(input, out, __component, component, state) {
  var data = input;

  var $for$0 = 0;

  marko_forOf(input.accounts, function(account) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div>");

    if (account.accountStatus === "closed") {
      out.w("<div>Your account has been closed!</div>");
    } else if (account.accountStatus === "suspended") {
      out.w("<div>Your account has been temporarily suspended</div>");
    } else {
      out.w("<div>Bank balance: <span" +
        marko_classAttr(account.balance < 0 ? "negative" : "positive") +
        ">" +
        marko_escapeXml(account.formattedBalance) +
        "</span></div>");
    }

    out.w("</div>");
  });
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/templating-benchmarks$0.0.0/templates/if-expression/template.marko"
  };

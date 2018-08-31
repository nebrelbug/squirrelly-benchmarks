var Sqrl = require('squirrelly')
Sqrl.autoEscape(true)
//NOTE: autoEscaping is off. Squirrelly doesn't force autoEscaping by default, since it negatively impacts performance, but it can be
//enabled.
Sqrl.defineFilter("reverse", function (str) {//For the reverse helper
    var out = ''
    for (var i = str.length - 1; i >= 0; i--) {
        out += str.charAt(i)
    }
    return out || str
})

module.exports = {
    name: 'squirrelly',
    ext: 'sqrl',
    render: function (template, data, callback) {
        callback(null, template(data, Sqrl));
    },
    compile: function (src, templatePath, templateName, callback) {
        var compiled = 'module.exports=' + Sqrl.Precompile(src).toString()
        callback(null, compiled);
    },
    load: function (src, templatePath, templateName, callback) {
        callback(null, Sqrl.Precompile(src));
    }
};
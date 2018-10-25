var Sqrl = require('squirrelly')
Sqrl.autoEscaping(false) // Assumes that the data is already sanitized
Sqrl.defineFilter("reverse", function (str) {// For the reverse helper
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
        var compiled = 'module.exports=' + Sqrl.load({$name: templatePath, $cache: true}, src).toString()
        callback(null, compiled);
    },
    load: function (src, templatePath, templateName, callback) {
        callback(null, Sqrl.load({$name: templatePath, $cache: true}, src));
    }
};
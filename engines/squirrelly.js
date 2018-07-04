var Sqrl = require('squirrelly')

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
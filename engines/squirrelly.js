var Sqrl = require('squirrelly')
Sqrl.defaultConfig.autoEscape = false // Assumes that the data is already sanitized
Sqrl.defaultConfig.cache = false

Sqrl.filters.define('reverse', function (str) {
  // For the reverse helper
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
    callback(null, template(data, Sqrl.defaultConfig))
    // callback(null, template(data, Sqrl.defaultConfig))
  },
  compile: function (src, templatePath, templateName, callback) {
    var compiled =
      'module.exports=function(it,c,cb){' +
      Sqrl.compileToString(src, Sqrl.getConfig({ filename: templatePath })) +
      '}'
    callback(null, compiled)
  },
  load: function (src, templatePath, templateName, callback) {
    callback(null, Sqrl.compile(src, { filename: templatePath }))
  }
}

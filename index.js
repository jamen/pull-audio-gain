
var Gain = require('audio-gain/direct')

module.exports = stream

function stream (options) {
  var gain = Gain(options)
  
  // Return transform stream
  return function (read) {
    return function (end, cb) {
      read(end, function (end, buf) {
        if (end) return cb(end)
        cb(null, gain(buf))
      }) 
    }
  }
}


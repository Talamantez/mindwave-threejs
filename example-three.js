var Mindwave = require('mindwave');
var kefir = require('kefir');
var three = require('three');
var http = require('http');
var mw = new Mindwave();
var io = require('socket.io').listen(8000);


io.on('connection', function(socket){
  console.log('a user connected');
});

function toObj (objs) {
  return objs.reduce(function (acc,o) {
    var k = Object.keys(o)[0]
    acc[k] = o[k]
    return acc
  }, {})
}

function prop (p) {
  return (v) => {
    var r = {}
    r[p] = v
    return r
  }
}

function asProp (ev) {
  return kefir.fromEvents(mw, ev).map(prop(ev))
}

var waveS = kefir.fromEvents(mw, 'wave').bufferWithCount(256).map(prop('wave'))

var outS = kefir.zip([
  asProp('eeg'),
  asProp('signal'),
  asProp('meditation'),
  asProp('attention'),
  //waveS,
]).map(toObj)

console.log('connecting')
mw.connect('/dev/cu.MindWaveMobile-DevA');

outS.log()
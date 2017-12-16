var Mindwave = require('mindwave');
var kefir = require('kefir');
var mw = new Mindwave();


var Mindwave = require('mindwave');

var mw = new Mindwave();

mw.on('eeg', function() {
    console.log('eeg', eeg);
});

mw.on('meditation', function() {
    console.log('meditation', meditation);
});

mw.on('attention', function() {
    console.log('attention', attention);
});

mw.on('blink', function() {
    console.log('blink', blink);
});

mw.connect('/dev/cu.MindWaveMobile-DevA');
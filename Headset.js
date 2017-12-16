var Mindwave = require('mindwave');
var kefir = require('kefir');
var Headset = function() {

    var self = this;

    self.mv = new Mindwave();

    self.mw.on('eeg', function() {
        console.log('eeg', eeg);
    });

    self.mv.on('signal', function() {
        console.log('signal', signal);
    });

    self.mv.on('meditation', function() {
        console.log('meditation', meditation);
    });

    self.mv.on('attention', function() {
        console.log('attention', attention);
    });

    self.mw.on('blink', function() {
        console.log('blink', blink);
    });

    self.init = function(){
        self.mv.connect('/dev/cu.MindWaveMobile-DevA');        
    }

    self.init();

};

module.exports.Headset = Headset;
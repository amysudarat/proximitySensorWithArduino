const five = require('johnny-five');
const board = new five.Board();
const pins = require('./pins');


board.on('ready', function() {
 console.log('READY!');
 const led = new five.Led(pins.d1);
 led.blink(100);
 console.log(' BLINKING!!!');
});
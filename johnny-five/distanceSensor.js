const five = require('johnny-five');
const board = new five.Board();
const pins = require('./pins');

//var echoPin = pins.d7;
//var trigPin = pins.d6;
//#define echoPin D7 // Echo Pin
//#define trigPin D6 // Trigger Pin
 
//long duration = 0;
//long distance; // Duration used to calculate distance
var distance;

board.on('ready',function(){
    console.log('Ready!');
   
    var proximity = new five.Proximity({controller: "HCSR04", pin: 7})
    const led = new five.Led(2);
    
    proximity.on('data',function(){
        console.log("inches: ", this.inches);
        console.log("cm: ", this.cm);
        distance = "The object in front is "+String(this.cm) + "cm apart from the sensor";
        if(this.cm < 6)
        {
            
            led.on();
        }
        else
        {
            led.off();
        }
    });
});

// content of index.js
const http = require('http')
const port = 3000


const requestHandler = (request, response) => {
  console.log(request.url)
  response.end(distance)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
     




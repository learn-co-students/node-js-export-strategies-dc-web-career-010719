const Decor = require("./lamp");
const powerEvents = require("./power");
const myLamp = new Decor(10);
const powerLimits = require("./power_limits");

myLamp.turnOn();

console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`);

powerEvents.surge(myLamp);
powerEvents.outage(myLamp);

myLamp.turnOn();

console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`);

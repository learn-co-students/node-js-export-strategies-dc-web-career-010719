const Lamp = require("./lamp");
const myLamp = new Lamp(10);

console.log(myLamp.currentBrightness);
myLamp.turnOn();

console.log(myLamp.currentBrightness);

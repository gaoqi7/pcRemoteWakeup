const five = require("johnny-five");
//Not only need johnny-five, but also need raspi-io library.
const raspi = require('raspi-io');
const board = new five.Board({ io: new raspi() })
board.on("ready", function () {
    console.log("Ready!");
    let servo = new five.Servo({ pin: "GPIO18" });
    servo.sweep({ interval: 500, step: 10, range: [0, 95] });
    // stopServo use to stop the servo and quit the node precess
    function stopServo() {
        servo.stop();
        process.exit();
    };
    setTimeout(stopServo, 3000);

});

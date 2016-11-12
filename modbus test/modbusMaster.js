// open a serial port 
var SerialPort = require("serialport");
var serialPort = new SerialPort("/dev/ttyUSB0", { baudrate: 9600, autoOpen: false, stopBits: 2, parity: 'none' });

// create a modbus client using the serial port 
var ModbusRTU = require("modbus-serial");
var client = new ModbusRTU(serialPort);

// open connection to a serial port 
client.open();
client.setTimeout(3000);

// modbus address
var MotorFreqAddr = 0x2001
var MotorControlAddr = 0x2000
// modbus commend
var MotorSTOP = 0x01
var MotorFWD = 0x12
var MotorREV = 0x22


// tell your coffee machine to do something ... 
main();

function main() {
    client.setID(1);

    client.readHoldingRegisters(2000, 1, function(err, data) {
        console.log(data.data);
    });
}

function StopMotor() {
    client.setID(1);
    client.writeRegister(MotorControlAddr, MotorSTOP);
    client.setID(2);
    client.writeRegister(MotorControlAddr, MotorSTOP);
    client.setID(3);
    client.writeRegister(MotorControlAddr, MotorSTOP);
}

function writeMotionFreq(ID, value) {
    if (value >= 6000) {
        value = 6000;
    }
    if (value <= -6000) {
        value = -6000;
    }

    client.setID(ID);
    client.writeRegister(MotorFreqAddr, value, function(err, data) {
        console.log(data.data);
    });

}

function writeMotionFreq(ID, value) {
    client.setID(ID);
    if (value >= 0) {
        client.writeRegister(MotorControlAddr, MotorFWD, function(err, data) {
            console.log(data.data);
        });
    } else {
        client.writeRegister(MotorFreqAddr, MotorREV, function(err, data) {
            console.log(data.data);
        });
    }

}



// function write() {
//     client.setID(1);

//     // write the values 0, 0xffff to registers starting at address 2000 
//     // on device number 1. 
//     client.writeRegisters(5, [0 , 0xffff])
//         .then(read);
// }

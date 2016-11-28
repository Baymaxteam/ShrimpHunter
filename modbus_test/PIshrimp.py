# FreqAddr 		2000H = 8192
# ControlAddr 	2001H = 8193

# Stop 			000001 – 0x01
# FWD direction	010010  - 0x12 - 18
# REV direction	100010  - 0x22 - 34
# Change			110010 - 0x32 - 50
# minimalmodbus -
# https://minimalmodbus.readthedocs.io/en/master/installation.html

#!/usr/bin/env python
import minimalmodbus
import serial
from time import sleep
import sys

# modbus address
MotorFreqAddr = 8193
MotorControlAddr = 8192

# control value
MotorSTOP = 1
MotorFWD = 18
MotorREV = 34

# Motor Control variable
CommendSTOP = 0
CommendFWD = 1
CommendREV = -1
# MotorFreq variable
CommendMotorFreq = 1500


def writeMotionFreq(DeviceID, value):
	# avoid to large freq
	if (value > 6000):
		value = 6000
	if (value < -6000):
		value = -6000

	if (value > 0):
		DeviceID.write_register(MotorFreqAddr, value, 0, 6)
		writeMotionControl(DeviceID, CommendFWD)
	else:
		DeviceID.write_register(MotorFreqAddr, -value, 0, 6)
		writeMotionControl(DeviceID, CommendREV)


def writeMotionControl(DeviceID, value):
	if(value == 1):
		DeviceID.write_register(MotorControlAddr, MotorFWD, 0, 6)
	elif (value == -1):
		DeviceID.write_register(MotorControlAddr, MotorREV, 0, 6)
	else:
		DeviceID.write_register(MotorControlAddr, MotorSTOP, 0, 6)


def StopMotor():
	instrument1.write_register(MotorControlAddr, MotorSTOP, 0, 6)
	sleep(0.1)  # Time in seconds.
	instrument2.write_register(MotorControlAddr, MotorSTOP, 0, 6)
	sleep(0.1)  # Time in seconds.
	instrument3.write_register(MotorControlAddr, MotorSTOP, 0, 6)
	sleep(0.1)  # Time in seconds.


def writeAllMotionFreq(value1, value2, value3):
	writeMotionFreq(instrument1, value1)
	sleep(0.1)  # Time in seconds.
	writeMotionFreq(instrument2, value2)
	sleep(0.1)  # Time in seconds.
	writeMotionFreq(instrument3, value3)
	sleep(0.1)  # Time in seconds.


########### init Modbus/RTU functon ###############
try:
	instrument1 = minimalmodbus.Instrument(
		'/dev/ttyUSB0', 1)  # port name (in decimal)
	instrument1.serial.baudrate = 9600  # Baud
	instrument1.serial.bytesize = 8
	instrument1.serial.parity = serial.PARITY_NONE
	instrument1.serial.stopbits = 2
	instrument1.serial.timeout = 1  # seconds
	instrument1.mode = minimalmodbus.MODE_RTU  # rtu or ascii mode

	instrument2 = minimalmodbus.Instrument(
		'/dev/ttyUSB0', 2)  # port name (in decimal)
	instrument2.serial.baudrate = 9600  # Baud
	instrument2.serial.bytesize = 8
	instrument2.serial.parity = serial.PARITY_NONE
	instrument2.serial.stopbits = 2
	instrument2.serial.timeout = 1  # seconds
	instrument2.mode = minimalmodbus.MODE_RTU  # rtu or ascii mode

	instrument3 = minimalmodbus.Instrument(
		'/dev/ttyUSB0', 3)  # port name (in decimal)
	instrument3.serial.baudrate = 9600  # Baud
	instrument3.serial.bytesize = 8
	instrument3.serial.parity = serial.PARITY_NONE
	instrument3.serial.stopbits = 2
	instrument3.serial.timeout = 1  # seconds
	instrument3.mode = minimalmodbus.MODE_RTU  # rtu or ascii mode
except ValueError:
	print("open com port error")


############### main function #############

print('Number of arguments:', len(sys.argv), 'arguments.')
print('Argument List:', str(sys.argv))
MotorSpeedCommend = sys.argv
MotorSpeedCommend.remove(MotorSpeedCommend[0])

try:
	for x in range(0, 3):
		val = float(MotorSpeedCommend[x])
except ValueError:
	print("That's not an float value!")

if (MotorSpeedCommend[0] is '0' and MotorSpeedCommend[1] is '0' and MotorSpeedCommend[2] is '0'):
	print("Stop Motor")
	try:
		StopMotor()
	except ValueError:
		print("StopMotor error")
	sleep(1)
else:
	print(MotorSpeedCommend)
	MotorCommend[0] = 0.5*MotorSpeedCommend[0]
	MotorCommend[1] = 0.5*MotorSpeedCommend[1] - 12.5
	MotorCommend[2] = 0.166*MotorSpeedCommend[2] - 1.45
	print("MotorSpeedCommend : " + str(MotorCommend))
	try:
		writeAllMotionFreq(float(MotorCommend[0]), float(MotorCommend[1]), float(MotorCommend[2]))
	except ValueError:
		print("MotorCommend error")
	sleep(1)

print("End program")



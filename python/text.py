from pymodbus.client.sync import ModbusSerialClient as ModbusClient
from pymodbus.exceptions import ModbusIOException
from pymodbus.mei_message import ReadDeviceInformationRequest
from pymodbus.constants import DeviceInformation
import traceback
import time
import requests
from signal import signal, SIGINT
from sys import exit
import json

isrunning = True

def getClient():
    return ModbusClient(
        method = "rtu",
        port = "/dev/tty.usbserial-AB0L19WE",
        #port = "/dev/ttyUSB0",
        baudrate = 115200,
        timeout = 1
    )
def signal_handler(sig, frame):
    global isrunning
    print("Ctrl + C pressed")
    isrunning = False


signal(SIGINT, signal_handler)
print("\n\nCheck for data")

client = getClient()
while isrunning:
    if client.connect():
        print("connect")

        result = client.read_input_registers(0x3100, 19, unit=1)
        if isinstance(result, Exception):
            print("Got exception reading 0x3100 - 0x3118")
            print(result)
        else:
            if result.function_code < 0x80:
                print(result.registers)
                time.sleep(5)
                try:
                    data = {'inputVoltage': result.registers[0]/100,
                            'inputAmpere': result.registers[1]/100,
                            'batteryVoltage': result.registers[4]/100,
                            'outputAmpere': result.registers[5]/100 -
                            result.registers[13]/100}
                    print(data)
                    response = requests.post('http://localhost:8080/api/data/add', json = data)
                except:
                    print("Bad Request")
            else:
                print("Unable to read 0x3100 - 0x3112")

        client.close()
    else:
        sleep(5)

"""
inputVoltage
inputAmpere
batteryVoltage
outputAmpere
"""
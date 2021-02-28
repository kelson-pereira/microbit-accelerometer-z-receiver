radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(4, 4)
    serial.writeValue("z", receivedNumber)
})
basic.showString("Z RECEIVER")
radio.setGroup(42)
serial.writeLine("Acceleration")

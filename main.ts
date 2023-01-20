let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
pins.servoWritePin(AnalogPin.P9, 0)
OLED.init(128, 64)
OLED.writeString("Temperature: ")
OLED.writeNumNewLine(input.temperature())
basic.forever(function () {
    if (input.lightLevel() < 40) {
        pins.servoWritePin(AnalogPin.P9, 180)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else {
        pins.servoWritePin(AnalogPin.P9, 0)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})

function Magenta () {
    pins.analogWritePin(AnalogPin.P0, 1020)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 255)
}
function Chocolate () {
    pins.analogWritePin(AnalogPin.P0, 840)
    pins.analogWritePin(AnalogPin.P1, 105)
    pins.analogWritePin(AnalogPin.P2, 30)
}
function Orange () {
    pins.analogWritePin(AnalogPin.P0, 1020)
    pins.analogWritePin(AnalogPin.P1, 100)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function Cyan () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 255)
    pins.analogWritePin(AnalogPin.P2, 255)
}
function Violet () {
    pins.analogWritePin(AnalogPin.P0, 592)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 211)
}
function Yellow () {
    pins.analogWritePin(AnalogPin.P0, 1020)
    pins.analogWritePin(AnalogPin.P1, 255)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function Black () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function Green () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 255)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function White () {
    pins.analogWritePin(AnalogPin.P0, 1020)
    pins.analogWritePin(AnalogPin.P1, 255)
    pins.analogWritePin(AnalogPin.P2, 255)
}
function Blue () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 255)
}
function Red () {
    pins.analogWritePin(AnalogPin.P0, 1020)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
}
basic.forever(function () {
    White()
    basic.pause(2000)
    Black()
    basic.pause(2000)
})

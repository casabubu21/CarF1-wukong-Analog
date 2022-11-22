radio.onReceivedValue(function (name, value) {
    if (name == "F") {
        speedM1 += 6
    } else if (name == "B") {
        speedM1 += -6
    } else if (name == "L") {
        angoloS0 += -10
    } else if (name == "R") {
        angoloS0 += 10
    } else if (name == "S") {
        speedM1 = 0
        wuKong.stopMotor(wuKong.MotorList.M1)
    } else if (name == "T") {
        speedM1 = 100
    }
    if (angoloS0 > 260) {
        angoloS0 = 260
    } else if (angoloS0 < 100) {
        angoloS0 = 100
    }
    if (speedM1 >= 100) {
        speedM1 = 100
    } else if (speedM1 <= -100) {
        speedM1 = -100
    }
    if (piopio == 0) {
        piopio = 1
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        piopio = 0
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angoloS0)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, speedM1)
    basic.pause(50)
})
let strip: neopixel.Strip = null
let piopio = 0
let speedM1 = 0
let angoloS0 = 0
let countRadio = 0
radio.setGroup(8)
wuKong.setLightMode(wuKong.LightMode.BREATH)
angoloS0 = 180
speedM1 = 0
piopio = 0
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angoloS0)
wuKong.stopMotor(wuKong.MotorList.M1)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.rgb(155, 10, 255))

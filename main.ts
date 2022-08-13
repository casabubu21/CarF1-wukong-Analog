radio.onReceivedValue(function (name, value) {
    if (name == "F") {
        speedM1 += -1
    } else if (name == "B") {
        speedM1 += 1
    } else if (name == "R") {
        angoloS0 += -2
    } else if (name == "L") {
        angoloS0 += 2
    }
    if (angoloS0 > 30) {
        angoloS0 = 30
    } else if (angoloS0 < -30) {
        angoloS0 = -30
    }
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angoloS0)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, speedM1)
    basic.pause(50)
})
let speedM1 = 0
let angoloS0 = 0
radio.setGroup(8)
wuKong.setLightMode(wuKong.LightMode.BREATH)
let countRadio = 0
angoloS0 = 0
speedM1 = 0
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angoloS0)
wuKong.stopMotor(wuKong.MotorList.M1)

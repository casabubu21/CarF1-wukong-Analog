radio.onReceivedValue(function (name, value) {
    if (name == "F") {
        angoloS0 += -5
    } else if (name == "B") {
        angoloS0 += 5
    } else if (name == "R") {
        speedM1 += -50
    } else if (name == "L") {
        speedM1 += 50
    }
    if (angoloS0 > 360) {
        angoloS0 = 360
    } else if (angoloS0 < 0) {
        angoloS0 = 0
    }
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angoloS0)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, speedM1)
    basic.pause(50)
    wuKong.stopMotor(wuKong.MotorList.M1)
    speedM1 = 0
})
let speedM1 = 0
let angoloS0 = 0
radio.setGroup(8)
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
wuKong.setLightMode(wuKong.LightMode.BREATH)
let countRadio = 0
angoloS0 = 0
speedM1 = 0
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angoloS0)
wuKong.stopMotor(wuKong.MotorList.M1)

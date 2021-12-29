radio.onReceivedValue(function (name, value) {
    if (name == "F") {
    	
    } else if (name == "B") {
    	
    } else if (name == "R") {
        angoloS0 += 5
    } else if (name == "L") {
        angoloS0 += -5
    }
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, angoloS0)
})
let angoloS0 = 0
radio.setGroup(8)
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 0)
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S1, 0)
wuKong.setLightMode(wuKong.LightMode.BREATH)
angoloS0 = 0

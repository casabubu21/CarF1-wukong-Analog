radio.onReceivedValue(function (name, value) {
    if (name == "F") {
    	
    } else if (name == "B") {
    	
    } else if (name == "R") {
        angoloS0 += 5
    } else if (name == "L") {
        angoloS0 += -5
    }
    if (angoloS0 > 360) {
        angoloS0 = 0
    }
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angoloS0)
    led.plotBarGraph(
    angoloS0,
    1000
    )
})
let angoloS0 = 0
radio.setGroup(8)
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 0)
wuKong.setLightMode(wuKong.LightMode.BREATH)
let countRadio = 0
angoloS0 = 0
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angoloS0)

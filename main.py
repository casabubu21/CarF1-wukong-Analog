def on_received_value(name, value):
    global angoloS0, speedM1
    if name == "F":
        angoloS0 += -5
    elif name == "B":
        angoloS0 += 5
    elif name == "R":
        speedM1 += -50
    elif name == "L":
        speedM1 += 50
    if angoloS0 > 360:
        angoloS0 = 360
    elif angoloS0 < 0:
        angoloS0 = 0
    wuKong.set_servo_angle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angoloS0)
    wuKong.set_motor_speed(wuKong.MotorList.M1, speedM1)
    basic.pause(50)
    wuKong.stop_motor(wuKong.MotorList.M1)
    speedM1 = 0
radio.on_received_value(on_received_value)

speedM1 = 0
angoloS0 = 0
radio.set_group(8)
wuKong.set_servo_angle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
wuKong.set_light_mode(wuKong.LightMode.BREATH)
countRadio = 0
angoloS0 = 0
speedM1 = 0
wuKong.set_servo_angle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angoloS0)
wuKong.stop_motor(wuKong.MotorList.M1)
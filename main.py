def on_received_value(name, value):
    global speedM1, angoloS0
    if name == "F":
        speedM1 += -6
    elif name == "B":
        speedM1 += 6
    elif name == "L":
        angoloS0 += -6
    elif name == "R":
        angoloS0 += 6
    elif name == "S":
        speedM1 = 0
        wuKong.stop_motor(wuKong.MotorList.M1)
    if angoloS0 > 210:
        angoloS0 = 210
    elif angoloS0 < 150:
        angoloS0 = 150
    if speedM1 >= 100:
        speedM1 = 100
    elif speedM1 <= -100:
        speedM1 = -100
    wuKong.set_servo_angle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angoloS0)
    wuKong.set_motor_speed(wuKong.MotorList.M1, speedM1)
    basic.pause(50)
radio.on_received_value(on_received_value)

speedM1 = 0
angoloS0 = 0
radio.set_group(8)
wuKong.set_light_mode(wuKong.LightMode.BREATH)
countRadio = 0
angoloS0 = 180
speedM1 = 0
wuKong.set_servo_angle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angoloS0)
wuKong.stop_motor(wuKong.MotorList.M1)
def on_received_value(name, value):
    global y_value, x_value
    if name.compare("mg_y") == 0:
        y_value = value
    if name.compare("mg_x") == 0:
        x_value = value
    y_value = y_value / 10
    x_value = x_value / 10
radio.on_received_value(on_received_value)

right_wheel = 0
left_wheel = 0
y_value = 0
x_value = 0
basic.show_icon(IconNames.HEART)
radio.set_group(1)
x_value = 0
y_value = 0

def on_forever():
    global left_wheel, right_wheel
    left_wheel = y_value + x_value
    right_wheel = y_value - x_value
    if left_wheel > 0:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, left_wheel)
    else:
        pass
basic.forever(on_forever)

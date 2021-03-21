radio.onReceivedValue(function (name, value) {
    if (name.compare("mg_y") == 0) {
        y_value = value
    }
    if (name.compare("mg_x") == 0) {
        x_value = value
    }
    y_value = y_value / 10
    x_value = x_value / 10
})
let right_wheel = 0
let left_wheel = 0
let y_value = 0
let x_value = 0
basic.showIcon(IconNames.Heart)
radio.setGroup(10)
x_value = 0
y_value = 0
basic.forever(function () {
    left_wheel = y_value + x_value
    right_wheel = y_value - x_value
    if (left_wheel > 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, left_wheel)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, Math.abs(left_wheel))
    }
    if (right_wheel > 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, right_wheel)
    } else {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Math.abs(right_wheel))
    }
})

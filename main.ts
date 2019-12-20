enum RadioMessage {
    message1 = 49434
}
function sit () {
    crickit.servo3.setAngle(low)
    crickit.servo4.setAngle(high)
    basic.pause(10 * delay)
    crickit.servo3.setAngle(mid)
    crickit.servo4.setAngle(mid)
    basic.pause(delay)
    action = 2
}
function right_step () {
    crickit.servo2.setAngle(low)
    crickit.servo4.setAngle(high)
    basic.pause(delay)
    crickit.servo1.setAngle(low)
    crickit.servo3.setAngle(high)
    basic.pause(delay)
    crickit.servo2.setAngle(mid)
    crickit.servo4.setAngle(mid)
    basic.pause(delay)
    crickit.servo1.setAngle(mid)
    crickit.servo3.setAngle(mid)
    basic.pause(delay)
}
function left_turn () {
    crickit.servo2.setAngle(low)
    crickit.servo4.setAngle(low)
    basic.pause(delay)
    crickit.servo1.setAngle(high)
    crickit.servo3.setAngle(high)
    basic.pause(delay)
    crickit.servo2.setAngle(mid)
    crickit.servo4.setAngle(mid)
    basic.pause(delay)
    crickit.servo1.setAngle(mid)
    crickit.servo3.setAngle(mid)
    basic.pause(delay)
    action = 2
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "left") {
        action = -1
    } else if (receivedString == "sit") {
        action = 0
    } else if (receivedString == "right") {
        action = 1
    } else {
        action = 2
    }
})
function right_turn () {
    crickit.servo1.setAngle(high)
    crickit.servo3.setAngle(high)
    basic.pause(delay)
    crickit.servo2.setAngle(low)
    crickit.servo4.setAngle(low)
    basic.pause(delay)
    crickit.servo1.setAngle(mid)
    crickit.servo3.setAngle(mid)
    basic.pause(delay)
    crickit.servo2.setAngle(mid)
    crickit.servo4.setAngle(mid)
    basic.pause(delay)
    action = 2
}
input.onButtonPressed(Button.B, function () {
    go = 0
})
function left_step () {
    crickit.servo1.setAngle(high)
    crickit.servo3.setAngle(low)
    basic.pause(delay)
    crickit.servo2.setAngle(high)
    crickit.servo4.setAngle(low)
    basic.pause(delay)
    crickit.servo1.setAngle(mid)
    crickit.servo3.setAngle(mid)
    basic.pause(delay)
    crickit.servo2.setAngle(mid)
    crickit.servo4.setAngle(mid)
    basic.pause(delay)
}
input.onButtonPressed(Button.A, function () {
    go = 1
})
let action = 0
let delay = 0
let mid = 0
let high = 0
let low = 0
let go = 0
radio.setGroup(1)
go = 0
low = 160
high = 20
mid = 90
delay = 300
action = 0
crickit.servo1.setAngle(mid)
crickit.servo2.setAngle(mid)
crickit.servo3.setAngle(mid)
crickit.servo4.setAngle(mid)
basic.forever(function () {
    if (1 == go) {
        if (-1 == action) {
            left_turn()
        } else if (0 == action) {
            sit()
        } else if (1 == action) {
            right_turn()
        } else {
            left_step()
            right_step()
        }
    }
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . # . .
        `)
    crickit.setPixelColor(0xffff00)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . # . .
        . # # # .
        `)
    crickit.setPixelColor(0xff0000)
})

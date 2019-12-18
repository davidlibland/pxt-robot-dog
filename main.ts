enum RadioMessage {
    message1 = 49434
}
function step3 () {
    crickit.servo3.setAngle(low)
    basic.pause(delay)
    crickit.servo3.setAngle(high)
    basic.pause(delay)
    crickit.servo3.setAngle(mid)
    basic.pause(delay)
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
function step4 () {
    crickit.servo4.setAngle(high)
    basic.pause(delay)
    crickit.servo4.setAngle(low)
    basic.pause(delay)
    crickit.servo4.setAngle(mid)
    basic.pause(delay)
}
input.onButtonPressed(Button.B, function () {
    go = 0
})
function step1 () {
    crickit.servo1.setAngle(high)
    basic.pause(delay)
    crickit.servo1.setAngle(low)
    basic.pause(delay)
    crickit.servo1.setAngle(mid)
    basic.pause(delay)
}
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
function step2 () {
    crickit.servo2.setAngle(low)
    basic.pause(delay)
    crickit.servo2.setAngle(high)
    basic.pause(delay)
    crickit.servo2.setAngle(mid)
    basic.pause(delay)
}
input.onButtonPressed(Button.A, function () {
    go = 1
})
let delay = 0
let mid = 0
let high = 0
let low = 0
let go = 0
go = 0
low = 160
high = 20
mid = 90
delay = 300
crickit.servo1.setAngle(mid)
crickit.servo2.setAngle(mid)
crickit.servo3.setAngle(mid)
crickit.servo4.setAngle(mid)
basic.forever(function () {
    if (1 == go) {
        left_step()
        right_step()
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
    basic.pause(100)
    crickit.setPixelColor(0xff0000)
})

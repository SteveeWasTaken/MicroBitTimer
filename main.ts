function loading () {
    basic.showLeds(`
        . # # # .
        . . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # . .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # . # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . . # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        . . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . . #
        # . . . #
        . # # # .
        `)
}
input.onButtonPressed(Button.A, function () {
    if (index == indexVal) {
        if (!(time == 1)) {
            time = time - 1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (index == indexVal) {
        time = time + 1
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    logoPress = 1
    index = time
    basic.showIcon(IconNames.Yes)
})
let logoPress = 0
let indexVal = 0
let index = 0
let time = 0
for (let index2 = 0; index2 < randint(1, 2); index2++) {
    loading()
}
time = 1
index = indexVal
indexVal = 0
basic.forever(function () {
    if (logoPress == 1) {
        if (!(index == 0)) {
            basic.showNumber(index)
            index = index - 1
            basic.pause(60000)
        } else {
            logoPress = 0
            time = 1
            basic.showNumber(0)
            music.playMelody("C C G G A A G - ", 150)
            music.playMelody("F F E E D D C - ", 150)
            basic.showNumber(time)
        }
    } else {
        basic.showNumber(time)
    }
})

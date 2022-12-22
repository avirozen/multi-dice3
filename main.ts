radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (win != 3) {
        if (receivedNumber < dice) {
            basic.showIcon(IconNames.Happy)
            win += 1
        } else if (receivedNumber > dice) {
            basic.showIcon(IconNames.Sad)
        } else {
            basic.showIcon(IconNames.Asleep)
            win += 1
        }
    } else {
        basic.showString("U WON")
        radio.sendString("U LOST")
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    dice = randint(1, 6)
    basic.showNumber(dice)
    radio.sendNumber(dice)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
let dice = 0
let win = 0
radio.setGroup(1)
win = 0

let obstacle = 0
basic.showIcon(IconNames.Ghost)
basic.pause(5000)
basic.forever(function () {
    obstacle = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (obstacle < 5) {
        cuteBot.stopcar()
    } else {
        cuteBot.forward()
    }
})

let obstacle = 0
basic.showIcon(IconNames.Ghost)
basic.pause(5000)
basic.forever(function () {
    obstacle = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (obstacle < 15) {
        cuteBot.stopcar()
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    } else {
        cuteBot.forward()
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
    }
})

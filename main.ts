radio.onReceivedString(function (receivedString) {
    if (receivedString == "Temperature?") {
        radio.sendNumber(input.temperature())
    }
    if (receivedString == "Light?") {
        radio.sendNumber(input.lightLevel())
    }
})
radio.setGroup(1)

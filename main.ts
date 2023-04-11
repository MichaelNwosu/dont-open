input.onButtonPressed(Button.A, function () {
    if (start == 0) {
        if (input.lightLevel() > 88) {
            music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        }
    }
})
let start = 0
start = 0

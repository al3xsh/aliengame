input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let obstacle: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let speed = 500
basic.forever(function () {
    basic.pause(randint(3000, 6000))
    obstacle = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(speed)
        obstacle.change(LedSpriteProperty.Y, 1)
    }
    if (player.isTouching(obstacle)) {
        game.gameOver()
    }
    basic.pause(200)
    game.addScore(1)
    obstacle.delete()
    if (game.score() == 2) {
        speed += -100
    } else if (game.score() == 4) {
        speed += -100
    } else if (game.score() == 6) {
        speed += -50
    } else if (game.score() == 8) {
        speed += -50
    } else if (game.score() % 5 == 0 && game.score() >= 50) {
        speed += -10
    }
})

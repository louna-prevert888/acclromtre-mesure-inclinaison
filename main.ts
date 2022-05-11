basic.forever(function () {
    if (input.acceleration(Dimension.Y) < 200) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        if (input.acceleration(Dimension.Y) > 200) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        } else {
            if (input.acceleration(Dimension.X) < -200) {
                basic.showLeds(`
                    . . # . .
                    . . . # .
                    # # # # #
                    . . . # .
                    . . # . .
                    `)
            } else {
                if (input.acceleration(Dimension.X) > 200) {
                    basic.showLeds(`
                        . . # . .
                        . # . . .
                        # # # # #
                        . # . . .
                        . . # . .
                        `)
                } else {
                    if (input.acceleration(Dimension.X) == 0) {
                        basic.showIcon(IconNames.Yes)
                    } else {
                        if (input.acceleration(Dimension.Y) == 0) {
                            basic.showIcon(IconNames.Yes)
                        }
                    }
                }
            }
        }
    }
})

basic.forever(function () {
    if (input.isGesture(Gesture.LogoDown)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        if (input.isGesture(Gesture.LogoUp)) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        } else {
            if (input.isGesture(Gesture.TiltRight)) {
                basic.showLeds(`
                    . . # . .
                    . . . # .
                    # # # # #
                    . . . # .
                    . . # . .
                    `)
            } else {
                if (input.isGesture(Gesture.TiltLeft)) {
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

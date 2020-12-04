namespace SpriteKind {
    export const object = SpriteKind.create()
}
let Jack = sprites.create(img`
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ....................2222..........................
    .................2.222222.........................
    ..................2222222.........................
    .................2.dddd8d.........................
    ...................dddddd.........................
    ...................ddd444.........................
    ............8888...444444.........................
    ...........888888...4444..........................
    ...........8..8888...ddd..........................
    ...............88888.ddd..........................
    ................8888888888........................
    ................888886688888......................
    ................888866668888......................
    .................888666688888.....................
    ..................88666688888.....................
    ..................88666888888.....................
    ..................88666888888.....................
    ..................88666888888.....................
    ..................88666888888.....................
    ..................88666888888.....................
    ..................88666888888.....................
    ..................88666888888.....................
    ..................88666888888.....................
    ..................88d6d888888.....................
    ..................88ddd888888.....................
    ..................8dddd888888.....................
    .................88dddd888888ee...................
    .................888ddd88888e..e..................
    .................88888888111eeee..................
    ........1........88111111111eeee..................
    ........1111111111111111116.......................
    .........11111111118888.666.......................
    ..........1111.8888886..666.......................
    ..............88888666..666.......................
    ..............888..666..666.......................
    ..............888..666..666.......................
    .............888...666..666.......................
    .............888...666..666.......................
    ............888....666..666.......................
    ............888....666..666.......................
    ............88.....666..666.......................
    ............8......666..eee.......................
    ...................666..eee.......................
    ...................eee..eee.......................
    ...................eee..eee.......................
    ...................eee..eeeeeeee..................
    ...................eee..eeeeeeeee.................
    ...................eee..eee.ee.ee.................
    ...................eeeeeeee.......................
    ...................eeeeeeeee......................
    ...................eee.ee.ee......................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
scene.cameraFollowSprite(Jack)
controller.moveSprite(Jack)
Jack.ay = 350
game.onUpdate(function () {
    if (Jack.vx == 0) {
        animation.runImageAnimation(
        Jack,
        [img`
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ......................2222........................
            ...................2.222222.......................
            ....................2222222.......................
            ...................2.dddd8d.......................
            .....................dddddd.......................
            .....................ddd444.......................
            ..............8888...444444.......................
            .............888888...4444........................
            .............8..8888...ddd........................
            .................88888.ddd........................
            ..................8888888888......................
            ..................888886688888....................
            ..................888866668888....................
            ...................888666688888...................
            ....................88666688888...................
            ....................88666888888...................
            ....................88666888888...................
            ....................88666888888...................
            ....................88666888888...................
            ....................88666888888...................
            ....................88666888888...................
            ....................88666888888...................
            ....................88666888888...................
            ....................88d6d888888...................
            ....................88ddd888888...................
            ....................8dddd888888...................
            ...................88dddd888888ee.................
            ...................888ddd88888e..e................
            ...................88888888111eeee................
            ..........1........88111111111eeee................
            ..........1111111111111111116.....................
            ...........11111111118888.666.....................
            ............1111.8888886..666.....................
            ................88888666..666.....................
            ................888..666..666.....................
            ................888..666..666.....................
            ...............888...666..666.....................
            ...............888...666..666.....................
            ..............888....666..666.....................
            ..............888....666..666.....................
            ..............88.....666..666.....................
            ..............8......666..eee.....................
            .....................666..eee.....................
            .....................eee..eee.....................
            .....................eee..eee.....................
            .....................eee..eeeeeeee................
            .....................eee..eeeeeeeee...............
            .....................eee..eee.ee.ee...............
            .....................eeeeeeee.....................
            .....................eeeeeeeee....................
            .....................eee.ee.ee....................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            `,img`
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ......................2222........................
            ...................2.222222.......................
            ....................2222222.......................
            ...................2.dddd8d.......................
            .....................dddddd.......................
            .....................ddd444.......................
            ..............8888...444444.......................
            .............888888...4444........................
            .............8..8888...ddd........................
            .................88888.ddd........................
            ..................8888888888......................
            ..................888886688888....................
            ..................888866668888....................
            ...................886666688888...................
            ....................86666688888...................
            ....................66666888888...................
            ....................66668888888...................
            ...................666688888888...................
            ...................666668888888...................
            ....................66666888888...................
            ....................86666d88888...................
            ....................8866ddd8888...................
            ....................888ddddd888...................
            ....................8888dddd888...................
            ....................8888dd88888...................
            ...................888888888888ee.................
            ...................88888888888e..e................
            ...................88888888111eeee................
            ..........1........88111111111eeee................
            ..........11111111111111111166....................
            ...........111111111188886.6666...................
            ............1111.888888666..6666..................
            .................88888.666..6666..................
            .................888...666...6666.................
            .................888...666...6666.................
            ................888....666....6666................
            ................888....666....6666................
            ...............888.....666.....6666...............
            ...............888.....666.....6666...............
            ...............88......666......6666..............
            ...............8.......666......6666..............
            .......................666......666...............
            ......................666.......666...............
            .....................e666.......666...............
            ....................eee6........eee...............
            ...................eeeee........eee...............
            ..................eeeee.........eee...............
            ..................eeeeee........eee...............
            ..................eeeeeee.......eeeeeee...........
            ....................ee.ee.......eeeeeeee..........
            ................................ee.ee.ee..........
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            `,img`
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            .......................2222.......................
            ....................2.222222......................
            .....................2222222......................
            ....................2.dddd8d......................
            ......................dddddd......................
            ......................ddd444......................
            ...............8888...444444......................
            ..............888888...4444.......................
            ..............8..8888...ddd.......................
            ..................88888.ddd.......................
            ...................8888888888.....................
            ...................888886688888...................
            ...................888866668888...................
            ....................888666688888..................
            .....................88666688888..................
            .....................88666888888..................
            .....................88666888888..................
            .....................88666888888..................
            .....................88666888888..................
            .....................88666666ddddd................
            .....................888666666dddd................
            .....................88886666dddd.................
            .....................8888888888dd.................
            .....................88888888888..................
            .....................88888888888..................
            ....................888888888888ee................
            ....................88888888888e..e...............
            ....................88888888111eeee...............
            ...........1........88111111111eeee...............
            ...........1111111111111111116....................
            ............11111111118888.6666...................
            .............1111.8888886...6666..................
            .................88888666....6666.................
            .................888..666.....6666................
            .................888..666......6666...............
            ................888...666.......6666..............
            ................888...666........6666.............
            ...............888....666.........6666............
            ...............888....666..........6666...........
            ...............88.....666...........666...........
            ...............8.....6666...........6666..........
            ....................6666.............666..........
            ...................6666..............6666.........
            ..................6666................666.........
            .................e666.................eee.........
            ................eee6..................eee.........
            ...............eeee...................eee.........
            ..............eeee....................eee.........
            .............eeee.....................eeeeeee.....
            .............eeee.....................eeeeeeee....
            ..............eeee....................ee.ee.ee....
            ..............eeeee...............................
            ...............eeee...............................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            `,img`
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            .......................2222.......................
            ....................2.222222......................
            .....................2222222......................
            ....................2.dddd8d......................
            ......................dddddd......................
            ......................ddd444......................
            ...............8888...444444......................
            ..............888888...4444.......................
            ..............8..8888...ddd.......................
            ..................88888.ddd.......................
            ...................8888888888.....................
            ...................888886688888...................
            ...................888866668888...................
            ....................888666688888..................
            .....................88666688888..................
            .....................88666888888..................
            .....................88666888888..................
            .....................88666888888..................
            .....................88666888888..................
            .....................88666666ddddd................
            .....................888666666dddd................
            .....................88886666dddd.................
            .....................8888888888dd.................
            .....................88888888888..................
            .....................88888888888..................
            ....................888888888888ee................
            ....................88888888888e..e...............
            ....................88888888111eeee...............
            ...........1........88111111111eeee...............
            ...........111111111111111111.....................
            ............11111111118888666.....................
            .............1111.8888886..666....................
            .................88888666..666....................
            .................888..666...666...................
            .................888..666...666...................
            ................888...666....666..................
            ................888...666....666..................
            ...............888....666.....666.................
            ...............888....666.....666.................
            ...............88.....666......666................
            ...............8......666......666................
            .....................666.......666................
            .....................666.......666................
            ....................666........666................
            ....................666........eee................
            ...................666.........eee................
            ...................eee.........eee................
            ...................eee.........eee................
            ...................eee.........eeeeee.............
            ...................eee.........eeeeeee............
            ...................eee.........ee.ee.e............
            ...................eeeeee.........................
            ...................eeeeeee........................
            ...................ee.ee.e........................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            `,img`
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ......................2222........................
            ...................2.222222.......................
            ....................2222222.......................
            ...................2.dddd8d.......................
            .....................dddddd.......................
            .....................ddd444.......................
            ..............8888...444444.......................
            .............888888...4444........................
            .............8..8888...ddd........................
            .................88888.ddd........................
            ..................8888888888......................
            ..................888886688888....................
            ..................888866668888....................
            ...................888666688888...................
            ....................88666688888...................
            ....................88666888888...................
            ....................88666888888...................
            ....................88666888888...................
            ....................88666888888...................
            ....................88666888888...................
            ....................88666888888...................
            ....................88666888888...................
            ....................88666888888...................
            ....................88d6d888888...................
            ....................88ddd888888...................
            ....................8dddd888888...................
            ...................88dddd888888ee.................
            ...................888ddd88888e..e................
            ...................88888888111eeee................
            ..........1........88111111111eeee................
            ..........1111111111111111116.....................
            ...........11111111118888.666.....................
            ............1111.8888886..666.....................
            ................88888666..666.....................
            ................888..666..666.....................
            ................888..666..666.....................
            ...............888...666..666.....................
            ...............888...666..666.....................
            ..............888....666..666.....................
            ..............888....666..666.....................
            ..............88.....666..666.....................
            ..............8......666..eee.....................
            .....................666..eee.....................
            .....................eee..eee.....................
            .....................eee..eee.....................
            .....................eee..eeeeeeee................
            .....................eee..eeeeeeeee...............
            .....................eee..eee.ee.ee...............
            .....................eeeeeeee.....................
            .....................eeeeeeeee....................
            .....................eee.ee.ee....................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            `],
        200,
        true
        )
    }
})

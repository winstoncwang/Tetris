# Tetris

This project is solely focused on the creation of classic Tetris game, this is my first game development project. I'm very excited to see how this will improve my JS skills as a developer.

-------------------------------------------------

1.1

    project initial setup
 
-------------------------------------------------

1.2

    add game loop and overall game setup, added css file
 
-------------------------------------------------

1.21

    refactoring of tetrominos
 
-------------------------------------------------

1.3

    drawn canvas, run sequence, defined boundary and deltatime to solve
    dynamic frame rate problem

-------------------------------------------------

1.4

    implemented a 5 bag flood/drought prevented algorithm
    refractored codes to a super class
 
-------------------------------------------------

1.41

    setcurrent/next piece, direction for selecting the right block
 
-------------------------------------------------

1.5

    draw current block and randomBlock returns all the param necesary for drawing
     
-------------------------------------------------

1.6

    keyCode case added on settingjs, trying to implement movement
 
-------------------------------------------------

1.61

    adding event queue for recording user input
 
-------------------------------------------------

1.7

    refractor eachPiece(), handler and keyQueue for assigning tasks in evQueue
    up/down/left/right movement
 
-------------------------------------------------

1.71

    attempt to implement valid space logic so the pieces can fit
     
-------------------------------------------------

1.8

    boundary condition set to prevent block from going to invalid spaces
     
-------------------------------------------------

1.9

    added pieceArr for tracking the pieces that should display on canvas
     
-------------------------------------------------

1.91

    implement the drawing of the whole pieceArr to prevent refreshiing every frame refresh
     
-------------------------------------------------

2.1

    scan row after each drop to check for a complete lane, remove lane and reassign block type
     
-------------------------------------------------

2.2

    add rotation to the pieces
     
-------------------------------------------------

2.3

    add space to start, refractor and eachPixel param changed
     
-------------------------------------------------

2.4

    next piece canvas drawn and centered using padding
     
-------------------------------------------------

2.5

    make the movement of first piece more smooth
     
-------------------------------------------------

2.6

    game reset mode, check for the last move
     
-------------------------------------------------

2.61

    adding node init and reorganise src files
     
-------------------------------------------------

2.7

    setup webpack, config files, npm setup and import/export
     
-------------------------------------------------

2.8

    config file with css style loader and plugin for arrow function and class properties
     
-------------------------------------------------

2.81

    implement semantic ui and fix css responsive display
     
-------------------------------------------------

2.9

    add button handler, rerender canvas on resize
     
-------------------------------------------------

3.1

    refractoring drawing and tetromino random block logic
     
-------------------------------------------------

3.2

    eventQueue refractored to handle user input
     
-------------------------------------------------

3.3

    refractor lastRow to check and remove lastLine
     
-------------------------------------------------

3.4

    refractor drawing module to a drawer class, config file include well size
     
-------------------------------------------------

3.5

    fixed bug where blocks lock when rotating close to the wall, updated display scaling
     
-------------------------------------------------

3.51

    naming convention
     
-------------------------------------------------

3.6

    score count class
     
-------------------------------------------------

3.61

    fix score not displayed smoothly when row eliminated
     
-------------------------------------------------

3.7

    more efficient score display and fixed bug with scorecount naming in reset section
     
-------------------------------------------------

3.8

    adding in stage level for different speed and game over notice popup
     
-------------------------------------------------

4.1

    error within index.js when deploying from netlify
     
-------------------------------------------------

4.2

    file dependency naming error corrected before deployment
     
-------------------------------------------------
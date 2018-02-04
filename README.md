
# Lebowski Lanes

## Description

This is a 'Big Lebowski' themed JavaScript web app that calculates the scores of a bowling game for one player. See more about my [design process](#design-process)


## Setup

Clone the repo on the command line by running

`git clone git@github.com:ewintram/bowling-challenge.git`


## Usage

To launch the app, open 'bowling.html' in the browser.

![alt text](public/images/lebowski-lanes-screenshot.png "Gameplay screenshot")


## Running tests

Testing is in Jasmine. To run the tests, open 'SpecRunner.html' in the browser.


## Author

Eleanor Wintram


## Design process

*CRC cards*

![alt text](public/images/bowling-oop.png "CRC cards")

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Scoring

**Strikes**

The player has a strike if they knock down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

**Spares**

The player has a spare if they knock down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

**10th frame**

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus, not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

**Gutter Game**

A Gutter Game is when the player never hits a pin (20 zero scores).

**Perfect Game**

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

![alt text](public/images/example_ten_pin_scoring.png "Example scoring")

### Still to do

* Update JQuery for showing frame running total accurately.
* Update bonus functionality to use 'requires bonus'/'received bonus' statuses.
* Update HTML to loop through table creation.
* Add strike and spare gifs.
* Set up [Travis CI](https://travis-ci.org) to run tests.
* Add [ESLint](http://eslint.org/) to the codebase.

# Thomas-Agocci
#### _Tamagochi-like app made with jQuery_

#### By _**Sam Gespass and Zach Evans**_

## Description

_This app is a Tamagotchi clone, but instead of a Tamagochi, it's an old man named Thomas Agocci. There are a lot of different things to keep track of to keep him alive. How long can you do it?_

## Specs

| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| It should have random levels of sleep, poop and pee, food, mood, temperature, and intellectual stimulation if name is "Random Thomas Agocci" | "random Thomas Agocci" | List of definitions for bear (currently only has dummy data) |
| It should have levels equal to 15 if name is "Normal Thomas Agocci | Normal Thomas Agocci | Levels start at 15 |
| It should have a food level of 8 if name is "Big Thomas Agocci" | Big Thomas Agocci | Food level starts at 8 |
| It should have favorite foods if he's big | Big Thomas Agocci | Has favorite foods |
| It should have a mood level of 8 if he's grumpy | Grumpy Thomas Agocci | Mood level starts at 8 |
| It should have least favorite foods if he's grumpy | Grumpy Thomas Agocci | Has least favorite foods |
| It should have an intellectual stimulation level of 8 if he's geeky | Geeky Thomas Agocci | Intellectual stimulation starts at 8 |
| It should have a sleep level of 5 if he's sleepy | Sleepy Thomas Agocci | Sleep level starts at 5 |
| It should decrement or change levels after 2000 milliseconds on easy mode | Easy Mode | Levels change after 2000 milliseconds |
| It should decrement or change levels after 1000 milliseconds on medium mode | Medium Mode | Levels change after 1000 milliseconds |
| It should decrement or change level after 500 milliseconds on hard mode | Hard Mode | Levels change after 500 milliseconds |
| It should be game over if levels go below 0 | Any level below 0 | Game Over |
| It should add 25 to food level and subtract 5 from poop and pee level after eating a favorite food | Eat food | +25 food, -5 poop and pee |
| It should add 15 to food level and subtract 5 from poop and pee level after eating normal food | Eat food | +15 food, -5 poop and pee |
| It should add 5 to food level and subtract 5 from poop and pee level and 10 from mood level after eating a least favorite food | Eat food | +5 food, -5 poop and pee, -10 mood |
| It should add 15 to poop and pee level after going to the bathroom | Go to bathroom | +15 poop and pee |
| It should add 15 to sleep level after being put to bed | Put to bed | +15 sleep |
| It should increment ac when it's turned on | Turn on ac | Temperature -1 |
| It should increment temperature when heat is turned on | Turn on heat | Temperature +1 |
| It should add 15 to mood after a shot of grappa and change other levels if mood is above 40 | Take a shot of grappa | Mood +15, poop and pee and sleep change randomly |
| It should add 15 to intellectual stimulation after playing chess | Play chess | Intellectual Stimulation +15 |
| It should add 25 to intellectual stimulation and subtract 5 from mood after arguing about politics | Argue about politics | Intellectual stimulation +25, mood -5 |

## Setup/Installation Requirements

* Click on the following [link](https://github.com/darthtoad/Interplanetary-Age-Calculator) to download the Interplanetary Age Calculator
* Go to the directory you downloaded the Interplanetary Age Calculator in the terminal
* Run npm install in the terminal
* Run bower install in the terminal
* Run gulp build in the terminal
* Finally, run gulp serve in the terminal. A browser window should open in localhost:3000.

## Known Bugs

_There are no known bugs. If you find any, please [message](mailto:darth.toad@gmail.com) me._

## Technologies Used

* _Javascript_
* _CSS_
* _HTML_
* _Atom_
* _Bower_
* _Git_
* _GitHub_
* _jQuery_

_This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0._

### License

Copyright (c) 2017 ****_Sam Gespass_****

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

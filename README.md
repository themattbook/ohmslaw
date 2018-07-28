# ohmslaw
A basic Javascript calculator for general EIRP discovery using Ohm's law.

## Setup
Create 4 html text inputs. Set their ID's accordingly:
* voltage
* current
* resistance
* power

This will allow `ohmslawcalculator.js` to grab the value of each text input and make the necessary calculations. I use a button to call the `ohmsCalc()` function and display results.

## Results
Both the form and the console will display output based on values given. If no results appear, check the console for information. A pre-run validation method runs to ensure the fields are not left entirely blank before proceeding.

/* 
Title: Ohm's Law Calculator
Author: Matthew Sweet, KE0IMD
Contact: ke0imd@gmail.com
Description: Probably the most inefficient means of calculating
Ohm's law values using Javascript. Far from perfect.
License: GNU General Public License 2.0
https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
*/

function ohmsCalc() {
    /* 
    Since the structure of Ohm's Law calculations only
    require two values to proceed, this script will only check
    for two values and calculate the remaining two.
    */

    // Declare our 4 inputs
    var volts = document.getElementById('voltage');
    var current = document.getElementById('current');
    var resistance = document.getElementById('resistance');
    var power = document.getElementById('power');

    // Validation check
    if (volts.value == "" & current.value == "" & resistance.value == "" & power.value == "") {
        console.log("Error: Please provide two values.");
    }

    // If only Power and Resistance are supplied, calculate Voltage and Current
    if (volts.value == "" & current.value == "") {
        var r = parseFloat(resistance.value);
        var p = parseFloat(power.value);

        // Calculate Voltage and display result
        calcVolts = Math.sqrt(r * p);
        volts.value = calcVolts;

        // Calculate Current and display result
        calcCurrent = Math.sqrt(p / r);
        current.value = calcCurrent;

        // Log to Console
        console.log("**********\nResults based on given values for R and P\n**********\n" +
            "Voltage: " + calcVolts + "V\n" + "Current: " + calcCurrent + "A\n" + "Resistance: " +
            r + "Ω\n" + "Power: " + p + "W\n");
    }

    // If only Power and Current are supplied, calculate Voltage and Resistance
    else if (volts.value == "" & resistance.value == "") {
        var i = parseFloat(current.value);
        var p = parseFloat(power.value);

        // Calculate Voltage and display result
        calcVolts = p / i;
        volts.value = calcVolts;

        // Calculate Resistance and display result
        i2 = i * i;
        calcResistance = p / i2;
        resistance.value = Math.round(calcResistance);

        // Log to Console
        console.log("**********\nResults based on given values for I and P\n**********\n" +
            "Voltage: " + calcVolts + "V\n" + "Current: " + i + "A\n" + "Resistance: " +
            Math.round(calcResistance) + "Ω\n" + "Power: " + p + "W\n");
    }

    // If only Power and Voltage are supplied, calculate Current and Resistance
    else if (current.value == "" & resistance.value == "") {
        var e = parseFloat(volts.value);
        var p = parseFloat(power.value);

        // Calculate Current and display result
        calcCurrent = p / e;
        current.value = calcCurrent;

        // Calculate Resistance and display result
        e2 = e * e;
        calcResistance = e2 / p;
        resistance.value = Math.round(calcResistance);

        // Log to Console
        console.log("**********\nResults based on given values for E and P\n**********\n" +
            "Voltage: " + e + "V\n" + "Current: " + calcCurrent + "A\n" + "Resistance: " +
            calcResistance + "Ω\n" + "Power: " + p + "W\n");
    }

    // If only Voltage and Resistance are supplied, calculate Current and Power
    else if (current.value == "" & power.value == "") {
        var e = parseFloat(volts.value);
        var r = parseFloat(resistance.value);

        // Calculate Current and display result
        calcCurrent = e / r;
        current.value = calcCurrent;

        // Calculate Power and display result
        e2 = e * e;
        calcPower = e2 / r;
        power.value = calcPower;

        // Log to Console
        console.log("**********\nResults based on given values for E and R\n**********\n" +
            "Voltage: " + e + "V\n" + "Current: " + calcCurrent + "A\n" + "Resistance: " +
            r + "Ω\n" + "Power: " + calcPower + "W\n");
    }

    // If only Voltage and Current are supplied, calculate Resistance and Power
    else if (resistance.value == "" & power.value == "") {
        var e = parseFloat(volts.value);
        var i = parseFloat(current.value);

        // Calculate Resistance and display result
        calcResistance = e / i;
        resistance.value = calcResistance;

        // Calculate Power and display result
        calcPower = e * i;
        power.value = calcPower;

        // Log to Console
        console.log("**********\nResults based on given values for E and I\n**********\n" +
            "Voltage: " + e + "V\n" + "Current: " + i + "A\n" + "Resistance: " +
            calcResistance + "Ω\n" + "Power: " + calcPower + "W\n");
    }

    // If only Resistance and Current are supplied, calculate Voltage and Power
    else if (volts.value == "" & power.value == "") {
        var r = parseFloat(resistance.value);
        var i = parseFloat(current.value);

        // Calculate Voltage and display result
        calcVolts = r * i;
        volts.value = calcVolts;

        // Calculate Power and display result
        i2 = i * i;
        calcPower = r * i2;
        power.value = calcPower;

        // Log to Console
        console.log("**********\nResults based on given values for R and I\n**********\n" +
            "Voltage: " + calcVolts + "V\n" + "Current: " + i + "A\n" + "Resistance: " +
            r + "Ω\n" + "Power: " + calcPower + "W\n");
    }
}

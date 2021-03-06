/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click", function() {

    let number = parseFloat(document.getElementById('number').value);
    if (Number.isInteger(number)) {
        if (number < 0) {
            alert('Please enter positive integer.');
        } else if (number == 0) {
            alert('Factorial of 0 is 1.');
        } else {
            let result = number;
            for (let i = number - 1; i >= 1; i--) {
                result = result * i;
            }
            alert(`Factorial of ${number} is ${result}.`);
        }
    } else {
        alert('Please enter positive integer.');
    }
})();
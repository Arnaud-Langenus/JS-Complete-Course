/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function calc(i) {
    let n1 = parseFloat(document.getElementById("op-one").value);
    let n2 = parseFloat(document.getElementById("op-two").value);

    switch(i) {
        case 0:
            return n1 + n2;
        case 1:
            return n1 - n2;
        case 2:
            return n1 * n2;
        case 3:
            return n1 / n2;
    }
}

(function() {
    const operators = document.getElementsByClassName('operator');
    for (let i=0; i < operators.length; i++){
        operators[i].addEventListener('click', function(){
            alert(calc(i));
        })
    }
})();

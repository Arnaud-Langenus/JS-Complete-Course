/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const input = document.getElementById('pass-one');
    const validity = document.getElementById('validity');
    input.addEventListener('keyup', ()=> {

        let string = input.value;
        let stringsAsArray = string.split('');
        if (stringsAsArray.length < 8) {
            validity.innerHTML = 'Not OK';
        }else {
            let parseArray = stringsAsArray.map(item => parseInt(item));
            console.log(parseArray);
            let numbers = parseArray.filter(item => Number.isInteger(item)):
            if (numbers.length >= 2) {
                validity.innerHTML = 'OK';
            } else {
                validity.innerHTML = 'Not OK';
            }
        }
    })

})();

/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById('target').innerHTML = `<table><tbody id='tbody'></tbody></table>`;
    let tbody = document.getElementById('tbody');
    let rowNum = 10;
    let colNum = 1;

    for (let i=0; i<rowNum; i++) {
        let row = tbody.insertRow();
        for (let j=0; j<colNum; j++) {
            let cell = row.insertCell();
            cell.innerHTML = 'text';
        }
    }

})();

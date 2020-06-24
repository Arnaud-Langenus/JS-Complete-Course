/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById('run').addEventListener('click', ()=> {
        let arr = [];
        for (let i=0; i<10; i++) {
            arr[i] = Math.round(math.random()*99+1);
            document.getElementById(`n-${i+1}`).innerHTML = arr[i];
        }
        let sortedArr = arr.sort((a,b) => a-b);
        document.getElementById('min').innerHTML = sortedArr[0];
        document.getElementById('max').innerHTML = sortedArr[9];
        let sum = arr.reduce ((total, num) => total + num);
        document.getElementById('sum').innerHTML = sum;
        document.getElementById('average').innerHTML = sum/10;
    })

})();

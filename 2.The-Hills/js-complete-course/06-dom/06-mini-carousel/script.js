/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];
    // I FUCKING HATE MAKING CAROUSELS, AND I DON'T EVEN KNOW WHY AAAAAAAAAAAGHHHHHHHH
    const img = document.getElementsByTagName('img')[0];
    document.getElementById('next').addEventListener('click', ()=> {
        let index;
        for (let i=0; i<gallery.length; i++) {
            if (img.getAttribute('src') == gallery[i]) {
                index = i;
            }
        }
        img.src = (index == gallery.length-1) ? gallery[0] : gallery[index + 1];
    })

})();

let medias1 = document.getElementById("mediaQ1");
let medias2 = document.getElementById("mediaQ2");
let medias3 = document.getElementById("mediaQ3");

const x = window.matchMedia("(max-width: 990px)");
const y = window.matchMedia("(max-width: 767px)");

function mquary2(x) {
    if (x.matches) { // If media query matches
        medias3.classList.remove("row-cols-4");
        medias3.classList.add("row-cols-2");
        
    } else {
        medias3.classList.remove("row-cols-2");
        medias3.classList.add("row-cols-4");
    }
};
mquary2(x); // Call listener function at run time
x.addEventListener("change",mquary2);

function mquary1(y){
    if (y.matches) {
        medias2.classList.remove("row-cols-4");
        medias2.classList.add("row-cols-2");
        medias1.classList.remove("row-cols-4");
        medias1.classList.add("row-cols-2");
    } else{
        medias2.classList.remove("row-cols-2");
        medias2.classList.add("row-cols-4");
        medias1.classList.remove("row-cols-2");
        medias1.classList.add("row-cols-4");
    }
};
mquary1(y); // Call listener function at run time
y.addEventListener("change",mquary1);
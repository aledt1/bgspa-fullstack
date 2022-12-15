let divi = document.getElementById("mediaMatches") 
const x = window.matchMedia("(max-width: 576px)")

function myFunction(x) {
    if (x.matches) { // If media query matches
        divi.classList.remove("col-rows-12");
        divi.classList.add("col-rows-6");
    } else {
        divi.classList.remove("col-rows-6");
        divi.classList.add("col-rows-12");
    }
  }
  myFunction(x) // Call listener function at run time
  x.addEventListener("change",myFunction)

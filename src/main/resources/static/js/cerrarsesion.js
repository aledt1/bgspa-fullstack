if ((localStorage.getItem("sesionIniciada")) == "true"){
    let cerrarSesion = document.getElementsByClassName("cerrarSesion")[0]
    let cerrarSesion1 = document.getElementsByClassName("cerrarSesion")[1]
    let acceder = document.getElementsByClassName("acceder")[0]
    let acceder1 = document.getElementsByClassName("acceder")[1]
    acceder.remove()
    acceder1.remove()
    cerrarSesion.innerHTML = `<a class="btn my-2 my-sm-0" href="https://bgspa.herokuapp.com/index.html"><i class="bi bi-box-arrow-right bi-movil binav"></i></a>`
    cerrarSesion.addEventListener("click", function(e){
        localStorage.removeItem("sesionIniciada")
        localStorage.removeItem("token")
    })
    cerrarSesion1.innerHTML = `<a class="btn my-2 my-sm-0" href="https://bgspa.herokuapp.com/index.html"><i class="bi bi-box-arrow-right bi-movil binav"></i></a>`
    cerrarSesion1.addEventListener("click", function(e){
        localStorage.removeItem("sesionIniciada")
        localStorage.removeItem("token")
    })
    } 
//Ya se realizaron las actualizaciones

const usuarios = localStorage.getItem("info")
let existenciaStorage = false
let btnSubmit = document.getElementById("btnIniciarSesion");

function mostrarContraseña(){
    let tipo = document.getElementById("contraseña");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}

btnSubmit.addEventListener("click", function(e){ 
    e.preventDefault(); 
    let correoe = document.getElementById("correo");
    let valorcorreo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña");
    let valorcontrasena = document.getElementById("contraseña").value;
   // let alerterror = document.getElementById("alertaerror");
    let formulario = document.getElementById("formulario");    
	
    //VALIDACIONES DE FORMULARIO
    const flag = {
    correoe: false,
    contraseña:false
    }

    //Validación correo
     function validarCorreo (correo) {
     let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
     let verificar = expReg.test(correo);
     console.log(verificar)
     if(verificar){
         correoe.classList.remove("is-invalid");
         correoe.classList.add("is-valid");
         flag.correoe = true
     } else {
         correoe.classList.remove("is-valid");
         correoe.classList.add("is-invalid");
         flag.correoe = false
     }
     }
     validarCorreo(valorcorreo); 

    //Validación contraseña
    function validarContraseña (contra) {
        let expReg =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
        let verificarcontraseña = expReg.test(contra);
        console.log(verificarcontraseña)
        if(verificarcontraseña){
            contraseña.classList.remove("is-invalid");
            contraseña.classList.add("is-valid");
            flag.contraseña = true
        } else {
            contraseña.classList.remove("is-valid");
            contraseña.classList.add("is-invalid");
            flag.contraseña = false
    }
    }//cierra función contra
    validarContraseña(valorcontrasena); 

    // if (!(flag.correoe && flag.contraseña)){ SE ACTUALIZO POR UN DISEÑO DE MODAL
    //     alerterror.style.display = "block";
    //     setTimeout(()=>{alerterror.style.display = "none"}, (7000)); 
    // } // if para que se hayan rellenado los campos correctos


    // Codigo para logear a un usuario -----------------------------------------------------------------------------
    if(usuarios){
        let conversion = JSON.parse(usuarios);
        arregloUsuarios = conversion;
        existenciaStorage = true;
    }//if para comprobar que existan usuarios registrados

    let sesion = false;
    if(existenciaStorage){
        for (let i = 0; i < arregloUsuarios.length; i++) {
            if((arregloUsuarios[i].correo === valorcorreo)&&(arregloUsuarios[i].contraseña === valorcontrasena)){
                nombreUsuario = arregloUsuarios[i].name
                localStorage.setItem("sesionIniciada", "true")
                localStorage.setItem("nombreUsuario", nombreUsuario)
                sesion = true
                break
            }//if si coinciden contrasena y email.
        }//for para verificar que los campos coincidan con el storage
    console.log(sesion);
        if(sesion){
            AlertLogin();
            setTimeout(()=>{location.href = "http://127.0.0.1:5503/index.html"}, (2500)); 
        } else {
            WarningLogin();
            formulario.reset();
            correoe.classList.remove("is-valid");
            contraseña.classList.remove("is-valid");
        }
        
    
    }// if que exista algun usuario en el estorage
    
   if(flag.correoe && flag.contraseña){
    //---------------------------------------------------------------
	//código para metodo fetch
	let url= '/api/login/';
	let data= {usuario: valorcorreo, contrasena:valorcontrasena};
	console.log(JSON.stringify(data));
	fetch(url,{
		method: 'POST' ,
		body: JSON.stringify(data),
		headers:{
			'Content-Type':'application/json'
		}
	}).then(res=> res.json())
	.catch(error=> console.error('Error:', error))
	.then(response=> localStorage.setItem("token",response.accessToken)); 
	//---------------------------------------------------------------
	 localStorage.setItem("sesionIniciada", "true")
	 AlertLogin();
            setTimeout(()=>{location.href = "https://bgspa.herokuapp.com/index.html"}, (2500)); 
    }else {
            WarningLogin();
            formulario.reset();
            correoe.classList.remove("is-valid");
            contraseña.classList.remove("is-valid");
        }//else
        
    
    
   

});//btnSubmit





//------------AlertLogin en Flag general--------------
const AlertLogin = () => {
    Swal.fire({
                    position: 'center',
                    color: '#A97798',
                    background: '#F9F9F9',
                    icon: 'success',
                    title: '¡Bienvenido!',
                    text: 'Disfruta la mágia de los productos BG SPA.',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#A058A1',
                    //showConfirmButton: true,
                    //showCloseButton: true,
                    // toast: true
                  }) 
                };

const WarningLogin = () => {
    Swal.fire({
                    position: 'center',
                    color: '#A97798',
                    background: '#F9F9F9',
                    icon: 'warning',
                    title: '¡Advertencia!',
                    text: 'El correo y/o contraseña no son válidos.',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#A058A1',
                    showConfirmButton: true,
                    showCloseButton: true,
                    // toast: true
                    }) 
                };
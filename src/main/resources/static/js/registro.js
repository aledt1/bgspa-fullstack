let btnSubmit = document.getElementById("btnRegistrarse");
let infoUsuario = [];
let cont = 1;
const key = "info";

function mostrarContraseña(){
    let tipo = document.getElementById("contraseña");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}

function mostrarContraseña2(){
    let tipo = document.getElementById("validacionContraseña");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}

btnSubmit.addEventListener("click", function(e){ 
    e.preventDefault();
    let nombre = document.getElementById("Nombre");
    let apellido = document.getElementById("Apellido");
    let telefono = document.getElementById("validationNumber");
    let correoe = document.getElementById("correo");
    let valorcorreo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña")
    let valorcontrasena = document.getElementById("contraseña").value
    let valcontraseña = document.getElementById("validacionContraseña");
    let contrase = document.getElementById("validacionContraseña").value;
    // let alertexitosa = document.getElementById("alertaexitosa"); SE ACTUALIZO POR NUEVO MODAL
    let alerterror = document.getElementById("alertaerror");
    let formulario = document.getElementById("formulario"); 

	
	
    //JSON Y LOCAL STORAGE
 /*   let arregloUsuario = {
        "id" : cont,
        "name": nombre.value,
        "apellido": apellido.value,
        "telefono": telefono.value,
        "correo": correoe.value,
        "contraseña": valcontraseña.value
    };*/

    console.log(infoUsuario);

     //VALIDACIONES DE FORMULARIO
     const flag = {
        nombre: false,
        apellido: false,
        telefono: false,
        correoe: false,
        contraseña:false,
        valcontraseña:false
    }
    
     //Validación de nombre
     nombre.classList.remove("is-invalid");
     nombre.classList.add("is-valid");
 
     if ((nombre.value.length >= 3) && !(nombre.value.trim() == "") && (nombre.value[0] != " ")) {
         nombre.classList.add("is-valid"); 
         flag.nombre = true
     }
     else{  
         nombre.classList.add("is-invalid");
         flag.nombre = false
     }
 
     //Validación de apellido
     apellido.classList.remove("is-invalid");
     apellido.classList.add("is-valid");
     
     if ((apellido.value.length >= 3) && !(apellido.value.trim() == "") && (apellido.value[0] != " ")) {
         apellido.classList.add("is-valid"); 
         flag.apellido = true
     }
     else{  
         apellido.classList.add("is-invalid");
         flag.apellido = false
     }
 
     //Validación Teléfono
     if((telefono.value.length == 10)&&(telefono.value!=0)
     ) {
         telefono.classList.remove("is-invalid");
         telefono.classList.add("is-valid");
         flag.telefono = true
     } else {
         telefono.classList.remove("is-valid");
         telefono.classList.add("is-invalid");
         flag.telefono = false
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

    //validación contraseña
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
        }
    validarContraseña(valorcontrasena); 
        
    //Confirmación contraseña
    function confirmarContraseña (verifcontra) {
        let expReg =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
        let confirmarcontraseña = expReg.test(verifcontra);   
        console.log(confirmarcontraseña);

        if ((valorcontrasena === valcontraseña.value) && (valcontraseña.value.length!=0)&&(confirmarcontraseña)){
            valcontraseña.classList.remove("is-invalid");
            valcontraseña.classList.add("is-valid");
            flag.valcontraseña=true
        } else {
            valcontraseña.classList.remove("is-valid");
            valcontraseña.classList.add("is-invalid");
            flag.valcontraseña=false
        }
    }
    confirmarContraseña(contrase);

//código para metodo fetch
	let url= '/api/usuarios/';	
		//arreglo nuevo
	   let data = {
        nombre: nombre.value,
        apellido: apellido.value,
        telefono: telefono.value,
        usuario: valorcorreo,
        contrasena: valorcontrasena
    	};
		//console.log(data);	
		
    //ALERTA GENERAL
    if (flag.nombre && flag.apellido && flag.telefono && flag.correoe && flag.contraseña && flag.valcontraseña){
        //------------------------------------------
	//fetch
	fetch(url,{
		method: 'POST' ,
		body: JSON.stringify(data),
		headers:{
			'Content-Type':'application/json'
		}
	}).then(res=> res.json())
	.catch(error=> console.error('Error:', error))
	//.then(response=> localStorage.setItem("clave",response));  //se omitio, ya que no se requere un registro en localStorage (es redundante).
	//-------------------------------------------
	
       // cont++;
        //infoUsuario.push(arregloUsuario);
       // localStorage.setItem(key, JSON.stringify(infoUsuario));
        AlertRegistro();
        formulario.reset();
        nombre.classList.remove("is-valid")
        apellido.classList.remove("is-valid")
        telefono.classList.remove("is-valid")
        correoe.classList.remove("is-valid")
        contraseña.classList.remove("is-valid")
        valcontraseña.classList.remove("is-valid")
    } else {
        alerterror.style.display = "block";
        setTimeout(()=>{alerterror.style.display = "none"}, (7000));
    }
      
    });//btnSubmit


    //-------ALERTA REGISTRO EN FLAGS GENERAL-------
    const AlertRegistro = () => {
        Swal.fire({
                        position: 'center',
                        color: '#A97798',
                        background: '#F9F9F9',
                        icon: 'success',
                        title: 'Registro exitoso',
                        text: 'Ahora formas parte de la familia BG SPA.',
                        confirmButtonText: 'Aceptar',
                        confirmButtonColor: '#A058A1',
                        showConfirmButton: true,
                        showCloseButton: true,
                        //toast: true
                      }) 
                    };
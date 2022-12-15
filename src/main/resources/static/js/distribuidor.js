let btnSubmit1 = document.getElementById("btnValidar");

btnSubmit1.addEventListener("click", function(e){ 
    e.preventDefault();
    let nombre = document.getElementById("Nombre");
    let apellido = document.getElementById("Apellido");
    let campoMensaje = document.getElementById("campoMensaje");
    let campoTelefono = document.getElementById("validationNumber");
    let correoe = document.getElementById("correo");
    let confirmarCorreo = document.getElementById("validationCorreo");
    let valorcorreo = document.getElementById("correo").value;
    let confirmar = document.getElementById("validationCorreo").value;
    let empresa = document.getElementById("empresa");
    let alerterror = document.getElementById("alertaerror");
    let formulario = document.getElementById("formulario");    

    //VALIDACIONES DE FORMULARIO
    const flag = {
        nombre: false,
        apellido: false,
        campoTelefono: false,
        campoMensaje: false,
        correoe: false,
        confirmarCorreo: false,
        empresa: false
    }

    //validación de nombre
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");

    if ((nombre.value.length >= 3) && (nombre.value.length < 20) && !(nombre.value.trim() == "") && (nombre.value[0] != " ")) {
        nombre.classList.add("is-valid"); 
        flag.nombre = true
    }
    else{  
        nombre.classList.add("is-invalid");
        flag.nombre = false
    }

    for (let i = 0; i < nombre.value.length; i++) {
        console.log(nombre.value.charAt(i));
    
                console.log(nombre.value.charAt(i));
                console.log(nombre.value.charCodeAt(i));
                if((
                
                    (nombre.value.toUpperCase().charCodeAt(i)<65)
                    || //condición or
                    (nombre.value.toUpperCase().charCodeAt(i)>90)
                ) && ((nombre.value.toUpperCase().charCodeAt(i)!=32)) //espacio
                &&((nombre.value.toUpperCase().charCodeAt(i)!=193)) //Á el to uper fue para comparar tambien con las mayuculas
                &&((nombre.value.toUpperCase().charCodeAt(i)!=201)) //É
                &&((nombre.value.toUpperCase().charCodeAt(i)!=205)) //Í
                &&((nombre.value.toUpperCase().charCodeAt(i)!=211)) //Ó
                &&((nombre.value.toUpperCase().charCodeAt(i)!=218)) //Ú
                &&((nombre.value.toUpperCase().charCodeAt(i)!=209)) //Ñ

                ) {
                        nombre.classList.remove("is-valid");
                        nombre.classList.add("is-invalid");
                        flag.nombre = false
                        break;
                } //if
            }//for

    //validación de apellido
    apellido.classList.remove("is-invalid");
    apellido.classList.add("is-valid");

    if ((apellido.value.length >= 3) && (apellido.value.length < 20) && !(apellido.value.trim() == "") && (apellido.value[0] != " ")) {
        apellido.classList.add("is-valid"); 
        flag.apellido = true
    }
    else{  
        apellido.classList.add("is-invalid");
        flag.apellido = false
    }

    for (let i = 0; i < apellido.value.length; i++) {
        console.log(apellido.value.charAt(i));
    
                console.log(apellido.value.charAt(i));
                console.log(apellido.value.charCodeAt(i));
                if((
                
                    (apellido.value.toUpperCase().charCodeAt(i)<65)
                    || //condición or
                    (apellido.value.toUpperCase().charCodeAt(i)>90)
                ) && ((apellido.value.toUpperCase().charCodeAt(i)!=32)) //espacio
                &&((apellido.value.toUpperCase().charCodeAt(i)!=193)) //Á el to uper fue para comparar tambien con las mayuculas
                &&((apellido.value.toUpperCase().charCodeAt(i)!=201)) //É
                &&((apellido.value.toUpperCase().charCodeAt(i)!=205)) //Í
                &&((apellido.value.toUpperCase().charCodeAt(i)!=211)) //Ó
                &&((apellido.value.toUpperCase().charCodeAt(i)!=218)) //Ú
                &&((apellido.value.toUpperCase().charCodeAt(i)!=209)) //Ñ

                ) {
                        apellido.classList.remove("is-valid");
                        apellido.classList.add("is-invalid");
                        flag.apellido = false
                        break;
                } //if
            }//for



    //Validación Teléfono
    if((campoTelefono.value.length == 10) 
    && (!isNaN(campoTelefono.value))
    && (campoTelefono.value!=0)
    && !(campoTelefono.value.trim() == "") 
    && (campoTelefono.value[0] != " ")
    ) {
        campoTelefono.classList.remove("is-invalid");
        campoTelefono.classList.add("is-valid");
        flag.campoTelefono = true
    } else {
        campoTelefono.classList.remove("is-valid");
        campoTelefono.classList.add("is-invalid");
        flag.campoTelefono = false
    }

    // Validación Mensaje
    if ((campoMensaje.value.length >= 10) && (campoMensaje.value.length <120) && !(campoMensaje.value.trim() == "") && (campoMensaje.value[0] != " ")) {
        campoMensaje.classList.remove("is-invalid");
        campoMensaje.classList.add("is-valid");
        flag.campoMensaje = true
    } else {
        campoMensaje.classList.remove("is-valid");
        campoMensaje.classList.add("is-invalid");
        flag.campoMensaje = false
    }

    //validación correo
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

    //Confirmación correo
    if ((valorcorreo === confirmar) && (confirmarCorreo.value.length!=0)){
        confirmarCorreo.classList.remove("is-invalid");
        confirmarCorreo.classList.add("is-valid");
        flag.confirmarCorreo = true
    } else {
        confirmarCorreo.classList.remove("is-valid");
        confirmarCorreo.classList.add("is-invalid");
        flag.confirmarCorreo = false
    }

    //Validación empresa
    if ((empresa.value.length >= 3)
        && !(empresa.value.trim() == "") 
        && (empresa.value[0] != " ") 
        && (empresa.value.length<=30)
        && (empresa.value.length!=0)) { 
        empresa.classList.remove("is-invalid");
        empresa.classList.add("is-valid");
        flag.empresa = true
    } else {
        empresa.classList.remove("is-valid");
        empresa.classList.add("is-invalid");
        flag.empresa = false
    }

    //ALERTA GENERAL
    if (flag.nombre && flag.apellido && flag.campoTelefono && flag.campoMensaje && flag.correoe && flag.empresa && flag.confirmarCorreo){
         //---------------------CORREO------------------------------------------
    function sendEmail(){
        
    let Body = 
    '¡Hola! '+nombre.value+' esta interesado en formar parte del equipo BG SPA.<br>Soñemos en grande y sigamos creciendo.<br><br>'+
    'Nombre: '+nombre.value+'<br>Apellido: '+apellido.value+'<br>Teléfono: '+campoTelefono.value+'<br>Empresa: '+empresa.value+'<br>Correo electrónico: '+correoe.value+'<br>Mensaje: '+campoMensaje.value;
          Email.send({
              Host : "smtp.elasticemail.com",
              Username : "bgspacompany@gmail.com",
              Password : "DD76DC61EDD1EC165A9B8D27BE92A40E263A",
              To : 'alamatzin@ciencias.unam.mx', 
              From : 'bgspacompany@gmail.com',  
              Subject : "DISTRIBUIDOR BG SPA",
              Body : Body
          }).then(
            message => {
  
              if(message=='OK'){
                AlertDistribuidorS();
              }else{
                console.error(message);
                AlertDistribuidorE();
              }
            }
            
          );
      }//function
      console.log(sendEmail());
      console.log(nombre.value);
      console.log(apellido.value);

///--------------------------------------------------------------------


        formulario.reset();
        nombre.classList.remove("is-valid")
        apellido.classList.remove("is-valid")
        campoTelefono.classList.remove("is-valid")
        correoe.classList.remove("is-valid")
        campoMensaje.classList.remove("is-valid")
        confirmarCorreo.classList.remove("is-valid")
        empresa.classList.remove("is-valid")
    } else {
        alerterror.style.display = "block";
        setTimeout(()=>{alerterror.style.display = "none"}, (7000));      
    }//else



});//btnsubmit

//--------ALERTAS DISTRIBUIDOR, EN FUNCION CORREO------------
const AlertDistribuidorS = () => {
    Swal.fire({
        position: 'center',
        color: '#A97798',
        background: '#F9F9F9',
        icon: 'success',
        title: '¡Gracias!',
        text: 'Tu mensaje ha sido enviado exitosamente.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#A058A1',
        showConfirmButton: true,
        showCloseButton: true,
        //toast: true
      }) 
  };

  const AlertDistribuidorE = () => {
    Swal.fire({
        position: 'center',
        color: '#A97798',
        background: '#F9F9F9',
        icon: 'error',
        title: 'Lo sentimos, hubo un error al enviar el mensaje.',
        text: 'Inténtalo de nuevo.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#A058A1',
        showConfirmButton: true,
        showCloseButton: true,
        //toast: true
      }) 
        
  };
let btnSuscribirse = document.getElementById("btnSuscribirse");
let cOferta = document.getElementById("inputEmail");

btnSuscribirse.addEventListener("click", function(e){
    e.preventDefault();
    let correofooter = document.getElementById("inputEmail");
    let valorcorreofooter = document.getElementById("inputEmail").value;

    let flagfooter = false;
    
    //Validación correo footer
    function validarCorreo (correo) {
        let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let verificar = expReg.test(correo);
        console.log(verificar)
        if(verificar){
            correofooter.classList.remove("is-invalid");
            correofooter.classList.add("is-valid");
            flagfooter = true
        } else {
            correofooter.classList.remove("is-valid");
            correofooter.classList.add("is-invalid");
            flagfooter = false
        }
    }

    
    validarCorreo(valorcorreofooter);
    
    if (flagfooter){

    //--------Correo---------------------------------
    function emailOfertas(){
        
        let Body = 
        '¡Hola! Tienes un nuevo suscriptor interesado en recibir notificaciones para las futuras ofertas de BG SPA.<br><br>'+
        'Correo electrónico: '+cOferta.value;
              Email.send({
                  Host : "smtp.elasticemail.com",
                  Username : "bgspacompany@gmail.com",
                  Password : "DD76DC61EDD1EC165A9B8D27BE92A40E263A",
                  To : 'edubarajas98@gmail.com', 
                  From : 'bgspacompany@gmail.com',  
                  Subject : "NUEVO SUSCRIPTOR BG SPA",
                  Body : Body
              }).then(
                message => {
      
                  if(message=='OK'){
                    AlertSuscriS();
                  }else{
                    console.error(message);
                    AlertSuscriE();
                  }
                }
                
              );
          }//function
          console.log(emailOfertas());
          console.log(cOferta.value);


          ///--------------------------------------------------------------------

function emailOfertasUser(){
        
    let Body = 
    '¡Hola! Muchas gracias por suscribirte a BG SPA.<br>A partir de ahora recibirá notificaciones sobre nuestros productos en oferta.'
          Email.send({
              Host : "smtp.elasticemail.com",
              Username : "bgspacompany@gmail.com",
              Password : "DD76DC61EDD1EC165A9B8D27BE92A40E263A",
              To : cOferta.value, 
              From : 'bgspacompany@gmail.com',  
              Subject : "CONFIRMACIÓN DE SUSCRIPCIÓN A BG SPA",
              Body : Body
          })
      }//function
      console.log(emailOfertasUser());

    //----------------------------------------------
    cOferta.value="";
    correofooter.classList.remove("is-valid");

    }//flag

});


//----- ALERTAS DE SUSCRIPCION------------------
const AlertSuscriS = () => {
  Swal.fire({
    position: 'center',
    color: '#A97798',
    background: '#F9F9F9',
    icon: 'success',
    title: '¡Gracias!',
    text: 'Ahora recibiras notificaciones por parte de BG SPA.',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#A058A1',
    showConfirmButton: true,
    //toast: true,
  }) 
};

const AlertSuscriE = () => {
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
    //toast: true,
  }) 
};
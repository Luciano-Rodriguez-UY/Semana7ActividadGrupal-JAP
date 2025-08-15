function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    setTimeout(function(){
    document.getElementById("alert-success").classList.remove("show");
    },2500)


}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
     setTimeout(function(){
    document.getElementById("alert-danger").classList.remove("show");
    },2500)

}



document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let pass1 = document.getElementById("password1").value;
    let pass2 = document.getElementById("password2").value;

    if (pass1 !== pass2) {

    document.getElementById("alert-password").classList.add("show");
     setTimeout(function(){
    document.getElementById("alert-password").classList.remove("show");
    },2500)


    }
  });



  
 document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // evita que el formulario se envíe realmente

  //Obtener valores
  let nombre = document.getElementById("nombre").value.trim();
  let apellido = document.getElementById("apellido").value.trim();
  let email = document.getElementById("email").value.trim();
  let pass1 = document.getElementById("password1").value.trim();
  let pass2 = document.getElementById("password2").value.trim();
  let terms = document.getElementById("terminos").checked;

  //Validación
  if (nombre && apellido && email && pass1.length >= 6 && pass1 === pass2 && terms) {
    showAlertSuccess(); // todo correcto
  } else {
    showAlertError();   // falta algún requisito
  }
});

const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const asunto = document.getElementById("asunto").value.trim();

  //Nombre
  if (nombre === "") {
    alert("El campo de nombre no puede estar vacio");
    nombre.focus();
    return false;
  } else if (nombre.length > 50) {
    alert("El campo de nombre no puede ser mayor a 50 caracteres");
    nombre.focus();
    return false;
  }
  
  //email
  if (email === "") {
    alert("El campo de email no puede estar vacio");
    nombre.focus();
    return false;
  } else if(!validarEmail(email)) {
    alert("El email ingresado no es válido");
  }

    //Asunto
    if (asunto === "") {
      alert("El campo de asunto no puede estar vacio");
      asunto.focus();
      return false;
    } else if (asunto.length > 50) {
      alert("El campo de asunto no puede ser mayor a 50 caracteres");
      asunto.focus();
      return false;
    }

    alert("Correo enviado, gracias :D");
    form.submit();

});

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
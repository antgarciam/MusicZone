function ingresar() {
    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;
    
    if (correo === "" || clave === ""){
        alert("Debe completar todos los campos");
        return;
    }

    let formatoCorreo = /^[^@\s]+@[^\s@]+\.[^\s@]+$/;


    if (!formatoCorreo.test(correo)){
        alert("Ingrese un correo válido");
        return;
    }

    if (clave.length !== 8) {
        alert("La clave debe tener exactamente 8 caracteres");
        return;
    }

    if (correo === "jefazo@musiczone.cl" && clave === "DuocUc26") {
        window.location.href = "admin.html";

    }else if (correo === "papitas@gmail.com" && clave === "DuocUc27") {

        window.location.href = "usuario.html"

    }else{
        
        alert("Usuario o clave incorrectos")
    }


}
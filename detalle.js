let catalogo = JSON.parse(
    localStorage.getItem("catalogo")
);





document.getElementById("imagen").src =
    catalogo.imagen;


document.getElementById("nombre").textContent =
    catalogo.nombre;


document.getElementById("precio").textContent =
    "Precio: $" + catalogo.precio;


document.getElementById("descripcion").textContent =
    catalogo.descripcion;
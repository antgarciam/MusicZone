let catalogo = [
    {
        id: 1,
        nombre: "Guitarra acústica",
        precio: 249990,
        descripcion: "Guitarra acústica ideal para comenzar a tocar",
        imagen: "imgDestacados/guitarra-acustica-dest.jpg"
    },
    {
        id: 2,
        nombre: "Batería",
        precio: 599990,
        descripcion: "Batería acústica de 5 piezas",
        imagen: "imgDestacados/bateria-dest.jpg"
    },
    {
        id: 3,
        nombre: "Teclado",
        precio: 329990,
        descripcion: "Teclado electrónico de 61 teclas",
        imagen: "imgDestacados/piano-dest.jpg"
    }
];

let lista = document.getElementById("listaCatalogo");
lista.innerHTML = ""; 

for (let i = 0; i < catalogo.length; i++) {
    lista.innerHTML += `
        <div class="col">
            <div class="card h-100 shadow-sm border-0" style="border-radius: 15px; overflow: hidden;">
                
                <!-- Contenedor superior para la imagen con fondo claro y centrado perfecto -->
                <div class="bg-light p-3 d-flex justify-content-center align-items-center" style="height: 220px;">
                    <img src="${catalogo[i].imagen}" class="img-fluid rounded" style="max-height: 100%; object-fit: contain;" alt="${catalogo[i].nombre}">
                </div>
                
                <!-- Cuerpo de la tarjeta -->
                <div class="card-body d-flex flex-column text-center">
                    <h5 class="card-title fw-bold text-dark mb-2">${catalogo[i].nombre}</h5>
                    <p class="card-text text-success fw-bold fs-5 mb-3">Precio: $${catalogo[i].precio.toLocaleString('es-CL')}</p>
                    
                    <!-- Botón corporativo de MusicZone estilo Bootstrap -->
                    <button class="btn btn-dark w-100 mt-auto fw-semibold" style="border-radius: 8px;" onclick="verDetalle(${catalogo[i].id})">
                        🔍 Ver detalle
                    </button>
                </div>

            </div>
        </div>
    `;
}

function verDetalle(id) {
    let catalogoSeleccionado = null;

    for (let i = 0; i < catalogo.length; i++) {
        if (catalogo[i].id === id) {
            catalogoSeleccionado = catalogo[i];
            break; 
        }
    }

    if (catalogoSeleccionado) {
        localStorage.setItem("catalogo", JSON.stringify(catalogoSeleccionado));
        window.location.href = "detalle.html";
    }
}

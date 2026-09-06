let catalogo = [
    {
        id: 1,
        nombre: "Guitarra eléctrica",
        precio: 249990,
        descripcion: "Guitarra eléctrica ideal para comenzar a tocar",
        imagen: "img/guitarra.jpg"
    },
    {
        id: 2,
        nombre: "Batería",
        precio: 599990,
        descripcion: "Batería acústica de 5 piezas",
        imagen: "img/bateria.jpg"
    },
    {
        id: 3,
        nombre: "Teclado",
        precio: 329990,
        descripcion: "Teclado electrónico de 61 teclas",
        imagen: "img/teclado.jpg"
    }
];

let lista = document.getElementById("listaCatalogo");

for (let  i = 0; i < catalogo.length; i++){

    lista.innerHTML += `

        <div>
            <img src="${catalogo[i].imagen}" width="200">

            <h2>${catalogo[i].nombre}</h2>

            <p>Precio: $${catalogo[i].precio}</p>

            <button onclick="verDetalle(${catalogo[i].id})">
                Ver detalle
            
            </button>

            <br>

        </div>
    `;
function verDetalle(id){
    let catalogoSeleccionado;

    for(let i = 0; i < catalogo.length; i++){

        if(catalogo[i].id === id){
            catalogoSeleccionado = catalogo[i];
        }

    }


    localStorage.setItem(
        "catalogo",
        JSON.stringify(catalogoSeleccionado)


    );


    window.location.href = "detalle.html"
}

}
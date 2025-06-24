function insertImage() {
    console.log("Hola mundoooo");

    const contenedor = document.querySelector(".info");
    console.log(contenedor);
    

    // Crea un elemento de imagen
    const imagen = document.createElement("img");
    imagen.src = "https://storage.googleapis.com/images-server-dataviz/icon_dataviz.png"; // URL de la imagen
    imagen.alt = "Imagen agregada al principio";

    // Agrega la imagen al inicio del div
    contenedor.prepend(imagen);
}

setTimeout(() => {
    insertImage()
}, 500);
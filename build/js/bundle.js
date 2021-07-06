
//Esperamos que todo el DOM este cargado para ejecutar la funcion
document.addEventListener('DOMContentLoaded', () => crearGaleria());


function crearGaleria(){
    //seleccionamos la lista con la clase .galeria-imagenes
    const galeria = document.querySelector('.galeria-imagenes');

    //Cargamos imagen por imagen
    for(let i = 2; i<=12 ; i++){
        //creamos elemento img
        const imagen = document.createElement('IMG');
        //le pasamos en el src el directorio de la imagen
        imagen.src = `build/img/thumb/${i}.webp`;

        //creamos elemento de la lista
        const lista = document.createElement('LI');

        /*Al <li> le pasamos una imagen. 
        De tal manera que 
        <li>
            <img src="build/image/thumb/1.webp"/>
        </li>*/
        lista.appendChild(imagen);

        //Cada <li> será agregado al <ul> principal
        galeria.appendChild(lista);
    }
}
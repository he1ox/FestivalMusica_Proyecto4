document.addEventListener('DOMContentLoaded', () =>{
    scrollNav();
})



function scrollNav() {
    //Seleccionamos todos los enlaces, mediante la clase del div y anidamos 'a' de enlaces
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    /* !
    No podemos añadir un addEventListener a 'enlaces' porque basicamente
    es el conjunto de todos los enlaces.
    Necesitamos seleccionar uno por uno */
    

    enlaces.forEach(function (enlace) {
        //Registra cada enlace que recibe un click
        enlace.addEventListener('click', function(e) {
            //Pasamos el evento por 'e' y preveemos la accion por default.
            e.preventDefault();

            //Obtenemos el valor contenido en el atributo href del elemento que se da click
            const seccion = document.querySelector(e.target.attributes.href.value)

            //Se aplica scrollIntoView a la seccion que deseamos ir
            seccion.scrollIntoView({
                //Accedemos a la propiedad behavior
                behavior: 'smooth' //Transicion suave entre secciones
            });
        })
    })

}
//Esperamos que todo el DOM este cargado para ejecutar la funcion
document.addEventListener('DOMContentLoaded', () => crearGaleria());


function crearGaleria(){
    //seleccionamos la lista con la clase .galeria-imagenes
    const galeria = document.querySelector('.galeria-imagenes');

    //Cargamos imagen por imagen
    for(let i = 1; i<=12 ; i++){
        //creamos elemento img
        const imagen = document.createElement('IMG');
        //le pasamos en el src el directorio de la imagen
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        imagen.onclick = mostrarImagen;


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


function mostrarImagen(e){
    const id = parseInt(e.target.dataset.imagenId);

    //Generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;


    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //Cuando se da click se cierra la imagen
    overlay.onclick = () => overlay.remove();

    //Boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    //Cuando se presiona, se cierra
    cerrarImagen.onclick = () => overlay.remove();
    
    overlay.appendChild(cerrarImagen);
    
    //Mostrar en el html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    
    //bloquear scroll
    body.classList.add('fijar-body');
    //Desbloquea el scroll view
    cerrarImagen.onclick = () => {
        body.classList.remove('fijar-body');
    }
}

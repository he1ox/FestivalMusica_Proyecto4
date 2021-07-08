document.addEventListener('DOMContentLoaded', () =>{
    /*DOMContentLoaded, es ejecutado cuando todo el HTML
    ha sido completamente cargado, sin esperar hojas de estilo, ni imagenes.
    */
    scrollNav();

    navegacionFija();
})


function navegacionFija() {
    //Intersection Observer
    const barra = document.querySelector('.header');
    //Registrar Intersection Observer
    const observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        }
        else {
            barra.classList.add('fijo');
        }
    });


    //Elemento a observar
    observer.observe(document.querySelector('.sobre-festival'));
}


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
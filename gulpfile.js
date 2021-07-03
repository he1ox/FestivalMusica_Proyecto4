const { series, src, dest, watch } = require('gulp');

const sass = require('gulp-sass')(require('sass'));


//funcion que compila SASS
function css(){
    return src("src/scss/layout/app.scss")
        .pipe(sass())
        .pipe(dest("./build/css"))
}

function minificarCSS(){
    return src("src/scss/layout/app.scss")
        .pipe(sass({
            outputStyle : 'compressed'
        }))
        .pipe(dest("./build/css"))
}


function watchArchivos() {
    //Escucha por cambios que puedan suceder en el archivo
    //Ejecuta la tarea de css si detecta cambios
    watch('src/**/*.scss', css) // * => carpeta actual con esa extensión.
}


exports.css = css;
exports.minificarCSS = minificarCSS;
exports.watchArchivos = watchArchivos;

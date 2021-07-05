const { series, src, dest, watch, parallel } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');


//funcion que compila SASS
function css(){
    return src("src/scss/layout/app.scss")
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest("./build/css"))
        .pipe(notify({message: 'CSS Compilado.'}))
}

/* Funcion que sirve para comprimir el peso
del archivo app.css , eliminando los espacios innecesarios*/
function minificarCSS(){
    return src("src/scss/layout/app.scss")
        .pipe(sass({
            outputStyle : 'compressed'
        }))
        .pipe(dest("./build/css"))
        .pipe(notify({message: 'CSS Minificado/Comprimido'}))
}

//Reduce significativamente el peso de las imagenes, guarda el archivo
//Comprimido el buil/img
function imagenes(){
    return src('src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        .pipe(notify({message: 'Imagen Minificada'}));
}


function watchArchivos() {
    //Escucha por cambios que puedan suceder en el archivo
    //Ejecuta la tarea de css si detecta cambios
    watch('src/**/*.scss', css) // * => carpeta actual con esa extensión.
}


exports.css = css;
exports.minificarCSS = minificarCSS;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series(css, imagenes, watchArchivos);
const { series, src, dest, watch } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');


//funcion que compila SASS
function css(){
    return src("src/scss/layout/app.scss")
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest("./build/css"))
}

function minificarCSS(){
    return src("src/scss/layout/app.scss")
        .pipe(sass({
            outputStyle : 'compressed'
        }))
        .pipe(dest("./build/css"))
}

function imagenes(){
    return src('src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./build/img'))
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

const { series,src,dest } = require('gulp');

const sass = require('gulp-sass')(require('sass'));


//funcion que compila SASS
function css(){
    return src("src/scss/app.scss")
        .pipe(sass())
        .pipe(dest("./build/css"))
}

function minificarCSS(){
    return src("src/scss/app.scss")
        .pipe(sass({
            outputStyle : 'compressed'
        }))
        .pipe(dest("./build/css"))
}


exports.css = css;
exports.minificarCSS = minificarCSS;
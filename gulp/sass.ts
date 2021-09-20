import GulpSass from 'gulp-sass'
import Sass from 'sass'
const GSass= GulpSass(Sass);
import Gulp from 'gulp';
const {src, dest}= Gulp;

/** Compile sass */
export function compileSass(){
	return src('src/css/gridui.scss')
		.pipe(GSass())
		.pipe(dest('dist'))
}
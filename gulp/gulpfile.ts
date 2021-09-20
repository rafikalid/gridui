import Gulp from 'gulp';

import {typescriptCompile, compileTestFiles} from './typescript.js'
import {compileSass} from './sass.js'

const {watch, series, parallel}= Gulp;

const argv= process.argv;
const doWatch= argv.includes('--watch');

/** Watch modified files */
function watchCb(cb: Function){
	if(doWatch){
		watch('src/js/**/*.ts', typescriptCompile);
		// watch('test/**/*.ts', compileTestFiles);
		watch('src/css/**/*.ts', compileSass);
		// watch('src/app/graphql/schema/**/*.gql', graphQlCompile)
	}
	cb();
}

export default series([
	parallel([
		typescriptCompile,
		// compileTestFiles,
		compileSass
	]),
	watchCb
]);

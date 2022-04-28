const { series } = require( 'gulp' ), gulp = require( 'gulp' ), concat = require( 'gulp-concat' ), uglify = require( 'gulp-uglify' ), pipeline = require( 'readable-stream' ).pipeline;

function copyAssets(cb) {
	gulp.src( 'node_modules/uikit/src/scss/**' )
		.pipe(gulp.dest( './src/_sass/uikit' ) );

	gulp.src( [ 'node_modules/jquery/dist/jquery.min.js', 'node_modules/uikit/dist/js/uikit.min.js', 'node_modules/uikit/dist/js/uikit-icons.min.js', 'node_modules/uikit/dist/js/uikit-core.min.js' ], { base: 'node_modules' } )
		// .pipe(uglify())
		.pipe( concat( 'scripts.js' ) )
		.pipe( gulp.dest( './src/assets/js' ) );

	console.log( 'Ok!' );
	cb();
}

exports.default = series( copyAssets );

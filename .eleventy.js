const glob = require( 'glob-promise' );
const path = require( 'path' );

module.exports = function( eleventyConfig ) {
	eleventyConfig.setTemplateFormats( 'html,liquid' );
	eleventyConfig.setQuietMode( true );

	eleventyConfig.addPassthroughCopy( { './src/assets/img/': './assets/img/' } );
	eleventyConfig.addPassthroughCopy( { './src/assets/js/': './assets/js/' } );
	eleventyConfig.addPassthroughCopy( { './src/assets/css/': './assets/css/' } );
	eleventyConfig.addPassthroughCopy( { './src/media/': './media/' } );

	eleventyConfig.addPassthroughCopy( { './src/robots.txt': './robots.txt' } );
	eleventyConfig.addPassthroughCopy( { './src/favicon.ico': './favicon.ico' } );

	eleventyConfig.addCollection( 'static_files', async collectionApi => {
		let files = await glob( './src/media/images/home/slideshow/*.jpg' )
			.then( function( files ) {
				let images = files.map( function( file ) {
					let pathFilename = file.replace( './src/', '' );
					let description = path.basename( pathFilename )
						.replace( /^\d*_/, '' )
						.replace( /.jpg/, '' )
						.replace( /_/, ' ' )
						.replace( /^\w/, function( firstChar ) {
							return firstChar.toUpperCase();
						} );

					return { 'pathFilename': pathFilename, 'description': description };
				} );

				return images;
			} );

		return files;
	} );
};

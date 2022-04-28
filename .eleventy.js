module.exports = function( eleventyConfig ) {
	eleventyConfig.setTemplateFormats( 'html,liquid' );
	eleventyConfig.setQuietMode( true );

	eleventyConfig.addPassthroughCopy( { './src/assets/img/': './assets/img/' } );
	eleventyConfig.addPassthroughCopy( { './src/assets/js/': './assets/js/' } );
	eleventyConfig.addPassthroughCopy( { './src/assets/css/': './assets/css/' } );
	eleventyConfig.addPassthroughCopy( { './src/media/': './media/' } );

	eleventyConfig.addPassthroughCopy( { './src/robots.txt': './robots.txt' } );
	eleventyConfig.addPassthroughCopy( { './src/favicon.ico': './favicon.ico' } );

	eleventyConfig.addFilter( 'encode_email', function( value ) {
		return value;
	} );
};

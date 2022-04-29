module.exports = ( eleventyConfig ) => {
	require( './.eleventy' )( eleventyConfig );

	return {
		dir: {
			input: './src/it/',
			output: '_site/it/',

			data: '../_data/',					// relative to input directory
			includes: '../_includes/',			// relative to input directory
			layouts: '../_includes/layouts/'	// relative to input directory
		}
	};
};

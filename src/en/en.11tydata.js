require( 'dotenv' ).config();

var environment = process.env.ENVIRONMENT || 'production';

if ( environment === 'production' ) {
	var url = 'https://www.sabrinarinaldi.com';
} else {
	var url = '/';
}

module.exports = function() {
	return {
		"site": {
			"url": url,
			"keywords": "sabrina, rinaldi, sabrina rinaldi, italian wildlife artist, wildlife artist, wildlife painter, wildlife",
			"lang": "en",
			"encoding": "utf-8",
			"locale": "en_US"
		}
	}
}

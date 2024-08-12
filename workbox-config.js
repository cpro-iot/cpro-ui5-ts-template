module.exports = {
	// TODO: Change glob directory and swDest before deployment!
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{ts,webmanifest,png,jpg,js,css,properties,html,json,md,xml,less,svg,gif,txt,ico,woff2,wasm,hpb}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	skipWaiting: true,
};
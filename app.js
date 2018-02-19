var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt5c8f510e8150ec47')
.setHost("dev-stag-api.built.io")
.setProtocol("https")
.setMasterKey('bltbfd9bd92a680e003')

// 574df6c8fb2034b1603d792e8e2922268779c456 - access token
// bltc88f3d42ad8a728c - secret key
// blt_ext_default_test - extension key
// web hook url - https://test-stag-api.built.io/v1/extensions/blt_ext_default/redeploy?application_api_key=bltc4f7ed1f03053fe8

var extensionSDK = app.Extension({
	extension_key  : 'blt_ext_default',
	secret_key     : 'cliveblt',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)

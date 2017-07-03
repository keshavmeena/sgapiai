var apiai = require('apiai');
 
var app = apiai("8c071a8d7aa74f11995635ad901b4bfa");
 
var request = app.textRequest('show me the line situation ', {
    sessionId: '<unique session id>'
});
 
request.on('response', function(response) {
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end();
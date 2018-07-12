var http = require("http");

var PORTONE = 7000;
var PORTTWO = 7500;



function handlePORTONE(request, response) {
    response.end("You're a javascript mastermind!" + request.url);
}

function handlePORTTWO(request, response) {
    response.end("You failed!" + request.url);
}

var serverOne = http.createServer(handlePORTONE);
var serverTwo = http.createServer(handlePORTTWO);

serverOne.listen(PORTONE, function() {

    console.log("Server listening on: http://localhost:" + PORTONE);
});

serverTwo.listen(PORTTWO, function() {
    
    console.log("Server listening on: http://localhost:" + PORTTWO);
});
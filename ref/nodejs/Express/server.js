var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('<p>Hello World! I am Shrimp Hunter!!!!!<p><br><img src="http://114.34.234.103:8787/?action=stream"/>" ');
})

var server = app.listen(8788, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})


// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint...
app.get("/api/timestamp/:timestamp", function(req, res) {
  let timestamp = req.params.timestamp;
if(timestamp.match(/-/g)) {
  timestamp = +timestamp;
  if (date.toUTCString()UTC == "Invalid Date") {
    res.json( {error: date.toUTCString()})
  }
}
let date = new Date(timestamp);
res.json({ unix: date.valueOf(), utc: date.toUTCString() });
});


// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

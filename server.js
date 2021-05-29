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

app.get("/timestamp", function (req, res) {
  res.sendFile(__dirname + '/views/timestamp.html');
});

app.get("/requestHeaderParser", function (req, res) {
  res.sendFile(__dirname + '/views/requestHeaderParser.html');
});


// your first API endpoint...
app.get("/api/hello", function (req, res) {
console.log({greeting: "hello world"});
res.json({greeting: "hello world"});
});

app.get("/api/", function(req, res) {
  let date = new Date();
  res.json({ "unix": date.valueOf(), "utc": date.toUTCString() });
})

app.get("/api/:datetime", function(req, res) {
  let timestamp = req.params.datetime;
  if ((/\d{5,}/.test(timestamp))) {

  let unixTime = new Date(parseInt(timestamp));
  res.json({ "unix": unixTime.getTime(), "utc": unixTime.toUTCString()
});
} else {
if ((/^[a-zA-Z]+$/.test(timestamp))) {
let date = new Date(timestamp);
  if(date == "Invalid Date") {
    res.json({"error": "Invalid Date"})
  }
  } else {
    let date = new Date(timestamp);
  res.json({ "unix": date.getTime(), "utc": date.toUTCString() });
  }
}
});



app.get("/api/whoami", function(req, res) {
  res.json({
    "value": "value here"
  });
});


// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

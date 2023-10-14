
let express = require("express");

let app = express();

app.use(express.static(__dirname + "/dist/mercadona_ui"));

app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/dist/mercadona_ui/index.html");
});

//Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

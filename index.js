const port = 9090;
const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("pages/login_and_register");
});

app.listen(port, function() {
    console.log("listening at http://localhost:" + port);
});
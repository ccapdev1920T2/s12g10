const port = 3000;
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const db = require("./models/db");

const addData = require("./models/data");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: "topsecret",
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const createRoute = require("./routes/ROUTE_create_game");
const homeRoute = require("./routes/ROUTE_homepage");
const loginRoute = require("./routes/ROUTE_login_and_register");
const modifyRoute = require("./routes/ROUTE_modify_game");
const playRoute = require("./routes/ROUTE_play_game");
const viewGamesRoute = require("./routes/ROUTE_view_games");
const viewLeaderboard = require("./routes/ROUTE_view_leaderboard");
const viewProfileAdminRoute = require("./routes/ROUTE_view_profile_self_admin");
const viewProfileAdminUserRoute = require("./routes/ROUTE_view_profile_user_admin");
const viewProfileSelf = require("./routes/ROUTE_view_profile_self");
const viewProfileUserRoute = require("./routes/ROUTE_view_profile_user");

app.use("/login", loginRoute);
app.use("/", loginRoute);

app.use(function(req, res, next) {
    if(!req.session.loggedin) {
        res.redirect('/login');
    } else {
        next();
    }
});

app.use("/create_game", createRoute);
app.use("/homepage", homeRoute);
app.use("/modify_game", modifyRoute);
app.use("/play_game", playRoute);
app.use("/view_games", viewGamesRoute);
app.use("/view_leaderboard", viewLeaderboard);
app.use("/view_profile_self_admin", viewProfileAdminRoute);
app.use("/view_profile_user_admin", viewProfileAdminUserRoute);
app.use("/view_profile_self", viewProfileSelf);
app.use("/view_profile_user", viewProfileUserRoute);

app.use(function (req, res) {
    res.render("pages/error");
});

db.connect();
addData();

app.listen(port, function() {
    console.log("Listening at http://localhost:" + port);
});
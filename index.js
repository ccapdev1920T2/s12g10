const port = 9090;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const createRoute = require("./controller/create_game");
const homeRoute = require("./controller/homepage");
const loginRoute = require("./controller/login_and_register");
const modifyRoute = require("./controller/modify_game");
const playRoute = require("./controller/play_game");
const viewGamesRoute = require("./controller/view_games");
const viewGamesAdminRoute = require("./controller/view_games_admin");
const viewLeaderboard = require("./controller/view_leaderboard");
const viewProfileAdminRoute = require("./controller/view_profile_self_admin");
const viewProfileAdminUserRoute = require("./controller/view_profile_user_admin");
const viewProfileSelf = require("./controller/view_profile_self");
const viewProfileUserRoute = require("./controller/view_profile_user");

app.use("/create_game", createRoute);
app.use("/homepage", homeRoute);
app.use("/login_and_register", loginRoute);
app.use("/", loginRoute);
app.use("/modify_game", modifyRoute);
app.use("/play_game", playRoute);
app.use("/view_games", viewGamesRoute);
app.use("/view_games_admin", viewGamesAdminRoute);
app.use("/view_leaderboard", viewLeaderboard);
app.use("/view_profile_self_admin", viewProfileAdminRoute);
app.use("/view_profile_user_admin", viewProfileAdminUserRoute);
app.use("/view_profile_self", viewProfileSelf);
app.use("/view_profile_user", viewProfileUserRoute);

app.listen(port, function() {
    console.log("listening at http://localhost:" + port);
});
const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.render("../views/pages/login_and_register");
});

module.exports = router;
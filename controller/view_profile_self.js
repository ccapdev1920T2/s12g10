const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.render("../views/pages/view_profile_self");
});

module.exports = router;
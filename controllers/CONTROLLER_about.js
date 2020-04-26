const controller = {

    //loads the homepage which displays the top 9 most played games (in no particular order)
    loadPage: function (req, res) {

        res.render("pages/about", {
            loggedin: req.session.loggedin,
            guest: req.session.guest,
            user_image: req.session.photo
        });
    }


};

module.exports = controller;
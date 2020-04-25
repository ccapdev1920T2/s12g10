const { check } = require('express-validator');

const validation = {

    gameValidation: function (req, res) {

        var validation = [

            check('title', 'Game title should contain at least 5 characters and at most 50 characters.').isLength({min: 5, max: 50}),

            check('description', 'Game description should contain at least 10 characters and at most 1000 characters.').isLength({min: 10, max: 1000}),

            check('time', 'Game duration should be from 3 to 10 minutes only.').isInt({min: 3, max: 10}),

        ];

        return validation;
    }
}

module.exports = validation;
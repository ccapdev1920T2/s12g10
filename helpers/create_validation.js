const { check } = require('express-validator');

const validation = {

    gameValidation: function (req, res) {

        var validation = [

            check('title', 'First name should not be empty.').isLength({min: 5, max: 50}),

            check('description', 'Last name should not be empty.').isLength({min: 10, max: 1000}),

            check('time', 'ID number should contain 8 digits.').isInt({min: 3, max: 10}),

        ];

        return validation;
    }
}

module.exports = validation;
const { check } = require('express-validator');
const validator = require('validator');

const validation = {

    gameValidation: function () {

        let validation = [

            check('title', 'Game title should contain at least 5 characters and at most 50 characters.').isLength({min: 5, max: 50}),

            check('description', 'Game description should contain at least 10 characters and at most 1000 characters.').isLength({min: 10, max: 1000}),

            check('time', 'Game duration should be from 3 to 10 minutes only.').isInt({min: 3, max: 10}),

        ];

        return validation;
    },

    qAndAValidation: function (req) {

        console.log(req.body);

        let errors = [];

        if (req.body.question1 === "") { errors.push(true) }
        if (req.body.question2 === "") { errors.push(true) }
        if (req.body.question3 === "") { errors.push(true) }
        if (req.body.question4 === "") { errors.push(true) }
        if (req.body.question5 === "") { errors.push(true) }
        if (req.body.question6 === "") { errors.push(true) }
        if (req.body.question7 === "") { errors.push(true) }
        if (req.body.question8 === "") { errors.push(true) }
        if (req.body.question9 === "") { errors.push(true) }
        if (req.body.question10 === "") { errors.push(true) }
        if (req.body.question11 === "") { errors.push(true) }
        if (req.body.question12 === "") { errors.push(true) }
        if (req.body.question13 === "") { errors.push(true) }
        if (req.body.question14 === "") { errors.push(true) }
        if (req.body.question15 === "") { errors.push(true) }
        if (req.body.question16 === "") { errors.push(true) }
        if (req.body.question17 === "") { errors.push(true) }
        if (req.body.question18 === "") { errors.push(true) }
        if (req.body.question19 === "") { errors.push(true) }
        if (req.body.question20 === "") { errors.push(true) }
        if (req.body.question21 === "") { errors.push(true) }
        if (req.body.question22 === "") { errors.push(true) }
        if (req.body.question23 === "") { errors.push(true) }
        if (req.body.question24 === "") { errors.push(true) }
        if (req.body.question25 === "") { errors.push(true) }
        if (req.body.question26 === "") { errors.push(true) }
        if (req.body.question27 === "") { errors.push(true) }
        if (req.body.question28 === "") { errors.push(true) }
        if (req.body.question29 === "") { errors.push(true) }
        if (req.body.question30 === "") { errors.push(true) }
        if (req.body.question31 === "") { errors.push(true) }
        if (req.body.question32 === "") { errors.push(true) }
        if (req.body.question33 === "") { errors.push(true) }
        if (req.body.question34 === "") { errors.push(true) }
        if (req.body.question35 === "") { errors.push(true) }
        if (req.body.question36 === "") { errors.push(true) }
        if (req.body.question37 === "") { errors.push(true) }
        if (req.body.question38 === "") { errors.push(true) }
        if (req.body.question39 === "") { errors.push(true) }
        if (req.body.question40 === "") { errors.push(true) }
        if (req.body.question41 === "") { errors.push(true) }
        if (req.body.question42 === "") { errors.push(true) }
        if (req.body.question43 === "") { errors.push(true) }
        if (req.body.question44 === "") { errors.push(true) }
        if (req.body.question45 === "") { errors.push(true) }
        if (req.body.question46 === "") { errors.push(true) }
        if (req.body.question47 === "") { errors.push(true) }
        if (req.body.question48 === "") { errors.push(true) }
        if (req.body.question49 === "") { errors.push(true) }
        if (req.body.question50 === "") { errors.push(true) }

        if (req.body.answer1 === "") { errors.push(true) }
        if (req.body.answer2 === "") { errors.push(true) }
        if (req.body.answer3 === "") { errors.push(true) }
        if (req.body.answer4 === "") { errors.push(true) }
        if (req.body.answer5 === "") { errors.push(true) }
        if (req.body.answer6 === "") { errors.push(true) }
        if (req.body.answer7 === "") { errors.push(true) }
        if (req.body.answer8 === "") { errors.push(true) }
        if (req.body.answer9 === "") { errors.push(true) }
        if (req.body.answer10 === "") { errors.push(true) }
        if (req.body.answer11 === "") { errors.push(true) }
        if (req.body.answer12 === "") { errors.push(true) }
        if (req.body.answer13 === "") { errors.push(true) }
        if (req.body.answer14 === "") { errors.push(true) }
        if (req.body.answer15 === "") { errors.push(true) }
        if (req.body.answer16 === "") { errors.push(true) }
        if (req.body.answer17 === "") { errors.push(true) }
        if (req.body.answer18 === "") { errors.push(true) }
        if (req.body.answer19 === "") { errors.push(true) }
        if (req.body.answer20 === "") { errors.push(true) }
        if (req.body.answer21 === "") { errors.push(true) }
        if (req.body.answer22 === "") { errors.push(true) }
        if (req.body.answer23 === "") { errors.push(true) }
        if (req.body.answer24 === "") { errors.push(true) }
        if (req.body.answer25 === "") { errors.push(true) }
        if (req.body.answer26 === "") { errors.push(true) }
        if (req.body.answer27 === "") { errors.push(true) }
        if (req.body.answer28 === "") { errors.push(true) }
        if (req.body.answer29 === "") { errors.push(true) }
        if (req.body.answer30 === "") { errors.push(true) }
        if (req.body.answer31 === "") { errors.push(true) }
        if (req.body.answer32 === "") { errors.push(true) }
        if (req.body.answer33 === "") { errors.push(true) }
        if (req.body.answer34 === "") { errors.push(true) }
        if (req.body.answer35 === "") { errors.push(true) }
        if (req.body.answer36 === "") { errors.push(true) }
        if (req.body.answer37 === "") { errors.push(true) }
        if (req.body.answer38 === "") { errors.push(true) }
        if (req.body.answer39 === "") { errors.push(true) }
        if (req.body.answer40 === "") { errors.push(true) }
        if (req.body.answer41 === "") { errors.push(true) }
        if (req.body.answer42 === "") { errors.push(true) }
        if (req.body.answer43 === "") { errors.push(true) }
        if (req.body.answer44 === "") { errors.push(true) }
        if (req.body.answer45 === "") { errors.push(true) }
        if (req.body.answer46 === "") { errors.push(true) }
        if (req.body.answer47 === "") { errors.push(true) }
        if (req.body.answer48 === "") { errors.push(true) }
        if (req.body.answer49 === "") { errors.push(true) }
        if (req.body.answer50 === "") { errors.push(true) }


        console.log(errors);

        return errors.indexOf(true) !== -1;

    }

};

module.exports = validation;
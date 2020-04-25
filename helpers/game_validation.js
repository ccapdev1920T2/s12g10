const { check } = require('express-validator');
const validator = require('validator');

const validation = {

    gameValidation: function () {

        let validation = [

            check('title', 'Game title should contain at least 5 characters and at most 50 characters.').trim().isLength({min: 5, max: 50, ignore_whitespace: true}),

            check('description', 'Game description should contain at least 10 characters and at most 1000 characters.').trim().isLength({min: 10, max: 1000}),

            check('time', 'Game duration should be from 3 to 10 minutes only.').isInt({min: 3, max: 10}),

            check('genre', 'Have at least one genre checked.').isIn(['art', 'business', 'scitech', 'history', 'trivia', 'sports', 'others'])

        ];

        return validation;
    },

    qAndAValidation: function (req) {

        console.log(req.body);

        let errors = [];

        if (req.body.question1 && req.body.question1.trim() === "") { errors.push(true) }
        if (req.body.question2 && req.body.question2.trim() === "") { errors.push(true) }
        if (req.body.question3 && req.body.question3.trim() === "") { errors.push(true) }
        if (req.body.question4 && req.body.question4.trim() === "") { errors.push(true) }
        if (req.body.question5 && req.body.question5.trim() === "") { errors.push(true) }
        if (req.body.question6 && req.body.question6.trim() === "") { errors.push(true) }
        if (req.body.question7 && req.body.question7.trim() === "") { errors.push(true) }
        if (req.body.question8 && req.body.question8.trim() === "") { errors.push(true) }
        if (req.body.question9 && req.body.question9.trim() === "") { errors.push(true) }
        if (req.body.question10 && req.body.question10.trim() === "") { errors.push(true) }
        if (req.body.question11 && req.body.question11.trim() === "") { errors.push(true) }
        if (req.body.question12 && req.body.question12.trim() === "") { errors.push(true) }
        if (req.body.question13 && req.body.question13.trim() === "") { errors.push(true) }
        if (req.body.question14 && req.body.question14.trim() === "") { errors.push(true) }
        if (req.body.question15 && req.body.question15.trim() === "") { errors.push(true) }
        if (req.body.question16 && req.body.question16.trim() === "") { errors.push(true) }
        if (req.body.question17 && req.body.question17.trim() === "") { errors.push(true) }
        if (req.body.question18 && req.body.question18.trim() === "") { errors.push(true) }
        if (req.body.question19 && req.body.question19.trim() === "") { errors.push(true) }
        if (req.body.question20 && req.body.question20.trim() === "") { errors.push(true) }
        if (req.body.question21 && req.body.question21.trim() === "") { errors.push(true) }
        if (req.body.question22 && req.body.question22.trim() === "") { errors.push(true) }
        if (req.body.question23 && req.body.question23.trim() === "") { errors.push(true) }
        if (req.body.question24 && req.body.question24.trim() === "") { errors.push(true) }
        if (req.body.question25 && req.body.question25.trim() === "") { errors.push(true) }
        if (req.body.question26 && req.body.question26.trim() === "") { errors.push(true) }
        if (req.body.question27 && req.body.question27.trim() === "") { errors.push(true) }
        if (req.body.question28 && req.body.question28.trim() === "") { errors.push(true) }
        if (req.body.question29 && req.body.question29.trim() === "") { errors.push(true) }
        if (req.body.question30 && req.body.question30.trim() === "") { errors.push(true) }
        if (req.body.question31 && req.body.question31.trim() === "") { errors.push(true) }
        if (req.body.question32 && req.body.question32.trim() === "") { errors.push(true) }
        if (req.body.question33 && req.body.question33.trim() === "") { errors.push(true) }
        if (req.body.question34 && req.body.question34.trim() === "") { errors.push(true) }
        if (req.body.question35 && req.body.question35.trim() === "") { errors.push(true) }
        if (req.body.question36 && req.body.question36.trim() === "") { errors.push(true) }
        if (req.body.question37 && req.body.question37.trim() === "") { errors.push(true) }
        if (req.body.question38 && req.body.question38.trim() === "") { errors.push(true) }
        if (req.body.question39 && req.body.question39.trim() === "") { errors.push(true) }
        if (req.body.question40 && req.body.question40.trim() === "") { errors.push(true) }
        if (req.body.question41 && req.body.question41.trim() === "") { errors.push(true) }
        if (req.body.question42 && req.body.question42.trim() === "") { errors.push(true) }
        if (req.body.question43 && req.body.question43.trim() === "") { errors.push(true) }
        if (req.body.question44 && req.body.question44.trim() === "") { errors.push(true) }
        if (req.body.question45 && req.body.question45.trim() === "") { errors.push(true) }
        if (req.body.question46 && req.body.question46.trim() === "") { errors.push(true) }
        if (req.body.question47 && req.body.question47.trim() === "") { errors.push(true) }
        if (req.body.question48 && req.body.question48.trim() === "") { errors.push(true) }
        if (req.body.question49 && req.body.question49.trim() === "") { errors.push(true) }
        if (req.body.question50 && req.body.question50.trim() === "") { errors.push(true) }

        if (req.body.answer1 && req.body.answer1.trim() === "") { errors.push(true) }
        if (req.body.answer2 && req.body.answer2.trim() === "") { errors.push(true) }
        if (req.body.answer3 && req.body.answer3.trim() === "") { errors.push(true) }
        if (req.body.answer4 && req.body.answer4.trim() === "") { errors.push(true) }
        if (req.body.answer5 && req.body.answer5.trim() === "") { errors.push(true) }
        if (req.body.answer6 && req.body.answer6.trim() === "") { errors.push(true) }
        if (req.body.answer7 && req.body.answer7.trim() === "") { errors.push(true) }
        if (req.body.answer8 && req.body.answer8.trim() === "") { errors.push(true) }
        if (req.body.answer9 && req.body.answer9.trim() === "") { errors.push(true) }
        if (req.body.answer10 && req.body.answer10.trim() === "") { errors.push(true) }
        if (req.body.answer11 && req.body.answer11.trim() === "") { errors.push(true) }
        if (req.body.answer12 && req.body.answer12.trim() === "") { errors.push(true) }
        if (req.body.answer13 && req.body.answer13.trim() === "") { errors.push(true) }
        if (req.body.answer14 && req.body.answer14.trim() === "") { errors.push(true) }
        if (req.body.answer15 && req.body.answer15.trim() === "") { errors.push(true) }
        if (req.body.answer16 && req.body.answer16.trim() === "") { errors.push(true) }
        if (req.body.answer17 && req.body.answer17.trim() === "") { errors.push(true) }
        if (req.body.answer18 && req.body.answer18.trim() === "") { errors.push(true) }
        if (req.body.answer19 && req.body.answer19.trim() === "") { errors.push(true) }
        if (req.body.answer20 && req.body.answer20.trim() === "") { errors.push(true) }
        if (req.body.answer21 && req.body.answer21.trim() === "") { errors.push(true) }
        if (req.body.answer22 && req.body.answer22.trim() === "") { errors.push(true) }
        if (req.body.answer23 && req.body.answer23.trim() === "") { errors.push(true) }
        if (req.body.answer24 && req.body.answer24.trim() === "") { errors.push(true) }
        if (req.body.answer25 && req.body.answer25.trim() === "") { errors.push(true) }
        if (req.body.answer26 && req.body.answer26.trim() === "") { errors.push(true) }
        if (req.body.answer27 && req.body.answer27.trim() === "") { errors.push(true) }
        if (req.body.answer28 && req.body.answer28.trim() === "") { errors.push(true) }
        if (req.body.answer29 && req.body.answer29.trim() === "") { errors.push(true) }
        if (req.body.answer30 && req.body.answer30.trim() === "") { errors.push(true) }
        if (req.body.answer31 && req.body.answer31.trim() === "") { errors.push(true) }
        if (req.body.answer32 && req.body.answer32.trim() === "") { errors.push(true) }
        if (req.body.answer33 && req.body.answer33.trim() === "") { errors.push(true) }
        if (req.body.answer34 && req.body.answer34.trim() === "") { errors.push(true) }
        if (req.body.answer35 && req.body.answer35.trim() === "") { errors.push(true) }
        if (req.body.answer36 && req.body.answer36.trim() === "") { errors.push(true) }
        if (req.body.answer37 && req.body.answer37.trim() === "") { errors.push(true) }
        if (req.body.answer38 && req.body.answer38.trim() === "") { errors.push(true) }
        if (req.body.answer39 && req.body.answer39.trim() === "") { errors.push(true) }
        if (req.body.answer40 && req.body.answer40.trim() === "") { errors.push(true) }
        if (req.body.answer41 && req.body.answer41.trim() === "") { errors.push(true) }
        if (req.body.answer42 && req.body.answer42.trim() === "") { errors.push(true) }
        if (req.body.answer43 && req.body.answer43.trim() === "") { errors.push(true) }
        if (req.body.answer44 && req.body.answer44.trim() === "") { errors.push(true) }
        if (req.body.answer45 && req.body.answer45.trim() === "") { errors.push(true) }
        if (req.body.answer46 && req.body.answer46.trim() === "") { errors.push(true) }
        if (req.body.answer47 && req.body.answer47.trim() === "") { errors.push(true) }
        if (req.body.answer48 && req.body.answer48.trim() === "") { errors.push(true) }
        if (req.body.answer49 && req.body.answer49.trim() === "") { errors.push(true) }
        if (req.body.answer50 && req.body.answer50.trim() === "") { errors.push(true) }


        console.log(errors);

        return errors.indexOf(true) !== -1;

    }

};

module.exports = validation;
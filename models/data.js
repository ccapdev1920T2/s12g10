const db = require("./db");

const Game = require("./Game");
const User = require("./User");
const Item = require("./Item");
const Attempt = require("./Attempt");

data = {

    users: [
        {
            name: 'Sean Doe',
            email: 'seandoe@mnemosis.com',
            password: 'admin',
            user_image: 'media/Logo Full',
            is_admin: true
        },
        {
            name: 'Rocky Gervais',
            email: 'rocky@hfpa.com',
            password: 'goldenglobes',
            user_image: 'media/icon',
            is_admin: false
        },
        {
            name: 'Helen Degenerez',
            email: 'ellen@ellen.com',
            password: 'iloveporti@',
            user_image: 'media/icon',
            is_admin: false
        },
        {
            name: 'Nyron Bill',
            email: 'nyronbill@gmail.com',
            password: 'p@55w0rd',
            user_image: 'media/icon',
            is_admin: false
        },
        {
            name: 'Joseph Uy',
            email: 'joseph_uy@gmail.com',
            password: 'zyxwvutsrqp',
            user_image: 'media/icon',
            is_admin: false
        },
        {
            name: 'Dustin Blumentritt',
            email: 'dustin.blumentritt@gmail.com',
            password: '6!is120',
            user_image: 'media/icon',
            is_admin: false
        },
    ],
    games: [
        {
            genres: ["trivia"],
            image: "media/coversamples/1.jpg",
            title: "25 Things We Learned in 2019",
            description: "Can you fill in the blanks for the things we learned in 2019?",
            creator: "sampleauthorxd"
        },
        {
            genres: ["trivia", "others"],
            image: "media/coversamples/2.jpg",
            title: "Unique Harry Potter Film Characters",
            description: "Can you pick which Harry Potter film each of these characters appeared in?",
            creator: "admin-001d"
        },
        {
            genres: ["general", "trivia"],
            image: "media/coversamples/3.jpg",
            title: "Odd But True Facts",
            description: "Can you match the two parts of these odd facts?",
            creator: "mcqueenkachow"
        },
        {
            genres: ["art", "others"],
            image: "media/coversamples/4.jpg",
            title: "Literary Couples",
            description: "Can you pick the couples that originated in works of literature without picking any that originated on TV shows?",
            creator: "chickenjoy77"
        },
        {
            genres: ["sports"],
            image: "media/coversamples/5.jpg",
            title: "Italian Soccer Players",
            description: "There are no Marios in this quiz, but there is one Gianluigi.",
            creator: "kungpaoch1cken"
        },
        {
            genres: ["general"],
            image: "media/coversamples/6.jpg",
            title: "40 in 4",
            description: "Can you name the answers to these 40 general knowledge questions in 4 minutes?",
            creator: "sini_gang"
        },
        {
            genres: ["trivia"],
            image: "media/coversamples/7.jpg",
            title: "Name the Business by Logo",
            description: "Can you name the franchise from one letter of their logo?",
            creator: "grant_palmosd"
        },
        {
            genres: ["trivia", "others"],
            image: "media/coversamples/8.jpg",
            title: "Artist by Painting",
            description: "Can you name the artist from a close-up of their famous painting?",
            creator: "pamela1d"
        },
        {
            genres: ["general", "trivia"],
            image: "media/coversamples/9.jpg",
            title: "Finish the Athlete",
            description: "Can you choose the image that completes the name of each athlete?",
            creator: "looniew"
        },
        {
            genres: ["art", "others"],
            image: "media/coversamples/10.jpg",
            title: "'E' TV Character Match",
            description: "Can you match the TV shows with their 'E' characters?",
            creator: "patrickcai7"
        },
        {
            genres: ["sports"],
            image: "media/coversamples/11.jpg",
            title: "Art Movements",
            description: "Can you name the art movements?",
            creator: "pamela2n"
        },
        {
            genres: ["general"],
            image: "media/coversamples/12.jpg",
            title: "True or False: Science",
            description: "Can you name the correct answers to these statements related to science?",
            creator: "alexaandrag"
        },
        {
            genres: ["general"],
            image: "media/coversamples/13.jpg",
            title: "Animals by Emoji",
            description: "Can you name these animals by their emoji representations?",
            creator: "yuumeg"
        },
        {
            genres: ["general"],
            image: "media/coversamples/14.jpg",
            title: "Who Wants to Be a Millionaire?",
            description: "Can you choose the correct answers to each question from John Carpenter's winning game of 'Who Wants to Be a Millionaire'?",
            creator: "pamela3g"
        },
        {
            genres: ["general"],
            image: "media/coversamples/15.jpg",
            title: "Let's do some history!",
            description: "Test your history knowledge with with questions from the 1900s!",
            creator: "mimiyuhhhh"
        }
    ],
    attempts: [],
    items: []

};

module.exports = function () {

    db.findMany(Game, {}, null, function (result) {
        if (result.length === 0) {
            db.insertMany(Game, data.games);
        } else {
            console.log("Game data found");
        }
    });

    db.findMany(User, {}, null, function (result) {
        if (result.length === 0) {
            db.insertMany(User, data.users);
        } else {
            console.log("User data found");
        }
    });

};
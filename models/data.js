const db = require("./db");
const mongoose = require('mongoose');

const Game = require("./Game");
const User = require("./User");
const Item = require("./Item");
const Attempt = require("./Attempt");

data = {

    users: [
        {
            _id: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d5'),
            name: 'Sean Doe',
            birthday: new Date ("January 1, 1990"),
            gender: "Male",
            email: 'seandoe@mnemosis.com',
            password: 'admin',
            user_image: 'media/Logo Full',
            is_admin: true
        },
        {
            _id: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d6'),
            name: 'Tina Pay',
            birthday: new Date ("February 2, 1990"),
            gender: "Female",
            email: 'rocky@hfpa.com',
            password: 'goldenglobes',
            user_image: 'media/icon.png',
            is_admin: false
        },
        {
            _id: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d7'),
            name: 'Amy Puller',
            birthday: new Date ("March 3, 1990"),
            gender: "Female",
            email: 'ellen@ellen.com',
            password: 'iloveporti@',
            user_image: 'media/icon.png',
            is_admin: false
        },
        {
            _id: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d8'),
            name: 'Nyron Bill',
            birthday: new Date ("April 4, 1990"),
            gender: "Male",
            email: 'nyronbill@gmail.com',
            password: 'p@55w0rd',
            user_image: 'media/icon.png',
            is_admin: false
        },
        {
            _id: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d9'),
            name: 'Joseph Uy',
            birthday: new Date ("May 5, 1990"),
            gender: "Male",
            email: 'joseph_uy@gmail.com',
            password: 'zyxwvutsrqp',
            user_image: 'media/icon.png',
            is_admin: false
        },
        {
            _id: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26e0'),
            name: 'Dustin Blumentritt',
            birthday: new Date ("June 6, 1990"),
            gender: "Male",
            email: 'dustin.blumentritt@gmail.com',
            password: '6!is120',
            user_image: 'media/icon.png',
            is_admin: false
        },
    ],
    games: [
        {
            _id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35"),
            title: "20 Things We Learned in 2019",
            description: "Can you fill in the blanks for the things we learned in 2019?",
            game_image: "media/coversamples/1.jpg",
            genres: ["trivia"],
            time: 6,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d5')
        },
        {
            _id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd36"),
            title: "Unique Harry Potter Film Characters",
            description: "Can you pick which Harry Potter film each of these characters appeared in?",
            game_image: "media/coversamples/2.jpg",
            genres: ["trivia", "others"],
            time: 4,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d5')
        },
        {
            _id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd37"),
            title: "Odd But True Facts",
            description: "Can you match the two parts of these odd facts?",
            game_image: "media/coversamples/3.jpg",
            genres: ["general", "trivia"],
            time: 5,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d6')
        },
        {
            _id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd38"),
            title: "Literary Couples",
            description: "Can you pick the couples that originated in works of literature without picking any that originated on TV shows?",
            game_image: "media/coversamples/4.jpg",
            genres: ["art", "others"],
            time: 8,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d5')
        },
        {
            _id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd39"),
            title: "Italian Soccer Players",
            description: "There are no Marios in this quiz, but there is one Gianluigi.",
            game_image: "media/coversamples/5.jpg",
            genres: ["sports"],
            time: 4,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d7')
        },
        {
            _id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd40"),
            title: "40 in 4",
            description: "Can you name the answers to these 40 general knowledge questions in 4 minutes?",
            game_image: "media/coversamples/6.jpg",
            genres: ["general"],
            time: 4,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d7')
        },
        {
            
            _id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd41"),
            title: "Name the Business by Logo",
            description: "Can you name the franchise from one letter of their logo?",
            game_image: "media/coversamples/7.jpg",
            genres: ["trivia"],
            time: 10,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d7')
        },
        {
            _id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd42"),
            title: "Artist by Painting",
            description: "Can you name the artist based only from a painting's name?",
            game_image: "media/coversamples/8.jpg",
            genres: ["trivia", "others"],
            time: 10,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d5')
        },
        {
            _id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd43"),
            title: "Finish the Athlete",
            description: "Can you choose the word that completes the name of each athlete?",
            game_image: "media/coversamples/9.jpg",
            genres: ["general", "trivia"],
            time: 10,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d7')
        },
        {
            _id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd44"),
            title: "'E' TV Character Match",
            description: "Can you match the TV shows with their 'E' characters?",
            game_image: "media/coversamples/10.jpg",
            genres: ["art", "others"],
            time: 6,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d5')
        },
        {
            _id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd45"),
            title: "Art Movements",
            description: "Can you name the art movements?",
            game_image: "media/coversamples/11.jpg",
            genres: ["sports"],
            time: 7,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d6')
        },
        {
            _id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd46"),
            title: "True or False: Science",
            description: "Can you name the correct answers to these statements related to science?",
            game_image: "media/coversamples/12.jpg",
            genres: ["general"],
            time: 5,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d5')
        },
        {
            _id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd47"),
            title: "Animals by Emoji",
            description: "Can you name these animals by their emoji representations?",
            game_image: "media/coversamples/13.jpg",
            genres: ["general"],
            time: 10,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d7')
        },
        {
            _id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd48"),
            title: "Who Wants to Be a Millionaire?",
            description: "Can you choose the correct answers to each question from John Carpenter's winning game of 'Who Wants to Be a Millionaire'?",
            game_image: "media/coversamples/14.jpg",
            genres: ["general"],
            time: 9,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d7')
        },
        {
            _id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd49"),
            title: "Let's do some history!",
            description: "Test your history knowledge with with questions from the 1900s!",
            game_image: "media/coversamples/15.jpg",
            genres: ["general"],
            time: 10,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d6')
        }
    ],
    attempts: [

    ],
    items: [
        {
            question: "A gene linked to ___ habits may influence who you choose to marry.",
            answer: "alcohol",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "____ munching caterpillars may do so to prevent being eaten.",
            answer: "arsenic",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Low gravity in space made some astronauts' ____ flow backwards.",
            answer: "blood",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "____ before doing something may make you better at it.",
            answer: "breathing in",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Monkeys seem to prefer ____ after a scary experience.",
            answer: "company",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Blasting lead with 160 lasers makes it incredibly strong before ___.",
            answer: "exploding",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Rabbits that don't eat their ____ are small and weak",
            answer: "feces",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Exposing cheese to ____ could give it more flavor.",
            answer: "hip hop",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Orangutan mothers tell infants where to go by _____.",
            answer: "scratching",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Brain scans reveal actors lose their sense of ____ when acting a role.",
            answer: "self",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Bees are better at ____ if they are penalized for their mistakes",
            answer: "counting",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Jupiter's great red spot is healthy despite looking like it's ____.",
            answer: "dying",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "____ helps female fruit flies remember things better.",
            answer: "semen",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Babies are less afraid when they can ____ their mothers.",
            answer: "smell",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Tombs in China reveal humans were ____ 2500 years ago",
            answer: "smoking cannabis",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Weird repeating signals from deep space may be created by ____.",
            answer: "starquakes",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Staring down seagulls can stop them _____ your fries.",
            answer: "stealing",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Neanderthals spent a surprising amount of time ____.",
            answer: "underwater",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Life may have begun with simple genes made out of ____.",
            answer: "urine",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Pitcher plants are regularly eating ____.",
            answer: "vertebrates",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Rolanda Hooch",
            answer: "Harry Potter and the Philosopher's Stone",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd36")
        },
        {
            question: "Colin Creevey",
            answer: "Harry Potter and the Chamber of Secrets",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd36")
        },
        {
            question: "Marge Dursley",
            answer: "Harry Potter and the Prisoner of Azkaban",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd36")
        },
        {
            question: "Barty Crouch Sr.",
            answer: "Harry Potter and the Goblet of Fire",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd36")
        },
        {
            question: "Grawp",
            answer: "Harry Potter and the Order of the Phoenix",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd36")
        },
        {
            question: "Marcus Belby",
            answer: "Harry Potter and the Half-Blood Prince",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd36")
        },
        {
            question: "Xenophilius Lovegood",
            answer: "Harry Potter and the Deathly Hallows - Part 1",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd36")
        },
        {
            question: "James Sirius Potter",
            answer: "Harry Potter and the Deathly Hallows - Part 2",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd36")
        },
        {
            question: "The last English woman tried for witchcraft was convicted in...",
            answer: "1944",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd37")
        },
        {
            question: "The 1960s US TV show 'Lost in Space ' was set in...",
            answer: "1997",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd37")
        },
        {
            question: "In 2013, nine babies born in the UK were named...",
            answer: "Cheese",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd37")
        },
        {
            question: "On average, in their lifetimes Britons will eat 1,126...",
            answer: "Chickens",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd37")
        },
        {
            question: "In French Harry Potter books, Voldemort's middle name is...",
            answer: "Elvis",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd37")
        },
        {
            question: "By 2019, there will be fewer people in the world than...",
            answer: "LEGOs",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd37")
        },
        {
            question: "Queen Elizabeth I of England invented the...",
            answer: "Gingerbread Man",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd37")
        },
        {
            question: "Lenin owned nine...",
            answer: "Rolls-Royces",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd37")
        },
        {
            question: "As a child, Mozart was terrified of...",
            answer: "Trumpets",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd37")
        },
        {
            question: "A cat's brain can store 1,000 times more data than an...",
            answer: "iPad",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd37")
        }
    ]
    
};

module.exports = function () {

    db.findMany(User, {}, null, function (result) {
        if (result.length === 0) {
            db.insertMany(User, data.users);
        } else {
            console.log("User data found");
        }
    });

    db.findMany(Game, {}, null, function (result) {
        if (result.length === 0) {
            db.insertMany(Game, data.games);
        } else {
            console.log("Game data found");
        }
    });

    db.findMany(Item, {}, null, function (result) {
        if (result.length === 0) {
            db.insertMany(Item, data.items);
        } else {
            console.log("Item data found");
        }
    });

    db.findMany(Attempt, {}, null, function (result) {
        if (result.length === 0) {
            db.insertMany(Attempt, data.attempts);
        } else {
            console.log("Attempt data found");
        }
    });
};
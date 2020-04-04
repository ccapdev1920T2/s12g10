const db = require("./db");
const mongoose = require('mongoose');

const Game = require("./Game");
const User = require("./User");
const Item = require("./Item");
const Attempt = require("./Attempt");

data = {

    users: [
        {
            name: 'Sean Doe',
            birthday: new Date ("January 1, 1990"),
            gender: "Male",
            email: 'seandoe@mnemosis.com',
            password: 'admin',
            user_image: 'media/Logo Full',
            is_admin: true
        },
        {
            name: 'Tina Pay',
            birthday: new Date ("February 2, 1990"),
            gender: "Female",
            email: 'rocky@hfpa.com',
            password: 'goldenglobes',
            user_image: 'media/icon.png',
            is_admin: false
        },
        {
            name: 'Amy Puller',
            birthday: new Date ("March 3, 1990"),
            gender: "Female",
            email: 'ellen@ellen.com',
            password: 'iloveporti@',
            user_image: 'media/icon.png',
            is_admin: false
        },
        {
            name: 'Nyron Bill',
            birthday: new Date ("April 4, 1990"),
            gender: "Male",
            email: 'nyronbill@gmail.com',
            password: 'p@55w0rd',
            user_image: 'media/icon.png',
            is_admin: false
        },
        {
            name: 'Joseph Uy',
            birthday: new Date ("May 5, 1990"),
            gender: "Male",
            email: 'joseph_uy@gmail.com',
            password: 'zyxwvutsrqp',
            user_image: 'media/icon.png',
            is_admin: false
        },
        {
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
            title: "20 Things We Learned in 2019",
            description: "Can you fill in the blanks for the things we learned in 2019?",
            game_image: "media/coversamples/1.jpg",
            genres: ["trivia"],
            time: 6,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d5')
        },
        {
            title: "Unique Harry Potter Film Characters",
            description: "Can you pick which Harry Potter film each of these characters appeared in?",
            game_image: "media/coversamples/2.jpg",
            genres: ["trivia", "others"],
            time: 4,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d5')
        },
        {
            title: "Odd But True Facts",
            description: "Can you match the two parts of these odd facts?",
            game_image: "media/coversamples/3.jpg",
            genres: ["general", "trivia"],
            time: 7,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d6')
        },
        {
            title: "Literary Couples",
            description: "Can you pick the couples that originated in works of literature without picking any that originated on TV shows?",
            game_image: "media/coversamples/4.jpg",
            genres: ["art", "others"],
            time: 8,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d5')
        },
        {
            title: "Italian Soccer Players",
            description: "There are no Marios in this quiz, but there is one Gianluigi.",
            game_image: "media/coversamples/5.jpg",
            genres: ["sports"],
            time: 4,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d7')
        },
        {
            title: "40 in 4",
            description: "Can you name the answers to these 40 general knowledge questions in 4 minutes?",
            game_image: "media/coversamples/6.jpg",
            genres: ["general"],
            time: 4,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d7')
        },
        {
            title: "Name the Business by Logo",
            description: "Can you name the franchise from one letter of their logo?",
            game_image: "media/coversamples/7.jpg",
            genres: ["trivia"],
            time: 10,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d7')
        },
        {
            title: "Artist by Painting",
            description: "Can you name the artist based only from a painting's name?",
            game_image: "media/coversamples/8.jpg",
            genres: ["trivia", "others"],
            time: 10,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d5')
        },
        {
            title: "Finish the Athlete",
            description: "Can you choose the word that completes the name of each athlete?",
            game_image: "media/coversamples/9.jpg",
            genres: ["general", "trivia"],
            time: 10,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d7')
        },
        {
            title: "'E' TV Character Match",
            description: "Can you match the TV shows with their 'E' characters?",
            game_image: "media/coversamples/10.jpg",
            genres: ["art", "others"],
            time: 6,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d5')
        },
        {
            title: "Art Movements",
            description: "Can you name the art movements?",
            game_image: "media/coversamples/11.jpg",
            genres: ["sports"],
            time: 7,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d6')
        },
        {
            title: "True or False: Science",
            description: "Can you name the correct answers to these statements related to science?",
            game_image: "media/coversamples/12.jpg",
            genres: ["general"],
            time: 5,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d5')
        },
        {
            title: "Animals by Emoji",
            description: "Can you name these animals by their emoji representations?",
            game_image: "media/coversamples/13.jpg",
            genres: ["general"],
            time: 10,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d7')
        },
        {
            title: "Who Wants to Be a Millionaire?",
            description: "Can you choose the correct answers to each question from John Carpenter's winning game of 'Who Wants to Be a Millionaire'?",
            game_image: "media/coversamples/14.jpg",
            genres: ["general"],
            time: 9,
            creator: new mongoose.Types.ObjectId('5e886efb1c9d5f1d0c6c26d7')
        },
        {
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
            question: "A gene linked to _______ habits may influence who you choose to marry.",
            answer: "alcohol",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "________ munching caterpillars may do so to prevent being eaten.",
            answer: "arsenic",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Low gravity in space made some astronauts' _______ flow backwards.",
            answer: "blood",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "_______ before doing something may make you better at it.",
            answer: "breathing in",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Monkeys seem to prefer ________ after a scary experience.",
            answer: "company",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Blasting lead with 160 lasers makes it incredibly strong before _______.",
            answer: "exploding",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Rabbits that don't eat their _______ are small and weak",
            answer: "feces",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "Exposing cheese to _______ could give it more flavor.",
            answer: "hip hop",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "A gene linked to _______ habits may influence who you choose to marry.",
            answer: "alcohol",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "A gene linked to _______ habits may influence who you choose to marry.",
            answer: "alcohol",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "A gene linked to _______ habits may influence who you choose to marry.",
            answer: "alcohol",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "A gene linked to _______ habits may influence who you choose to marry.",
            answer: "alcohol",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "A gene linked to _______ habits may influence who you choose to marry.",
            answer: "alcohol",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "A gene linked to _______ habits may influence who you choose to marry.",
            answer: "alcohol",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "A gene linked to _______ habits may influence who you choose to marry.",
            answer: "alcohol",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "A gene linked to _______ habits may influence who you choose to marry.",
            answer: "alcohol",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "A gene linked to _______ habits may influence who you choose to marry.",
            answer: "alcohol",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "A gene linked to _______ habits may influence who you choose to marry.",
            answer: "alcohol",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "A gene linked to _______ habits may influence who you choose to marry.",
            answer: "alcohol",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
        },
        {
            question: "A gene linked to _______ habits may influence who you choose to marry.",
            answer: "alcohol",
            game_id: new mongoose.Types.ObjectId("5e8871830bfd4642bc76cd35")
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
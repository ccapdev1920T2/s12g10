const db = require("./db");
const mongoose = require('mongoose');

const Game = require("./Game");
const User = require("./User");
const Item = require("./Item");
const Attempt = require("./Attempt");

data = {

    users: [
        {
            _id: new mongoose.Types.ObjectId('000000000000000000000001'),
            name: 'Sean Doe',
            birthday: new Date ("January 1, 1990"),
            gender: "Male",
            email: 'seandoe@mnemosis.com',
            password: 'admin',
            user_image: 'media/Logo Full',
            is_admin: true
        },
        {
            _id: new mongoose.Types.ObjectId('000000000000000000000002'),
            name: 'Tina Pay',
            birthday: new Date ("February 2, 1990"),
            gender: "Female",
            email: 'rocky@hfpa.com',
            password: 'goldenglobes',
            user_image: 'media/icon.png',
            is_admin: false
        },
        {
            _id: new mongoose.Types.ObjectId('000000000000000000000003'),
            name: 'Amy Puller',
            birthday: new Date ("March 3, 1990"),
            gender: "Female",
            email: 'ellen@ellen.com',
            password: 'iloveporti@',
            user_image: 'media/icon.png',
            is_admin: false
        },
        {
            _id: new mongoose.Types.ObjectId('000000000000000000000004'),
            name: 'Nyron Bill',
            birthday: new Date ("April 4, 1990"),
            gender: "Male",
            email: 'nyronbill@gmail.com',
            password: 'p@55w0rd',
            user_image: 'media/icon.png',
            is_admin: false
        },
        {
            _id: new mongoose.Types.ObjectId('000000000000000000000005'),
            name: 'Joseph Uy',
            birthday: new Date ("May 5, 1990"),
            gender: "Male",
            email: 'joseph_uy@gmail.com',
            password: 'zyxwvutsrqp',
            user_image: 'media/icon.png',
            is_admin: false
        },
        {
            _id: new mongoose.Types.ObjectId('000000000000000000000006'),
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
            _id: new mongoose.Types.ObjectId("111111111111000000000001"),
            title: "20 Things We Learned in 2019",
            description: "Can you fill in the blanks for the things we learned in 2019?",
            game_image: "media/coversamples/1.jpg",
            genres: ["history", "trivia"],
            time: 6,
            creator: new mongoose.Types.ObjectId('000000000000000000000001')
        },
        {
            _id: new mongoose.Types.ObjectId("111111111111000000000002"),
            title: "Unique Harry Potter Film Characters",
            description: "Can you pick which Harry Potter film each of these characters appeared in?",
            game_image: "media/coversamples/2.jpg",
            genres: ["trivia", "others"],
            time: 4,
            creator: new mongoose.Types.ObjectId('000000000000000000000001')
        },
        {
            _id: new mongoose.Types.ObjectId("111111111111000000000003"),
            title: "Odd But True Facts",
            description: "Can you match the two parts of these odd facts?",
            game_image: "media/coversamples/3.jpg",
            genres: ["trivia"],
            time: 5,
            creator: new mongoose.Types.ObjectId('000000000000000000000002')
        },
        {
            _id: new mongoose.Types.ObjectId("111111111111000000000004"),
            title: "Pokedex Party (easy)",
            description: "Name all the pokemon who come first and last on their regional pokedex",
            game_image: "media/coversamples/4.jpg",
            genres: ["trivia", "others"],
            time: 5,
            creator: new mongoose.Types.ObjectId('000000000000000000000001')
        },
        {
            _id: new mongoose.Types.ObjectId("111111111111000000000005"),
            title: "Pokedex Party (hard)",
            description: "Name all the pokemon who come first and last on their pokedex. This harder version of Pokedex Party includes pokedex expansions and subsets introduced in the games as well as the Pokemon Ranger pokedex!",
            game_image: "media/coversamples/5.jpg",
            genres: ["trivia", "others"],
            time: 10,
            creator: new mongoose.Types.ObjectId('000000000000000000000003')
        },
        {
            _id: new mongoose.Types.ObjectId("111111111111000000000006"),
            title: "From ABC to History in 8 minutes",
            description: "Get some world history trivia with all answers starting from a unique letter of the alphabet. Take note that if the answer is a name, only one of the names (first name, surname, etc.) may start with the unique letter.",
            game_image: "media/coversamples/6.jpg",
            genres: ["history"],
            time: 8,
            creator: new mongoose.Types.ObjectId('000000000000000000000003')
        },
        {
            
            _id: new mongoose.Types.ObjectId("111111111111000000000007"),
            title: "The Alphabet of Business",
            description: "Can you name the trademarked products of famous brands that you commonly use everyday? Clue! Answers start in A, E, J, S, and Z!",
            game_image: "media/coversamples/7.jpg",
            genres: ["business"],
            time: 3,
            creator: new mongoose.Types.ObjectId('000000000000000000000003')
        },
        {
            _id: new mongoose.Types.ObjectId("111111111111000000000008"),
            title: "Artist by Painting",
            description: "Can you name the artist based only from a painting's name?",
            game_image: "media/coversamples/8.jpg",
            genres: ["art", "trivia", "others"],
            time: 10,
            creator: new mongoose.Types.ObjectId('000000000000000000000001')
        },
        {
            _id: new mongoose.Types.ObjectId("111111111111000000000009"),
            title: "Finish the Athlete",
            description: "Can you choose the word that completes the name of each athlete?",
            game_image: "media/coversamples/9.jpg",
            genres: ["sports"],
            time: 4,
            creator: new mongoose.Types.ObjectId('000000000000000000000003')
        },
        {
            _id: new mongoose.Types.ObjectId("11111111111100000000000a"),
            title: "'E' TV Character Match",
            description: "Did you know that E is the most used vowel in the English language? I didn't either! Can you guess the first name of the characters from these TV shows? Hint! They all start with E!",
            game_image: "media/coversamples/10.jpg",
            genres: ["others"],
            time: 5,
            creator: new mongoose.Types.ObjectId('000000000000000000000001')
        },
        {
            _id: new mongoose.Types.ObjectId("11111111111100000000000b"),
            title: "Art Movements",
            description: "Artist much?! Name the art movements given the the notable artist!",
            game_image: "media/coversamples/11.jpg",
            genres: ["art"],
            time: 7,
            creator: new mongoose.Types.ObjectId('000000000000000000000002')
        },
        {
            _id: new mongoose.Types.ObjectId("11111111111100000000000c"),
            title: "Complete the Sentence: Science Edition!",
            description: "No research allowed! Channel your inner Becquerel and answer the following science questions!",
            game_image: "media/coversamples/12.jpg",
            genres: ["scitech", "history", "trivia", "others"],
            time: 7,
            creator: new mongoose.Types.ObjectId('000000000000000000000001')
        },
        {
            _id: new mongoose.Types.ObjectId("11111111111100000000000d"),
            title: "Let's get chemical!",
            description: "Can you name every 10th chemical element from the periodic table?",
            game_image: "media/coversamples/13.jpg",
            genres: ["scitech"],
            time: 4,
            creator: new mongoose.Types.ObjectId('000000000000000000000003')
        },
        {
            _id: new mongoose.Types.ObjectId("11111111111100000000000e"),
            title: "Volleyball Superstars by the Country",
            description: "Spikers up! Can you name the famous volleyball superstars given their country, initials, and position?",
            game_image: "media/coversamples/14.jpg",
            genres: ["sports"],
            time: 9,
            creator: new mongoose.Types.ObjectId('000000000000000000000003')
        },
        {
            _id: new mongoose.Types.ObjectId("11111111111100000000000f"),
            title: "Big Four Sports: True or False!",
            description: "Can you guess if this US city has their own team for hockey, baseball, basketball, and football?",
            game_image: "media/coversamples/15.jpg",
            genres: ["sports", "others"],
            time: 6,
            creator: new mongoose.Types.ObjectId('000000000000000000000002')
        },
        {
            _id: new mongoose.Types.ObjectId("111111111111000000000010"),
            title: "Band or Law Firm",
            description: "In a battle of brains and brawns, can you figure out which of the following groups are American bands or American law firms?",
            game_image: "media/coversamples/10.jpg",
            genres: ["business", "others"],
            time: 8,
            creator: new mongoose.Types.ObjectId('000000000000000000000001')
        },
        {
            _id: new mongoose.Types.ObjectId("111111111111000000000011"),
            title: "2000s Billboard Top 100",
            description: "Can you guess the artist whose song(s) reached number 1 on the Billboard Hot 100 in the 2000s?",
            game_image: "media/coversamples/11.jpg",
            genres: ["art", "others"],
            time: 4,
            creator: new mongoose.Types.ObjectId('000000000000000000000002')
        },
        {
            _id: new mongoose.Types.ObjectId("111111111111000000000012"),
            title: "Say Hello in 10 Languages",
            description: "Time to get your geek on and determine which programming language prints the iconic \"Hello World\" this way!",
            game_image: "media/coversamples/12.jpg",
            genres: ["scitech", "others"],
            time: 6,
            creator: new mongoose.Types.ObjectId('000000000000000000000001')
        },
        {
            _id: new mongoose.Types.ObjectId("111111111111000000000013"),
            title: "To the Top!",
            description: "Can you name the team in Haikyuu based on their color scheme?",
            game_image: "media/coversamples/13.jpg",
            genres: ["sports", "others"],
            time: 4,
            creator: new mongoose.Types.ObjectId('000000000000000000000003')
        },
        {
            _id: new mongoose.Types.ObjectId("111111111111000000000014"),
            title: "Just Before the Finish Line",
            description: "The following presidents all did not finish their terms. Can you guess whether they (A) died in office, (B) were assassinated, or (C) resigned? Enter the letter of your choice only.",
            game_image: "media/coversamples/14.jpg",
            genres: ["history"],
            time: 9,
            creator: new mongoose.Types.ObjectId('000000000000000000000003')
        },
    ],
    items: [
        {
            question: "A gene linked to ___ habits may influence who you choose to marry.",
            answer: "alcohol",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "____ munching caterpillars may do so to prevent being eaten.",
            answer: "arsenic",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "Low gravity in space made some astronauts' ____ flow backwards.",
            answer: "blood",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "____ before doing something may make you better at it.",
            answer: "breathing in",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "Monkeys seem to prefer ____ after a scary experience.",
            answer: "company",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "Blasting lead with 160 lasers makes it incredibly strong before ___.",
            answer: "exploding",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "Rabbits that don't eat their ____ are small and weak",
            answer: "feces",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "Exposing cheese to ____ could give it more flavor.",
            answer: "hip hop",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "Orangutan mothers tell infants where to go by _____.",
            answer: "scratching",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "Brain scans reveal actors lose their sense of ____ when acting a role.",
            answer: "self",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "Bees are better at ____ if they are penalized for their mistakes",
            answer: "counting",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "Jupiter's great red spot is healthy despite looking like it's ____.",
            answer: "dying",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "____ helps female fruit flies remember things better.",
            answer: "semen",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "Babies are less afraid when they can ____ their mothers.",
            answer: "smell",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "Tombs in China reveal humans were ____ 2500 years ago",
            answer: "smoking cannabis",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "Weird repeating signals from deep space may be created by ____.",
            answer: "starquakes",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "Staring down seagulls can stop them _____ your fries.",
            answer: "stealing",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "Neanderthals spent a surprising amount of time ____.",
            answer: "underwater",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "Life may have begun with simple genes made out of ____.",
            answer: "urine",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "Pitcher plants are regularly eating ____.",
            answer: "vertebrates",
            game_id: new mongoose.Types.ObjectId("111111111111000000000001")
        },
        {
            question: "Rolanda Hooch",
            answer: "Harry Potter and the Philosopher's Stone",
            game_id: new mongoose.Types.ObjectId("111111111111000000000002")
        },
        {
            question: "Colin Creevey",
            answer: "Harry Potter and the Chamber of Secrets",
            game_id: new mongoose.Types.ObjectId("111111111111000000000002")
        },
        {
            question: "Marge Dursley",
            answer: "Harry Potter and the Prisoner of Azkaban",
            game_id: new mongoose.Types.ObjectId("111111111111000000000002")
        },
        {
            question: "Barty Crouch Sr.",
            answer: "Harry Potter and the Goblet of Fire",
            game_id: new mongoose.Types.ObjectId("111111111111000000000002")
        },
        {
            question: "Grawp",
            answer: "Harry Potter and the Order of the Phoenix",
            game_id: new mongoose.Types.ObjectId("111111111111000000000002")
        },
        {
            question: "Marcus Belby",
            answer: "Harry Potter and the Half-Blood Prince",
            game_id: new mongoose.Types.ObjectId("111111111111000000000002")
        },
        {
            question: "Xenophilius Lovegood",
            answer: "Harry Potter and the Deathly Hallows - Part 1",
            game_id: new mongoose.Types.ObjectId("111111111111000000000002")
        },
        {
            question: "James Sirius Potter",
            answer: "Harry Potter and the Deathly Hallows - Part 2",
            game_id: new mongoose.Types.ObjectId("111111111111000000000002")
        },
        {
            question: "The last English woman tried for witchcraft was convicted in...",
            answer: "1944",
            game_id: new mongoose.Types.ObjectId("111111111111000000000003")
        },
        {
            question: "The 1960s US TV show 'Lost in Space ' was set in...",
            answer: "1997",
            game_id: new mongoose.Types.ObjectId("111111111111000000000003")
        },
        {
            question: "In 2013, nine babies born in the UK were named...",
            answer: "Cheese",
            game_id: new mongoose.Types.ObjectId("111111111111000000000003")
        },
        {
            question: "On average, in their lifetimes Britons will eat 1,126...",
            answer: "Chickens",
            game_id: new mongoose.Types.ObjectId("111111111111000000000003")
        },
        {
            question: "In French Harry Potter books, Voldemort's middle name is...",
            answer: "Elvis",
            game_id: new mongoose.Types.ObjectId("111111111111000000000003")
        },
        {
            question: "By 2019, there will be fewer people in the world than...",
            answer: "LEGOs",
            game_id: new mongoose.Types.ObjectId("111111111111000000000003")
        },
        {
            question: "Queen Elizabeth I of England invented the...",
            answer: "Gingerbread Man",
            game_id: new mongoose.Types.ObjectId("111111111111000000000003")
        },
        {
            question: "Lenin owned nine...",
            answer: "Rolls-Royces",
            game_id: new mongoose.Types.ObjectId("111111111111000000000003")
        },
        {
            question: "As a child, Mozart was terrified of...",
            answer: "Trumpets",
            game_id: new mongoose.Types.ObjectId("111111111111000000000003")
        },
        {
            question: "A cat's brain can store 1,000 times more data than an...",
            answer: "iPad",
            game_id: new mongoose.Types.ObjectId("111111111111000000000003")
        },
        {
            question: "Kanto (First)",
            answer: "Bulbasaur",
            game_id: new mongoose.Types.ObjectId("111111111111000000000004")
        },
        {
            question: "Kanto (Last)",
            answer: "Mew",
            game_id: new mongoose.Types.ObjectId("111111111111000000000004")
        },
        {
            question: "Johto (First)",
            answer: "Chikorita",
            game_id: new mongoose.Types.ObjectId("111111111111000000000004")
        },
        {
            question: "Johto (Last)",
            answer: "Celebi",
            game_id: new mongoose.Types.ObjectId("111111111111000000000004")
        },
        {
            question: "Hoenn (First)",
            answer: "Treecko",
            game_id: new mongoose.Types.ObjectId("111111111111000000000004")
        },
        {
            question: "Hoenn (Last)",
            answer: "Deoxys",
            game_id: new mongoose.Types.ObjectId("111111111111000000000004")
        },
        {
            question: "Sinnoh (First)",
            answer: "Turtwig",
            game_id: new mongoose.Types.ObjectId("111111111111000000000004")
        },
        {
            question: "Sinnoh (Last)",
            answer: "Manaphy",
            game_id: new mongoose.Types.ObjectId("111111111111000000000004")
        },
        {
            question: "Unova (First)",
            answer: "Victini",
            game_id: new mongoose.Types.ObjectId("111111111111000000000004")
        },
        {
            question: "Unova (Last)",
            answer: "Genesect",
            game_id: new mongoose.Types.ObjectId("111111111111000000000004")
        },
        {
            question: "Central Kalos (First)",
            answer: "Chespin",
            game_id: new mongoose.Types.ObjectId("111111111111000000000004")
        },
        {
            question: "Central Kalos (Last)",
            answer: "Volcanion",
            game_id: new mongoose.Types.ObjectId("111111111111000000000004")
        },
        {
            question: "Alola (First)",
            answer: "Rowlet",
            game_id: new mongoose.Types.ObjectId("111111111111000000000004")
        },
        {
            question: "Alola (Last)",
            answer: "Marshadow",
            game_id: new mongoose.Types.ObjectId("111111111111000000000004")
        },
        {
            question: "Galar (First)",
            answer: "Grookey",
            game_id: new mongoose.Types.ObjectId("111111111111000000000004")
        },
        {
            question: "Galar (Last)",
            answer: "Eternatus",
            game_id: new mongoose.Types.ObjectId("111111111111000000000004")
        },
        {
            question: "Kanto (First)",
            answer: "Bulbasaur",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Kanto (Last)",
            answer: "Mew",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Johto (First)",
            answer: "Chikorita",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Johto (Last)",
            answer: "Celebi",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Hoenn (First)",
            answer: "Treecko",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Hoenn (Last)",
            answer: "Deoxys",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Sinnoh and Enhanced Sinnoh (First)",
            answer: "Turtwig",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Sinnoh (Last)",
            answer: "Manaphy",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Enhanced Sinnoh (Last)",
            answer: "Giratina",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Unova (First)",
            answer: "Victini",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Unova (Last)",
            answer: "Genesect",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Central Kalos (First)",
            answer: "Chespin",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Central Kalos (Last)",
            answer: "Volcanion",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Coastal Kalos (First)",
            answer: "Drifloon",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Coastal Kalos (Last)",
            answer: "Moltres",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Mountain Kalos (First)",
            answer: "Diglett",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Mountain Kalos (Last)",
            answer: "Mewtwo",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Alola (First)",
            answer: "Rowlet",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Alola (Last)",
            answer: "Marshadow",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Alola: Melemele Pokedex (First)",
            answer: "Rowlet",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Alola: Melemele Pokedex (Last)",
            answer: "Tapu Koko",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Alola: Akala, Ula'ula, Poni Pokedex (First)",
            answer: "Pikipek",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Alola: Akala Pokedex (Last)",
            answer: "Tapu Lele",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Alola: Ula'ula Pokedex (Last)",
            answer: "Tapu Bulu",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Alola: Poni Pokedex (Last)",
            answer: "Tapu Fini",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Ultra Sun and Ultra Moon Alola (Last)",
            answer: "Zeraora",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Galar (First)",
            answer: "Grookey",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Galar (Last)",
            answer: "Eternatus",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Fiore (First)",
            answer: "Bulbasaur",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Fiore (Last)",
            answer: "Mew",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Almia (First)",
            answer: "Pichu",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Almia (Last)",
            answer: "Regigigas",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Oblivia (First)",
            answer: "Pidgey",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Oblivia (Last)",
            answer: "Lugia",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Past Oblivia (First)",
            answer: "Piplup",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Past Oblivia (Last)",
            answer: "Mew",
            game_id: new mongoose.Types.ObjectId("111111111111000000000005")
        },
        {
            question: "Civilization centered around Tenochtitlan",
            answer: "Aztec",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "'The Liberator' of much of South America",
            answer: "Simón Bolívar",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "Hannibal was a general for this anti-Rome city",
            answer: "Carthage",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "Famous painter of the Mona Lisa and The Last Supper",
            answer: "Leonardo da Vinci",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "An African nation that successfully resisted European imperialism",
            answer: "Ethiopia",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "The assassination of this man led to World War I",
            answer: "Francis Ferdinand",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "First great Mongol ruler",
            answer: "Genghis Khan",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "Ammorite leader famous for his code of laws",
            answer: "Hammurabi",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "Civilization centered in Andes Mountains",
            answer: "Incan",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "Roman leader killed by Brutus",
            answer: "Julius Caesar",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "The 'Shakespeare' of sanskrit",
            answer: "Kalidasa",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "Nailed 95 Theses starting the Protestant Reformation",
            answer: "Martin Luther",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "Mansa Musa was the wealthy ruler of this African Empire",
            answer: "Malian",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "French leader who conquered much of Europe",
            answer: "Napoleon Bonaparte",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "Group that finally defeated the Byzantine Empire",
            answer: "Ottoman Empire",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "Greek philosopher and student of Socrates",
            answer: "Plato",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "Dynasty during which the Terra Cotta Army was made",
            answer: "Qin",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "Cultural movement beginning in Florence, Italy",
            answer: "Renaissance",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "Nickname of Louis XIV of France",
            answer: "Sun King",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "Title held by the rulers of Russia prior to 1917",
            answer: "Tsar",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "Pope who called for the Crusades",
            answer: "Urban II",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "Roman poet of the Aeneid",
            answer: "Virgil",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "The 'Peace of ___' ended the Thirty Years' War",
            answer: "Westphalia",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "Persian ruler who attacked the Greeks at Thermopylae",
            answer: "Xerxes the Great",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "First shogun of Japan",
            answer: "Yoritomo",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "Sumerian pyramid",
            answer: "Ziggurat",
            game_id: new mongoose.Types.ObjectId("111111111111000000000006")
        },
        {
            question: "Painkiller, believed to prevent heart attacks",
            answer: "Aspirin",
            game_id: new mongoose.Types.ObjectId("111111111111000000000007")
        },
        {
            question: "A transport device for carrying people between floors of a building",
            answer: "Escalator",
            game_id: new mongoose.Types.ObjectId("111111111111000000000007")
        },
        {
            question: "Hot tub or whirlpool bath",
            answer: "Jacuzzi",
            game_id: new mongoose.Types.ObjectId("111111111111000000000007")
        },
        {
            question: "Tightly fitting swimming briefs",
            answer: "Speedo",
            game_id: new mongoose.Types.ObjectId("111111111111000000000007")
        },
        {
            question: "Fastener, found on clothing, luggage, and other items",
            answer: "Zipper",
            game_id: new mongoose.Types.ObjectId("111111111111000000000007")
        },
        {
            question: "Allegorical Portrait of Dante",
            answer: "Bronzino",
            game_id: new mongoose.Types.ObjectId("111111111111000000000008")
        },
        {
            question: "Judith Beheading Holofernes",
            answer: "Caravaggio",
            game_id: new mongoose.Types.ObjectId("111111111111000000000008")
        },
        {
            question: "The School of Athens",
            answer: "Raphael",
            game_id: new mongoose.Types.ObjectId("111111111111000000000008")
        },
        {
            question: "Mona Lisa",
            answer: "Leonardo",
            game_id: new mongoose.Types.ObjectId("111111111111000000000008")
        },
        {
            question: "Pietà",
            answer: "Titian",
            game_id: new mongoose.Types.ObjectId("111111111111000000000008")
        },
        {
            question: "The Birth of Venus",
            answer: "Botticelli",
            game_id: new mongoose.Types.ObjectId("111111111111000000000008")
        },
        {
            question: "The Last Judgment",
            answer: "Michelangelo",
            game_id: new mongoose.Types.ObjectId("111111111111000000000008")
        },
        {
            question: "The Entrance to the Grand Canal, Venice",
            answer: "Canaletto",
            game_id: new mongoose.Types.ObjectId("111111111111000000000008")
        },
        {
            question: "The Crucifixion of St. Peter",
            answer: "Lippi",
            game_id: new mongoose.Types.ObjectId("111111111111000000000008")
        },
        {
            question: "Agony in the Garden",
            answer: "Bellini",
            game_id: new mongoose.Types.ObjectId("111111111111000000000008")
        },
        {
            question: "Muhammad _______",
            answer: "Ali",
            game_id: new mongoose.Types.ObjectId("111111111111000000000009")
        },
        {
            question: "_______ Biles",
            answer: "Simone",
            game_id: new mongoose.Types.ObjectId("111111111111000000000009")
        },
        {
            question: "_______ Nadal",
            answer: "Rafael",
            game_id: new mongoose.Types.ObjectId("111111111111000000000009")
        },
        {
            question: "Margaret _______",
            answer: "Court",
            game_id: new mongoose.Types.ObjectId("111111111111000000000009")
        },
        {
            question: "Usain _______",
            answer: "Bolt",
            game_id: new mongoose.Types.ObjectId("111111111111000000000009")
        },
        {
            question: "_______ Phelps",
            answer: "Michael",
            game_id: new mongoose.Types.ObjectId("111111111111000000000009")
        },
        {
            question: "Emmanuel _______",
            answer: "Pacquiao",
            game_id: new mongoose.Types.ObjectId("111111111111000000000009")
        },
        {
            question: "Criminal Minds : _______ Prentiss",
            answer: "Emily",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000a")
        },
        {
            question: "Glee : _______ Pillsbury",
            answer: "Emma",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000a")
        },
        {
            question: "Game of Thrones : _______ Stark",
            answer: "Eddard",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000a")
        },
        {
            question: "Stranger Things : _______",
            answer: "Eleven",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000a")
        },
        {
            question: "Southpark : _______ Cartman",
            answer: "Eric",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000a")
        },
        {
            question: "Downton Abbey : _______ Crawley",
            answer: "Edith",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000a")
        },
        {
            question: "Two and a Half Men : _______ Harper",
            answer: "Evelyn",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000a")
        },
        {
            question: "Scrubbs : _______ Reid",
            answer: "Elliot",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000a")
        },
        {
            question: "The Simpsons : _______ Krabappel",
            answer: "Edna",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000a")
        },
        {
            question: "Desperate Housewives : _______ Britt",
            answer: "Edie",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000a")
        },
        {
            question: "Simone Martini",
            answer: "Gothic Art",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000b")
        },
        {
            question: "Leonardo da Vinci",
            answer: "High Renaissance",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000b")
        },
        {
            question: "Parmigianino",
            answer: "Mannerism",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000b")
        },
        {
            question: "Rembrandt van Rijn",
            answer: "Baroque",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000b")
        },
        {
            question: "François Boucher",
            answer: "Rococo",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000b")
        },
        {
            question: "Angelica Kauffmann",
            answer: "Neoclassicism",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000b")
        },
        {
            question: "William Blake",
            answer: "Romanticism",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000b")
        },
        {
            question: "Thomas Eakins",
            answer: "Realism",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000b")
        },
        {
            question: "Georges Seurat",
            answer: "Pointillism",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000b")
        },
        {
            question: "Claude Monet",
            answer: "Impressionism",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000b")
        },
        {
            question: "Vincent van Gogh",
            answer: "Post-Impressionism",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000b")
        },
        {
            question: "Frederick Leighton",
            answer: "Victorian Classicism",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000b")
        },
        {
            question: "At ~19 inches long, the _______ is the longest bone in the human body.",
            answer: "femur",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "The Earth's atmosphere is 1% Argon, 21% Oxygen, and 78% _______.",
            answer: "Nitrogen",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "_______ is an alloy of Copper and Zinc.",
            answer: "Brass",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "The light year, a measure of distance, is approximately 6 _______ miles.",
            answer: "trillion",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "CH3COOH is _______ acid.",
            answer: "acetic",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "For any x, sin^2(x) + cos^2(x) = _______.",
            answer: "1",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "The largest artery in the human body is the _______.",
            answer: "aorta",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "An alpha particle is made up of 2 neutrons and 2 _______.",
            answer: "protons",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "_______ has a chemical symbol of W",
            answer: "Tungsten",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "In binary, 101 + 101 = _______.",
            answer: "1010",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "The most recently discovered elementary particle is the _______ boson",
            answer: "Higgs",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "_______ are scientists who study and record earthquakes.",
            answer: "Seismologists",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "The Big Bang was not an _______, not an explosion.",
            answer: "expansion",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "While chemistry deals with the composition of matter, _______ deals with its movement.",
            answer: "physics",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "In math, the derivative of a constant is equal to _______.",
            answer: "zero",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "_______ is the only person to have a won a Nobel Prize in chemistry and physics.",
            answer: "Marie Curie",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "If up : down and top : bottom, then charm : _______.",
            answer: "strange",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "The _______ is the antimatter counterpart of the electron.",
            answer: "positron",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "The hydrocarbon represented by the chemical formula _______ is known as propyne.",
            answer: "C3H4",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "Sound _______ is measured in decibels",
            answer: "intensity",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000c")
        },
        {
            question: "10",
            answer: "Neon",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000d")
        },
        {
            question: "20",
            answer: "Calcium",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000d")
        },
        {
            question: "30",
            answer: "Zinc",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000d")
        },
        {
            question: "40",
            answer: "Zirconium",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000d")
        },
        {
            question: "50",
            answer: "Tin",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000d")
        },
        {
            question: "60",
            answer: "Neodymium",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000d")
        },
        {
            question: "70",
            answer: "Ytterbium",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000d")
        },
        {
            question: "80",
            answer: "Mercury",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000d")
        },
        {
            question: "90",
            answer: "Thorium",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000d")
        },
        {
            question: "100",
            answer: "Fermium",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000d")
        },
        {
            question: "110",
            answer: "Darmstadtium",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000d")
        },
        {
            question: "China - outside hitter - Z.T.",
            answer: "Zhu Ting",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000e")
        },
        {
            question: "South Korea - outside hitter - K.Y.K.",
            answer: "Kim Yeon-koung",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000e")
        },
        {
            question: "China - middle blocker - Y.Z.",
            answer: "Yuan Xinyue",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000e")
        },
        {
            question: "Italy - middle blocker - C.C.",
            answer: "Cristina Chirichella",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000e")
        },
        {
            question: "USA - opposite hitter - D.H.",
            answer: "Destinee Hooker",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000e")
        },
        {
            question: "Serbia - setter - M.O.",
            answer: "Maja Ognjenovic",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000e")
        },
        {
            question: "Japan - libero - A.S.",
            answer: "Arisa Sato",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000e")
        },
        {
            question: "USA - outside hitter - T.S.",
            answer: "Taylor Sander",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000e")
        },
        {
            question: "France - outside hitter - E.N.",
            answer: "Earvin N'Gapeth",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000e")
        },
        {
            question: "Brazil - middle blocker - L.S.",
            answer: "Lucas Saatkamp",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000e")
        },
        {
            question: "Poland - middle blocker - M.B.",
            answer: "Mateusz Bieniek",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000e")
        },
        {
            question: "Japan - opposite hitter - Y.N.",
            answer: "Yuji Nishida",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000e")
        },
        {
            question: "USA - setter - M.C.",
            answer: "Micah Christenson",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000e")
        },
        {
            question: "France - libero - J.G.",
            answer: "Jenia Grebennikov",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000e")
        },
        {
            question: "Denver, Colorado",
            answer: "true",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000f")
        },
        {
            question: "Phoenix, Arizona",
            answer: "true",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000f")
        },
        {
            question: "Providence, Rhode Island",
            answer: "false",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000f")
        },
        {
            question: "Los Angeles, California",
            answer: "true",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000f")
        },
        {
            question: "San Diego, California",
            answer: "false",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000f")
        },
        {
            question: "Las Vegas, Nevada",
            answer: "false",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000f")
        },
        {
            question: "Chicago, Illinois",
            answer: "true",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000f")
        },
        {
            question: "Boston, Massachusetts",
            answer: "true",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000f")
        },
        {
            question: "Washington, District of Columbia",
            answer: "true",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000f")
        },
        {
            question: "Oklahoma City, Oklahoma",
            answer: "false",
            game_id: new mongoose.Types.ObjectId("11111111111100000000000f")
        },
        {
            question: "Allen & Overy",
            answer: "Law Firm",
            game_id: new mongoose.Types.ObjectId("111111111111000000000010")
        },
        {
            question: "Wilcox, Sullivan, Wilcox",
            answer: "Band",
            game_id: new mongoose.Types.ObjectId("111111111111000000000010")
        },
        {
            question: "The Hues Corporation",
            answer: "Band",
            game_id: new mongoose.Types.ObjectId("111111111111000000000010")
        },
        {
            question: "Anderson Bruford Wakeman Howe",
            answer: "Band",
            game_id: new mongoose.Types.ObjectId("111111111111000000000010")
        },
        {
            question: "Gibson, Dunn & Crutcher",
            answer: "Law Firm",
            game_id: new mongoose.Types.ObjectId("111111111111000000000010")
        },
        {
            question: "Morgan Lewis & Bockius",
            answer: "Law Firm",
            game_id: new mongoose.Types.ObjectId("111111111111000000000010")
        },
        {
            question: "Medeski, Martin & Wood",
            answer: "Band",
            game_id: new mongoose.Types.ObjectId("111111111111000000000010")
        },
        {
            question: "Say My Name, Independent Women Part I, Bootylicious",
            answer: "Destiny's Child",
            game_id: new mongoose.Types.ObjectId("111111111111000000000011")
        },
        {
            question: "What A Girl Wants, Come on Over Baby, Lasy Marmalade",
            answer: "Christina Aguilera",
            game_id: new mongoose.Types.ObjectId("111111111111000000000011")
        },
        {
            question: "Girlfriend",
            answer: "Avril Lavigne",
            game_id: new mongoose.Types.ObjectId("111111111111000000000011")
        },
        {
            question: "Fireflies",
            answer: "Owl City",
            game_id: new mongoose.Types.ObjectId("111111111111000000000011")
        },
        {
            question: "In Da Club, 21 Questions, Candy Shop",
            answer: "50 Cent",
            game_id: new mongoose.Types.ObjectId("111111111111000000000011")
        },
        {
            question: "Gold Digger, Stronger",
            answer: "Kanye West",
            game_id: new mongoose.Types.ObjectId("111111111111000000000011")
        },
        {
            question: "London Bridge, Glamorous, Big Girls Don't Cry",
            answer: "Fergie",
            game_id: new mongoose.Types.ObjectId("111111111111000000000011")
        },
        {
            question: "Crazy In Love, Baby Boy, Check on It, Irreplaceable, Single Ladies",
            answer: "Beyonce",
            game_id: new mongoose.Types.ObjectId("111111111111000000000011")
        },
        {
            question: "printf('Hello World!');",
            answer: "C",
            game_id: new mongoose.Types.ObjectId("111111111111000000000012")
        },
        {
            question: "hello :-display('Hello World') , nl .",
            answer: "Prolog",
            game_id: new mongoose.Types.ObjectId("111111111111000000000012")
        },
        {
            question: "System.Console.WriteLine('Hello World');",
            answer: "C#",
            game_id: new mongoose.Types.ObjectId("111111111111000000000012")
        },
        {
            question: "ECHO Hello World",
            answer: "bash",
            game_id: new mongoose.Types.ObjectId("111111111111000000000012")
        },
        {
            question: "puts 'Hello World'",
            answer: "Ruby",
            game_id: new mongoose.Types.ObjectId("111111111111000000000012")
        },
        {
            question: "print 'Hello World'",
            answer: "Python",
            game_id: new mongoose.Types.ObjectId("111111111111000000000012")
        },
        {
            question: "System.out.println('Hello World');",
            answer: "Java",
            game_id: new mongoose.Types.ObjectId("111111111111000000000012")
        },
        {
            question: "(display 'Hello World')",
            answer: "Scheme",
            game_id: new mongoose.Types.ObjectId("111111111111000000000012")
        },
        {
            question: "SELECT 'Hello World'",
            answer: "SQL",
            game_id: new mongoose.Types.ObjectId("111111111111000000000012")
        },
        {
            question: "WriteLn('Hello World')",
            answer: "Pascal",
            game_id: new mongoose.Types.ObjectId("111111111111000000000012")
        },
        {
            question: "Black / Red",
            answer: "Nekoma",
            game_id: new mongoose.Types.ObjectId("111111111111000000000013")
        },
        {
            question: "Black / Gold / White",
            answer: "Fukurodani",
            game_id: new mongoose.Types.ObjectId("111111111111000000000013")
        },
        {
            question: "White / Maroon",
            answer: "Shiratorizawa",
            game_id: new mongoose.Types.ObjectId("111111111111000000000013")
        },
        {
            question: "White / Turquoise",
            answer: "Seijoh",
            game_id: new mongoose.Types.ObjectId("111111111111000000000013")
        },
        {
            question: "White / Orange / Black",
            answer: "Karasuno",
            game_id: new mongoose.Types.ObjectId("111111111111000000000013")
        },
        {
            question: "White / Teal",
            answer: "Dateko",
            game_id: new mongoose.Types.ObjectId("111111111111000000000013")
        },
        {
            question: "White / Blue",
            answer: "Ohgiminami",
            game_id: new mongoose.Types.ObjectId("111111111111000000000013")
        },
        {
            question: "Pink / White",
            answer: "Wakutani",
            game_id: new mongoose.Types.ObjectId("111111111111000000000013")
        },
        {
            question: "Yellow / White / Black",
            answer: "Johzenji",
            game_id: new mongoose.Types.ObjectId("111111111111000000000013")
        },
        {
            question: "William H. Harrision",
            answer: "A",
            game_id: new mongoose.Types.ObjectId("111111111111000000000014")
        },
        {
            question: "Zachary Taylor",
            answer: "A",
            game_id: new mongoose.Types.ObjectId("111111111111000000000014")
        },
        {
            question: "Abraham Lincoln",
            answer: "B",
            game_id: new mongoose.Types.ObjectId("111111111111000000000014")
        },
        {
            question: "James Garfield",
            answer: "B",
            game_id: new mongoose.Types.ObjectId("111111111111000000000014")
        },
        {
            question: "William McKinley",
            answer: "B",
            game_id: new mongoose.Types.ObjectId("111111111111000000000014")
        },
        {
            question: "Warren G. Harding",
            answer: "A",
            game_id: new mongoose.Types.ObjectId("111111111111000000000014")
        },
        {
            question: "Franklin D. Roosevelt",
            answer: "A",
            game_id: new mongoose.Types.ObjectId("111111111111000000000014")
        },
        {
            question: "John F. Kennedy",
            answer: "B",
            game_id: new mongoose.Types.ObjectId("111111111111000000000014")
        },
        {
            question: "Richard Nixon",
            answer: "C",
            game_id: new mongoose.Types.ObjectId("111111111111000000000014")
        }

    ],
    attempts: [

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
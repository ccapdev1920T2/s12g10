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
            genres: ["trivia", "others"],
            time: 10,
            creator: new mongoose.Types.ObjectId('000000000000000000000001')
        },
        {
            _id: new mongoose.Types.ObjectId("111111111111000000000009"),
            title: "Finish the Athlete",
            description: "Can you choose the word that completes the name of each athlete?",
            game_image: "media/coversamples/9.jpg",
            genres: ["history", "trivia"],
            time: 10,
            creator: new mongoose.Types.ObjectId('000000000000000000000003')
        },
        {
            _id: new mongoose.Types.ObjectId("11111111111100000000000a"),
            title: "'E' TV Character Match",
            description: "Can you match the TV shows with their 'E' characters?",
            game_image: "media/coversamples/10.jpg",
            genres: ["art", "others"],
            time: 6,
            creator: new mongoose.Types.ObjectId('000000000000000000000001')
        },
        {
            _id: new mongoose.Types.ObjectId("11111111111100000000000b"),
            title: "Art Movements",
            description: "Can you name the art movements?",
            game_image: "media/coversamples/11.jpg",
            genres: ["sports"],
            time: 7,
            creator: new mongoose.Types.ObjectId('000000000000000000000002')
        },
        {
            _id: new mongoose.Types.ObjectId("11111111111100000000000c"),
            title: "True or False: Science",
            description: "Can you name the correct answers to these statements related to science?",
            game_image: "media/coversamples/12.jpg",
            genres: ["history"],
            time: 5,
            creator: new mongoose.Types.ObjectId('000000000000000000000001')
        },
        {
            _id: new mongoose.Types.ObjectId("11111111111100000000000d"),
            title: "Animals by Emoji",
            description: "Can you name these animals by their emoji representations?",
            game_image: "media/coversamples/13.jpg",
            genres: ["history"],
            time: 10,
            creator: new mongoose.Types.ObjectId('000000000000000000000003')
        },
        {
            _id: new mongoose.Types.ObjectId("11111111111100000000000e"),
            title: "Who Wants to Be a Millionaire?",
            description: "Can you choose the correct answers to each question from John Carpenter's winning game of 'Who Wants to Be a Millionaire'?",
            game_image: "media/coversamples/14.jpg",
            genres: ["history"],
            time: 9,
            creator: new mongoose.Types.ObjectId('000000000000000000000003')
        },
        {
            _id: new mongoose.Types.ObjectId("11111111111100000000000f"),
            title: "Let's do some history!",
            description: "Test your history knowledge with with questions from the 1900s!",
            game_image: "media/coversamples/15.jpg",
            genres: ["history"],
            time: 10,
            creator: new mongoose.Types.ObjectId('000000000000000000000002')
        },
        {
            _id: new mongoose.Types.ObjectId("111111111111000000000010"),
            title: "'E' TV Character Match",
            description: "Can you match the TV shows with their 'E' characters?",
            game_image: "media/coversamples/10.jpg",
            genres: ["art", "others"],
            time: 6,
            creator: new mongoose.Types.ObjectId('000000000000000000000001')
        },
        {
            _id: new mongoose.Types.ObjectId("111111111111000000000011"),
            title: "Art Movements",
            description: "Can you name the art movements?",
            game_image: "media/coversamples/11.jpg",
            genres: ["sports"],
            time: 7,
            creator: new mongoose.Types.ObjectId('000000000000000000000002')
        },
        {
            _id: new mongoose.Types.ObjectId("111111111111000000000012"),
            title: "True or False: Science",
            description: "Can you name the correct answers to these statements related to science?",
            game_image: "media/coversamples/12.jpg",
            genres: ["history"],
            time: 5,
            creator: new mongoose.Types.ObjectId('000000000000000000000001')
        },
        {
            _id: new mongoose.Types.ObjectId("111111111111000000000013"),
            title: "Animals by Emoji",
            description: "Can you name these animals by their emoji representations?",
            game_image: "media/coversamples/13.jpg",
            genres: ["history"],
            time: 10,
            creator: new mongoose.Types.ObjectId('000000000000000000000003')
        },
        {
            _id: new mongoose.Types.ObjectId("111111111111000000000014"),
            title: "Who Wants to Be a Millionaire?",
            description: "Can you choose the correct answers to each question from John Carpenter's winning game of 'Who Wants to Be a Millionaire'?",
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
            game_id: new mongoose.Types . ObjectId("111111111111000000000006")
        },
        {
            question: "Painkiller, believed to prevent heart attacks",
            answer: "Aspirin",
            game_id: new mongoose.Types . ObjectId("111111111111000000000007")
        },
        {
            question: "A transport device for carrying people between floors of a building",
            answer: "Escalator",
            game_id: new mongoose.Types . ObjectId("111111111111000000000007")
        },
        {
            question: "Hot tub or whirlpool bath",
            answer: "Jacuzzi",
            game_id: new mongoose.Types . ObjectId("111111111111000000000007")
        },
        {
            question: "Tightly fitting swimming briefs",
            answer: "Speedo",
            game_id: new mongoose.Types . ObjectId("111111111111000000000007")
        },
        {
            question: "Fastener, found on clothing, luggage, and other items",
            answer: "Zipper",
            game_id: new mongoose.Types . ObjectId("111111111111000000000007")
        },
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
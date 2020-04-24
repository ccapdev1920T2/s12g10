const shuffle = {

    shuffleArray: function (array) {

        for (let i = array.length - 1; i > 0; i--) {
            let rnd = Math.floor(Math.random() * (i + 1));
            [array[i], array[rnd]] = [array[rnd], array[i]];
        }

        return array;


    }

};

module.exports = shuffle;
const lbFunctions = {

    round: function (num) {
        return num.toFixed(4);
    },

    toMinSec: function (mins) {
        let min = Math.floor (mins);
        let sec = Math.round(mins*60)% 60;
        return min + " mins " + sec + " secs";
    }
};

module.exports = lbFunctions;
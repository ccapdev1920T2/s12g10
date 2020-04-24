const lbFunctions = {

    round: function (num) {
        return num.toFixed(4);
    },

    toMinSec: function (mins) {

        let str = mins.toString().split(".");

        if (str[1] === undefined) {
            if (str[0] === "1")
                return str[0] + " min 0 sec";
            else
                return str[0] + " mins 0 sec";
        } else {
            let sec;

            if (str[1].substring(0, 1) === "0")
                sec = "0" + (parseInt(str[1].substring(1)) * 60).toString().substring(0, 1);
            else
                sec = (parseInt(str[1]) * 60).toString().substring(0, 2)

            if (str[0] === "1" || str[0] === "0") {
                if (sec === "01" || sec === "00")
                    return str[0] + " min " + sec + " sec";
                else
                    return str[0] + " min " + sec + " secs";
            } else {
                if (sec === "01" || sec === "00")
                    return str[0] + " mins " + sec + " sec";
                else
                    return str[0] + " mins " + sec + " secs";
            }
        }

    }
};

module.exports = lbFunctions;
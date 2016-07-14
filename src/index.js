var reInflect = require("@nathanfaucett/re_inflect");


module.exports = constantize;


function constantize(string) {
    return string.match(reInflect).join("_").toUpperCase();
}

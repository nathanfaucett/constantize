var reInflect = require("re_inflect");


module.exports = function constantize(string) {
    return string.match(reInflect).join("_").toUpperCase();
};

module.exports = function reverse (str) {
    str = str + "";

    while ((str.length > 0) && ((str[0] == '-') || (str[0] == '0'))) {
        str = str.slice(1);
    }

    str = str.split("").reverse().join("");

    return str;
}

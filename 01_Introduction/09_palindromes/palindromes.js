const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

const palindromes = function (word) {
    return word.toLowerCase().split('').filter((elem) => alphanumerical.includes(elem)).reverse().join('') === word.toLowerCase().split('').filter((elem) => alphanumerical.includes(elem)).join('');
};

// Do not edit below this line
module.exports = palindromes;

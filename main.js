// const Abbrefy = require('./abbrefy');

const Abbrefy = require('abbrefynode');

const abbrefy = new Abbrefy();

abbrefy.gekúrú('https://google.com').then((url) => console.log(url));

module.exports = Abbrefy;

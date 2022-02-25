const messages = require('./error.json');

function getResMsg(identifier) {
  return messages[identifier] || identifier;
}

module.exports = getResMsg;

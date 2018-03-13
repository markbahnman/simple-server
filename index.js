const { json } = require('micro');

let num = 0;
module.exports = (req, res) => {
  const result = json(req);
  return result ? `${++num}: Got JSON payload` : `${++num}: Didn\`t receive any JSON`;
};

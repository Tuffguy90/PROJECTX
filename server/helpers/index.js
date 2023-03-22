const jwt = require("jsonwebtoken");

const extractTokenInfo = (req) => {
  let authorization = req.headers["authorization"];
  if (authorization === undefined) {
    return {
      status: 401,
    };
  }
  let token = authorization.split(" ")[1] || null;
  const result = jwt.decode(token);
  if (!result) {
    return {
      status: 401,
    };
  }
  return result;
};

const helpers = {
  extractTokenInfo,
};

module.exports = helpers;

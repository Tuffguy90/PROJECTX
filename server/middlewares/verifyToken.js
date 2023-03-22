var jwt = require("jsonwebtoken");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1] ? authHeader.split(" ")[1] : null;
    if (token === null) {
      return res.status(401).send("Unauthorized Access");
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).send("Unauthozied");
      }
      req.body.created_by = decoded?.id || 0;
      next();
    });

    res.status(200);
  } catch (err) {
    return res.status(403).send("Error");
  }
};

module.exports = verifyToken;

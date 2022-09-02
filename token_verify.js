const jwt = require("jsonwebtoken");
verifyToken = (req, res, next) => {
  const accessTokenSecret = "youraccesstokensecret";
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.status(403).send({
      status: 403,
      message: "Token not available.",
    });
  }

  jwt.verify(token, accessTokenSecret, (err, user) => {
    if (err) {
      return res.status(403).send({
        status: 403,
        message: "Token expired.",
      });
    }
    req.user = user;
    next();
  });
};

module.exports = verifyToken;

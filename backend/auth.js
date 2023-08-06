const jwt = require("jsonwebtoken");
const JWT_SECRET = "secret";

function authMiddleware(req, res, next) {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  const token = authHeader.substring(7); // Remove the "Bearer " prefix from the token

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("Value of decoded: " + JSON.stringify(decoded));
    
    req.user = decoded;
    console.log("Value of req.user: " + JSON.stringify(req.user));
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = authMiddleware;

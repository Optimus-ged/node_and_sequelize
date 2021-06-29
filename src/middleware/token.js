// Import dependencies
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Config dotenv
dotenv.config();

// Handling token
export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verified = jwt.verify(token, process.env.JWT_KEY);
    req.user = verified;
    return next();
  } catch (err) {
    res.status(409).json({
      status: 409,
      error: {
        message: "Authentification failed",
      },
    });
  }
};

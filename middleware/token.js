// Comment
// Import dependencies
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Comment
// Config dotenv
dotenv.config();

// Comment
// Handling token
export default async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verified = jwt.verify(token, process.env.JWT_KEY);
    req.user = verified;
    return next();
  } catch (err) {
    res.status(409).json({
      status: 409,
      message: "Authentification failed",
    });
  }
};

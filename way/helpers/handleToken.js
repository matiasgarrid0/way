import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;
const handleToken = {
  async authToken(user) {
    const sign = await jwt.sign(
      {
        _id: user._id,
        username: user.username,
        completeName: user.completeName
      },
      JWT_SECRET,
      {
        expiresIn: process.env.AUTH_TOKEN_EXP,
      }
    );
    return sign;
  },
  async verifyToken(token) {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return null;
    }
  },
};

export default handleToken;

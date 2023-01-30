import userSchema from "../../models/user";
import httpError from "../../helpers/httpError";
import hashPassword from "../../helpers/hashPassword";
import handleToken from "../../helpers/handleToken";
import handleCookie from "../../helpers/handleCookie";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      try {
        const { userLog, passwordLog } = req.body;
        console.log(userLog)
        const user = await userSchema
          .findOne({ username : userLog })
          .select("username password completeName");
        if (!user) {
          throw new httpError(404, "User not found");
        }
        const hashedPassword = user.get("password");
        const check = await hashPassword.compare(passwordLog, hashedPassword);
        if (!check) {
          throw new httpError(404, "Wrong password");
        }
        user.set("password", undefined, { strict: false });
        const token = await handleToken.authToken(user);
        const data = {
          token,
        };
        const loginToken = handleCookie.loginCookie(token);
        res.setHeader("Set-Cookie", [loginToken]);
        res.send({ data });
      } catch (err) {
        res.status(err?.status || 500).send({ message: err.message });
      }
      break;
    default:
      return res.status(404);
  }
};

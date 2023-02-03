import userSchema from "../../models/user";
import bcrypt from 'bcrypt';
import handleToken from '../../helpers/handleToken';
import handleCookie from '../../helpers/handleCookie';
import { dbConnect } from '../../utils/mongo';
dbConnect();
export default async (req, res) => {
  switch (req.method) {
    case "POST":
      try {
        const { user, password} = req.body;
        
        const userLoged = await userSchema
          .findOne({ user })
          .select("user password");
        console.log(userLoged);
        if (!userLoged) {
          throw new Error( "User not found");
        }
        const hashedPassword = userLoged.get("password");
        const check = bcrypt.compareSync(password, hashedPassword);
        if (!check) {
          throw new Error("Wrong password");
        }
        const token = await handleToken.authToken(userLoged);
        const loginToken = handleCookie.loginCookie(token);
        res.setHeader('Set-Cookie', loginToken);
        const data = {
          token,
        };
        res.send({ data });
      } catch (err) {
        console.log(err);
        res.status(err?.status || 500).send({ message: err.message });
      }
      break;
    default:
      return res.status(404);
  }
};

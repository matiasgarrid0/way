import { dbConnect } from '../utils/mongo';
import userSchema from '../models/user';
// modules
import bcrypt from 'bcrypt';

dbConnect();

const Usuario = {
  async traerUsuario(id){
    try {
      const user = userSchema.findOne({id});
      if(!user){
        throw new Error('user not found');
      }
      return user;     
    } catch (err) {
      return err;
    }
  },
  async findUser(username,password){
    try {
      const passwordEncode = bcrypt.hashSync(password,process.env.SECRET_PASSWORD);
      const user = userSchema.find({username,passwordEncode});
      if(!user){
        throw new Error('user not found');
      }
      return user;
    } catch (err) {
      return err
    }
  },
  async create(username,password) {
    try {
      const user = await userSchema.create({username,password});
      return user;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};

export default Usuario;
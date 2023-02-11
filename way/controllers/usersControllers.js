import { dbConnect } from '../utils/mongo';
import userSchema from '../models/user';
import handleCookie from '../helpers/handleCookie';
// modules
import bcrypt from 'bcrypt';

dbConnect();

const Usuario = {
  async findUser(id){
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
  /*async findUser(username,password){
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
  },*/
  async create(data) {
    try {
      const {password} = data;
      console.log(password);
      const passwordEncoded = bcrypt.hashSync(password,10);
      const user = await userSchema.create({...data,password: passwordEncoded});
      return user;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  async deleteUser(id){
    try {
      return await userSchema.deleteOne({id});
    } catch (err) {
      console.log(err);
      return err;
    }
  }
};

export default Usuario;
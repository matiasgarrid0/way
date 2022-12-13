// modules
import bcrypt from 'bcrypt';
// controllers 
import userControler from '../../controllers/usersControllers';
import authController from '../../controllers/authController';

export default async function handler(req, res) {
    const {username, password} = req.query;

    switch(req.method){
        case 'POST':
            try {
                if( !username && !password ){
                    throw new Error('username and password is required');
                }
                if(!user){
                    throw new Error('User not found');
                }
                const user = await userControler.findUser({username,password});
                const passwordDecoded = bcrypt.compareSync(password,user.password);
                if(!passwordDecoded){
                    throw new Error('password is incorrect');
                }
                const token = authController.createToken(user);
                res.send({token});                
            } catch (err) {
                res.send({message: err.message});
            }
    }
    
}
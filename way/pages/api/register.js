// modules
import bcrypt from 'bcrypt';
// controllers 
import userControler from '../../controllers/usersControllers';
import authController from '../../controllers/authController';

export default async function handler(req, res) {
    const {username, password} = req.body;
    switch(req.method){
        case 'POST':
            try {
                if( !username && !password ){
                    throw new Error('username and password is required');
                }
                const passwordEncoded = bcrypt.hashSync(password,10);
                const user = await userControler.create(username,passwordEncoded); // to do create
                const token = authController.createToken(user);
                res.send({token});                
            } catch (err) {
                res.send({message: err.message});
            }
    }
    
}
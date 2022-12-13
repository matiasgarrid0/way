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
                console.log('hereeeeeeeeeee');
                if( !username && !password ){
                    throw new Error('username and password is required');
                }
                console.log(username,password);
                const passwordEncoded = bcrypt.hashSync(password,proccess.env.PASSWORD_HASH);
                const user = await userControler.create(username,passwordEncoded); // to do create
                const token = authController.createToken(user);
                res.send({token});                
            } catch (err) {
                res.send({message: err.message});
            }
    }
    
}
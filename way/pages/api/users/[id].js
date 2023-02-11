import userController from '../../../controllers/usersControllers';

export default async function handler(req, res) {
    
    const {id} = req.query;
    
    switch(req.method){
        case 'GET':
            try {                
                const user = await userController.findUser(id);
                res.send(user);                
            } catch (err) {
                console.log(err);
                res.status(404).send({message: err.message})
            }
            break;
        case 'DELETE':
            try {
                const data = await userController.deleteUser(id); // falta el delete!
                if(data == 'ok'){
                    res.send({message:`deleted user with id ${id}`});
                }
                throw new Error('no se puedo eliminar');
            } catch (err) {
                console.log(err);
                res.status(404).send({message: err.message})
            }
            break;
    }
    
}
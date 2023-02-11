import userController from '../../../controllers/usersControllers';

export default async function handler(req, res) {

    switch(req.method){
        case 'POST':
            try {
                const data = req.body;
                const course = await userController.create(data);
                res.send(course);
            } catch (err) {
                console.log(err);
                res.status(404).send({message: err.message});
            }
            break;
    }
    
}
import coursesController from '../../../controllers/coursesController';

export default async function handler(req, res) {
    
    const {id} = req.query;
    
    switch(req.method){
        case 'PUT':
            try {
                const data = req.body;
                const course = await coursesController.findCourse(id);
                const courseUpdated = await coursesController.updateCourse(data,id);
                res.send(courseUpdated);
            } catch (err) {
                res.status(404).send({message: err.message});
            }
            break;
        case 'GET':
            try {
                
                const course = await coursesController.findCourse(id);
                res.send(course);                
            } catch (err) {
                console.log(err);
                res.status(404).send({message: err.message})
            }
            break;
        case 'DELETE':
            try {
                console.log('here')
                const data = await coursesController.deleteCourse(id);
                if(data == 'ok'){
                    res.send({message:`deleted course whit id ${id}`});
                }
                throw new Error('no se puedo eliminar');
            } catch (err) {
                console.log(err,'here');
                res.status(404).send({message: err.message})
            }
            break;
    }
    
}
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
                await coursesController.deleteCourse(id);
                return `deleted course whit id ${id}`;
            } catch (err) {
                console.log(err);
                res.status(404).send({message: err.message})
            }
            break;
    }
    
}
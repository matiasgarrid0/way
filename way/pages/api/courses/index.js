import coursesController from '../../../controllers/coursesController';

export default async function handler(req, res) {

    switch(req.method){
        case 'POST':
            try {
                const data = req.body;
                const course = await coursesController.createCourse(data);
                res.send(course);
            } catch (err) {
                console.log(err);
                res.status(404).send({message: err.message});
            }
            break;
        case 'GET':
            try {
                const courses = await coursesController.listCourses();
                if(!courses){
                    throw new Error('Not found any course please create one');
                }
                res.send(courses);
            } catch (err) {
                console.log(err);
                res.status(404).send({message: err.message});
            }
            break;
    }
    
}
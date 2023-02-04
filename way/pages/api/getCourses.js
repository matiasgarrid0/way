import coursesController from '../../controllers/coursesController';

export default async function handler(req, res) {
    console.log('aqui');
    switch(req.method){
        case 'GET':
            try {
                const courses = await coursesController.listCourses();
                if(!courses){
                    throw new Error('Not found any course please create one');
                }
                console.log(courses);
                res.send(courses);
            } catch (err) {
                console.log(err);
                res.status(404).send({message: err.message});
            }
            break;
    }
    
}
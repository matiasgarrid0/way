

export default async function handler(req, res) {
    
    const {id} = req.query;
    
    switch(req.method){
        case 'POST':
            try {

            } catch (err) {
                res.status(404).send({message: err.message});
            }
            break;
        case 'GET':
            try {
            
            } catch (err) {
                res.status(404).send({message: err.message})
            }
            break;
        case 'DELETE':
            try {

            } catch (err) {

                res.status(404).send({message: err.message})
            }
            break;
    }
    
}
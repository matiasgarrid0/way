export default function handler(req, res){
    switch(req.method){
        case 'GET':
            console.log('heres');
            res.status(401).json({message: 'no autorizado'});
            break;

        
    }
}
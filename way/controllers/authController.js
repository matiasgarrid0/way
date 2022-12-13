import jwt from 'jsonwebtoken';

const Login = {
    createToken (user) {
        try {        
        const payload = {
            id: user._id,  
            role: user.role,          
        }
        return jwt.sign(payload,process.env.JWT_SECRET)
    } catch (err) {
        console.log(err);   
        return err; 
    } 
    },
    verifyToken(token){
        try {
            return jwt.verifyToken(token); 
        } catch (err) {
            console.log(err);
            return err
        }
    },    
}

export default Login;
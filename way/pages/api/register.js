// modules

// controllers 
import userControler from '../../controllers/usersControllers';
import authController from '../../controllers/authController';

export default async function handler(req, res) {
    const { user, password } = req.body;
    switch (req.method) {
        case 'POST':
            try {
                const { user, password } = req.body;
                if (!user && !password) {
                    throw new Error('username and password is required');
                }
                const data = req.body;
                const userCreated = await userControler.create(data); // to do create
                const token = authController.createToken(userCreated);
                const loginToken = handleCookie.loginCookie(token);
                res.setHeader('Set-Cookie', loginToken);
                const dataa = {
                    token,
                };
                res.send({ data, user: userCreated });
            } catch (err) {
                res.send({ message: err.message });
            }
    }

}
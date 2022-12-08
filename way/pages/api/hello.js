// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import usersController from '../../controllers/usersControllers';

export default function handler(req, res) {
  const users = usersController.RecuperarUsuarios();
  res.status(200).json({ users })
}

import { dbConnect } from '../utils/mongo';
import userSchema from '../models/user';

dbConnect();

const Usuario = {
  async TraerUsuarios(limit, page, payload, filtro, role, active, fild, direc) {
    const query = { $and: [{ delete: false }, { clientId: payload.client }] };
    const query2 = { delete: true };

    if (role != 'all') {
      query.$and.push({ rol: role });
    }
    if (filtro) {
      query.$and.push({ completeName: { $regex: '^' + filtro, $options: 'i' } });
    }

    const options = {
      populate: {
        path: 'clientId',
        select: { _id: 0 },
        model: clientSchema,
      },
      limit: limit,
      page: page,
      sort: { [`${fild}`]: direc },
    };

    if (active === 'Inactive') {
      const user = await userSchema.paginate(query2, options);
      return user;
    }

    const user = await userSchema.paginate(query, options);
    return user;
  },

  async BuscarUsuario(_id) {
    const userID = await userSchema.findOne({ _id }).populate({
      path: 'clientId',
      select: { _id: 0 },
      model: clientSchema,
    });
    return userID;
  },

  async AgregarUsuario(User, payload) {
    let planePasswordStrong = isStrongPassword(User.password);
    if (planePasswordStrong) {
      const password = await HashPassword.encrypt(User.password);
      const user = { ...User, password };
      user.lastDatePassword = new Date();
      user.lastPasswords = [password];
      user.clientId = payload.client;
      const newUser = await userSchema.create(user);
      const idUser = payload._id; // TOMO LO QUE VENGA DE LA COOKIE DE SESION O DEL PAYLOAD DEL TOKEN Y LO ENVIO
      const client = payload.client;
      audit.create(auditoriaSchema(idUser, 'Create user', client), 'users');
      return newUser;
    } else {
      throw new httpError(
        401,
        'La contraseña debe contener al menos 8 caracteres, 1 número, 1 mayúscula y 1 caracter especial'
      );
    }
    // se crea un usuario por ende enviamos auditoria
  },

  async compararContraseñas(_id, oldPassword) {
    const password = await userSchema.findOne({ _id }).select('password');
    const compare = await HashPassword.compare(oldPassword, password.password);
    return compare;
  },

  async EditarUsuario(id, newUser, payload) {
    const user = await userSchema.updateOne({ _id: { $eq: id } }, { $set: newUser });
    const client = payload.ClientId;
    const idUser = payload._id;
    await audit.create(await auditoriaSchema(idUser, 'Edit user', client, id), 'users');

    return user;
  },

  async CambiarContraseña(_id, newPassword) {
    const passwordCrypt = await HashPassword.encrypt(newPassword);
    const password = await userSchema.updateOne(
      { _id },
      { $set: { password: passwordCrypt, oneTimePassword: false, firstPassword: false } },
      { $push: { lastPasswords: passwordCrypt } }
    );
    return password;
  },

  async BorrarUsuario(id, payload) {
    const userID = await userSchema.updateOne({ _id: { $eq: id } }, { $set: { delete: true, active: false } });
    const idUser = payload._id; // TOMO LO QUE VENGA DE LA COOKIE DE SESION O DEL PAYLOAD DEL TOKEN Y LO ENVIO
    const client = payload.client;
    await audit.create(await auditoriaSchema(idUser, 'delete user', client, id), 'users');
    return userID;
  },

  async RecoverUser(_id) {
    const UserId = await userSchema.updateOne({ _id }, { $set: { delete: false, active: true } });

    return UserId;
  },

  async RecuperarUsuarios() {
    const userID = await userSchema.updateMany({ delete: { $eq: true } }, { $set: { delete: false } });
    return userID;
  },

  async UpdateAvatar(_id) {
    const userAvatar = await userSchema.updateOne({_id},{ $set: { avatar: true } });
    return userAvatar
  },
};

export default Usuario;
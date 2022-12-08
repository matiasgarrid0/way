import { Schema, model, models, mongoose } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const userSchema = new Schema(
  {
    completeName: {
      type: String,
      required: [true, 'complete name is mandatory'],
      minlength: [3, 'complete name must have at least 3 characters'],
      maxlength: [99, 'complete name must be shorter than 99 characters'],
    },
    email: {
      type: String,
      unique: [true, 'email is duplicated'],
      required: [true, 'email is mandatory'],
      minlength: [3, 'email must have at least 3 characters'],
      maxlength: [99, 'email must be shorter than 99 characters'],
    },
    phone: {
      type: String,
      minlength: [3, 'phone must have at least 3 characters'],
      maxlength: [99, 'phone must be shorter than 99 characters'],
    },
    country: {
      type: String,
      minlength: [3, 'country must have at least 3 characters'],
      maxlength: [99, 'country must be shorter than 99 characters'],
    },
    state: {
      type: String,
      minlength: [3, 'state must have at least 2 characters'],
      maxlength: [99, 'state must be shorter than 99 characters'],
    },
    zone: {
      type: String,
      minlength: [3, 'zone must have at least 3 characters'],
      maxlength: [99, 'zone must be shorter than 99 characters'],
    },
    address: {
      type: String,
      minlength: [3, 'address must have at least 3 characters'],
      maxlength: [99, 'address must be shorter than 99 characters'],
    },
    zipCode: {
      type: Number,
      minlength: [2, 'zip code must have at least 3 characters'],
      maxlength: [99, 'zip must be shorter than 99 characters'],
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Clients',
    },
    rol: {
      type: Array,
      //required: [true, 'Rol is mandatory']
    },
    userName: {
      type: String,
      required: [true, 'user name is mandatory'],
      unique: [true, 'user name must be unique'],
      minlength: [3, 'user name must have at least 3 characters'],
      maxlength: [99, 'user name must be shorter than 99 characters'],
    },
    password: {
      type: String,
      required: [true, 'password is mandatory'],
      minlength: [8, 'password must have at least 3 characters'],
      maxlength: [99, 'user name must be shorter than 99 characters'],
      select: false,
    },
    avatar:{
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: true,
    },
    twoFactor:{
      type: String,
      default: undefined,
    },
    oneTimePassword: {
      type: Boolean,
      default: true,
    },
    delete: {
      type: Boolean,
      select: false,
      default: false,
    },
    lastDatePassword:{
      type: String,
      select: false
    },
    lastPasswords:{
      type:Array,
      select: false
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.plugin(mongoosePaginate);

export default models.Users || model('Users', userSchema);

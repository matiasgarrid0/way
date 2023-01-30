import { Schema, model, models, mongoose } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'complete name is mandatory'],
      minlength: [3, 'complete name must have at least 3 characters'],
      maxlength: [99, 'complete name must be shorter than 99 characters'],
    },
    email: {
      type: String,
      unique: [true, 'email is duplicated'], 
      minlength: [3, 'email must have at least 3 characters'],
      maxlength: [99, 'email must be shorter than 99 characters'],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      minlength: [8,'password must be have 8 characters'],
    },
    completeName:{
      type:String,
    },
    role: {
      type: String,
      required: [true, 'role is required'],
      default: 'user',
    },
    courses:{
      type: Array,
    },
    cart:{
      type: Array,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.plugin(mongoosePaginate);

export default models.Users || model('Users', userSchema);

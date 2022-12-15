import { Schema, model, models, mongoose } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const userSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'complete title is mandatory'],
      minlength: [3, 'complete name must have at least 3 characters'],
      maxlength: [99, 'complete name must be shorter than 99 characters'],
    },
    description: {
        type: String,
        required: [true, 'Complete the description'],
        minlength: [3,'complete description must have at least 3 characters'],
        maxlength: [500, 'complete description must be shorter than 500 characters'],
    },
    usersIds: {
        type: Array,
        default : [],
    },
    price: {
        type: Number,
        required: [true, 'price is required'],
    },
    image: {
        type: String,
        required: [true, 'image is required'],
    },
    quotes: {
        type: Number,
        required: [true,'quotes is required'],
    }
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.plugin(mongoosePaginate);

export default models.Courses || model('Courses', userSchema);

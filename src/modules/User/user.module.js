import mongoose, {Schema} from 'mongoose';
import validator from 'validator';
import { passwordRegex } from './uservalidator';

const UserSchema = new Schema ({
  // email: {
  //   type: String,
  //   unique: true,
  //   required: [true, 'email is required'],
  //   trim: true,
  //   validate: {
  //     validator (email) {
  //       return validator.isEmail(email);
  //     },
  //     message: '{VALUE} is not valid email'
  //   }
  // },
  // firstName: {
  //   type: String,
  //   required: [true, 'Firstname is required'],
  //   trim: true
  // },
  // lastName: {
  //   type: String,
  //   required: [true, 'Lastname is required'],
  //   trim: true
  // },
  userName: {
    type: String,
    required: [true, 'userName is required'],
    trim: true
  },
  // password: {
  //   type: String,
  //   required: [true, 'Password is required'],
  //   trim: true,
  //   minlength: [6, 'Password needs to be longer than 6 chars'],
  //   maxlength: [20,'Password needs to be smailler than 20 chars'],
  //   validator (password) {
  //     return passwordRegex.test(password);
  //   },
  //   message: 'password validation failed'
  // }

});

export default mongoose.model('User', UserSchema);
// cannot use export const

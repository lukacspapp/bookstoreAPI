import mongoose, { Document } from 'mongoose';
import { emailValidator } from '../utils/validator';

export interface User extends Document {
  email: string;
  password: string,
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: [emailValidator, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: true
  }
})

export const User = mongoose.model<User>('User', userSchema)
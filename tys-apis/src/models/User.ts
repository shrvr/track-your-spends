import type { Document } from 'mongoose';
import mongoose, { Schema } from 'mongoose';

interface IUser extends Document {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  country: string;
  profession: string;
  isAdmin: boolean;
}

const userSchema: Schema = new Schema<IUser>(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    country: { type: String, required: true },
    profession: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model<IUser>('User', userSchema);

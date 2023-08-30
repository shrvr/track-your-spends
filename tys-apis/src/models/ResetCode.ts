import type { Document } from 'mongoose';
import mongoose, { Schema } from 'mongoose';

interface IResetCode extends Document {
  email: string;
  otp: number;
  otpExpiration: Date;
}

const resetCodeSchema: Schema = new Schema<IResetCode>(
  {
    email: { type: String, require: true },
    otp: { type: Number, require: true },
    otpExpiration: {
      type: Date,
      expires: 0, // Expire documents automatically based on this field
    },
  },
  { timestamps: true },
);

export default mongoose.model<IResetCode>('ResetCode', resetCodeSchema);

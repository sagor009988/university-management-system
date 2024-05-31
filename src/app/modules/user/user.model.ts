import { Schema, model } from 'mongoose';
import { Tuser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

export const UserSchema = new Schema<Tuser>(
  {
    id: { type: String, required: true },
    password: { type: String, required: true },
    changePassword: { type: Boolean, default: true },
    role: {
      type: String,
      enum: {
        values: ['faculty', 'admin', 'student'],
        message: '{VALUE} is not requ',
      },
    },
    status: {
      type: String,
      enum: {
        values: ['in-process', 'blocked'],
        default: 'in-process',
      },
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

//pre-save middlewire //hok
UserSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_saltRound),
  );
  next();
});
//post saved
UserSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<Tuser>('user', UserSchema);

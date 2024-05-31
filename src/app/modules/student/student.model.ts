import { Schema, model } from 'mongoose';
import validator from 'validator';
import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './student.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: true,
    max: 8,
    trim: true,
    validate: {
      validator: function (value: string) {
        const nameletterCatse = value.charAt(0).toUpperCase() + value.slice(1);

        return nameletterCatse === value;
      },
      message: '{VALUE} is not allow',
    },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => {
        return validator.isAlpha(value);
      },
      message: '{VALUE} is re not correct',
    },
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

const localGuradianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: true,
    max: 10,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<TStudent, StudentModel>({
  id: { type: String, required: true, unique: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'user is required'],
    unique: true,
    ref: 'User',
  },

  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: "{values},'{values} is not required'",
    },
    required: [true, 'Gender is needed'],
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
    },
    message: '{VALUE} is not correct email',
  },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloogGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: { type: String, required: true },
  permanentAddres: { type: String, required: true },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuradianSchema,
    required: true,
  },
  profileImg: { type: String },
});

export const Student = model<TStudent, StudentModel>('Student', studentSchema);

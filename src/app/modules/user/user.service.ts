import config from '../../config';
import { TStudent } from '../student/student.interface';

import { Tuser } from './user.interface';
import { User } from './user.model';

const createStudentInToDb = async (password: string, studentData: TStudent) => {
  const userData: Partial<Tuser> = {};

  // if pass in not givn
  userData.password = password || (config.default_password as string);
  // set role

  userData.role = 'Student';
  //set generated manually id
  userData.id = '2030100001';
  //create user
  const newUser = await User.create(studentData);
  //   create student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
  }

  return newUser;
};

export const UserService = {
  createStudentInToDb,
};

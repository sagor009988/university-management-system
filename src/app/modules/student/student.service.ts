import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentDb = async (studentData: Student) => {
  // const result = await StudentModel.create(student);//built in method
  const student = new StudentModel(studentData);
  const result = student.save();

  return result;
};

// getall
const getAllStudentsFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};
// grtSingleValue

const getSingleStiduntFromDb = async (id: string) => {
  const result = await StudentModel.findOne({ id: id });
  return result;
};

export const StudentService = {
  createStudentDb,
  getAllStudentsFromDb,
  getSingleStiduntFromDb,
};

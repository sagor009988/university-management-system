import { Student } from './student.model';

// getall
const getAllStudentsFromDb = async () => {
  const result = await Student.find();
  return result;
};
// grtSingleValue

const getSingleStiduntFromDb = async (id: string) => {
  const result = await Student.findOne({ id: id });
  return result;
};

export const StudentService = {
  getAllStudentsFromDb,
  getSingleStiduntFromDb,
};

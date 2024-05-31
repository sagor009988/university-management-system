import { NextFunction, Request, Response } from 'express';
import { StudentService } from './student.service';

// get all students from db
const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentService.getAllStudentsFromDb();
    res.status(200).json({
      success: true,
      message: 'Students retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// getSingle Studen

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.getSingleStiduntFromDb(studentId);
    res.status(200).json({
      success: true,
      message: 'Get a single student successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const studentController = {
  getAllStudents,
  getSingleStudent,
};

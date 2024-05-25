import { Request, Response } from 'express';
import { StudentService } from './student.service';
import studentValidationSchema from './student.zod.Schema';
import { any } from 'zod';
import { Student } from './student.interface';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    // zod validation
    const st = studentValidationSchema.parse(student);

    const result = await StudentService.createStudentDb(st);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Student creation failed',
      data: err,
    });
  }
};

// get all students from db
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentsFromDb();
    res.status(200).json({
      success: true,
      message: 'Students retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// getSingle Studen

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.getSingleStiduntFromDb(studentId);
    res.status(200).json({
      success: true,
      message: 'Get a single student successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};

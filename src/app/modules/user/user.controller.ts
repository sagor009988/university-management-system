import { NextFunction, Request, Response } from 'express';

import { UserService } from './user.service';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    // // zod validation
    // const st = studentValidationSchema.parse(student);

    const result = await UserService.createStudentInToDb(password, studentData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
export const userController = {
  createStudent,
};

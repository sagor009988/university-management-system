import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

// will call a controller
router.post('/create-student', studentController.createStudent);

// get data
router.get('/', studentController.getAllStudents);

router.get('/:studentId', studentController.getSingleStudent);

export const studentRoutes = router;

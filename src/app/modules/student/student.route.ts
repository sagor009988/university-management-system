import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

router.post('/api/v1');
// get data

router.get('/', studentController.getAllStudents);

router.get('/:studentId', studentController.getSingleStudent);

export const studentRoutes = router;

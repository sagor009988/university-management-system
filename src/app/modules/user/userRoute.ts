import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

//will set user controller
router.post('/create-student', userController.createStudent);

export const userRoutes = router;

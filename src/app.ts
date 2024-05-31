import express, { Application } from 'express';
import { Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { studentRoutes } from './app/modules/student/student.route';
import { userRoutes } from './app/modules/user/userRoute';
import globalErrorHandle from './app/middlewire/globalerrorHandle';

// const port = 3000;

// parsers

app.use(express.json());
app.use(cors());

// application
app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  const a = 20;

  res.send(a);
});

app.use(globalErrorHandle);

export default app;

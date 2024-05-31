import { NextFunction, Request, Response } from 'express';

const globalErrorHandle = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500;
  const message = err.message;
  return res.status(statusCode).json({
    status: false,
    message,
    err: err,
  });
};
export default globalErrorHandle;

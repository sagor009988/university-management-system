import { z } from 'zod';

const UserValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'password must be a string',
    })
    .max(20, { message: 'password is more then 20 char' })
    .optional(),
});

export const UserValidation = {
  UserValidationSchema,
};

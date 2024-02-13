import z from 'zod';

export const userSchema = z.object({
  email: z
    .string({
      invalid_type_error: 'Email must be a string',
    })
    .email({
      message: 'Invalid email',
    }),
  firstName: z
    .string({
      invalid_type_error: 'First name must be a string',
    })
    .min(2, {
      message: 'First name must be at least 2 characters long',
    }),
  surName: z
    .string({
      invalid_type_error: 'Surname must be a string',
    })
    .min(2, {
      message: 'Surname must be at least 2 characters long',
    }),
  phoneNumber: z
    .string({
      invalid_type_error: 'Phone number must be a string',
    })
    .min(10, {
      message: 'Phone number must be at least 10 characters long',
    }),
});

export type TUserSchema = z.infer<typeof userSchema>;

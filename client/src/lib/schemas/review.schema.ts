import z from 'zod';

const createReviewSchema = z.object({
  phoneNumber: z
    .string({
      invalid_type_error: 'Phone number must be a string',
    })
    .min(10, {
      message: 'Phone number must be at least 10 characters long',
    }),
  text: z
    .string({
      required_error: '',
    })
    .min(3, {
      message: 'Minimum length of the comment - 3 chars',
    }),
  rating: z
    .number({
      required_error: 'Please enter the rating',
    })
    .min(1, {
      message: 'Min value - 1',
    })
    .max(5, {
      message: 'Max value - 5',
    }),
});

export { createReviewSchema };

export type TCreateReviewSchema = z.infer<typeof createReviewSchema>;

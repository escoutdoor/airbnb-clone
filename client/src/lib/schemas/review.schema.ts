import z from 'zod';

const createReviewSchema = z.object({
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

import z from 'zod';

const createReviewSchema = z.object({
  text: z
    .string({
      required_error: '',
    })
    .min(3, {
      message: 'Minimum length of the comment - 3 chars',
    }),
});

export { createReviewSchema };

export type TCreateReviewSchema = z.infer<typeof createReviewSchema>;

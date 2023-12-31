import { z } from 'zod'

export const loginSchema = z.object({
	email: z
		.string({
			invalid_type_error: 'Email must be a string',
		})
		.email({
			message: 'Invalid email',
		}),

	password: z
		.string({
			invalid_type_error: 'Password must be a string',
		})
		.min(6, {
			message: 'Password must be at least 6 characters long',
		}),
})

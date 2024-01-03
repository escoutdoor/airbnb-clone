import { z } from 'zod'

const PASSWORD_REGEX =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/

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
		.regex(PASSWORD_REGEX, {
			message:
				'Password must be at least 6 characters long, contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol',
		}),
})

export const registerSchema = z
	.object({
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
		dateOfBirth: z.date({
			invalid_type_error: 'Date of birth must be a date',
			required_error: 'Date of birth is required',
		}),
		phoneNumber: z
			.string({
				invalid_type_error: 'Phone number must be a string',
			})
			.min(10, {
				message: 'Phone number must be at least 10 characters long',
			}),
	})
	.merge(loginSchema)

export type TLoginSchema = z.infer<typeof loginSchema>

export type TRegisterSchema = z.infer<typeof registerSchema>

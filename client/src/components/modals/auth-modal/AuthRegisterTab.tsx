'use client'

import Field from '@/components/ui/field/Field'
import GradientButton from '@/components/ui/gradient-button/GradientButton'
import { TRegisterSchema, registerSchema } from '@/lib/schemas/auth.schema'
import { AuthService } from '@/services/auth/auth.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const AuthRegisterTab: FC = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
		watch,
	} = useForm<TRegisterSchema>({
		mode: 'onChange',
		resolver: zodResolver(registerSchema),
		defaultValues: {
			dateOfBirth: new Date(),
		},
	})

	const onSubmit: SubmitHandler<TRegisterSchema> = async data => {
		await AuthService.register(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Field
				label="First Name"
				type="text"
				{...register('firstName')}
				error={errors.firstName?.message}
			/>
			<Field
				label="Surname"
				type="text"
				{...register('surName')}
				error={errors.surName?.message}
			/>
			<Field
				label="Email"
				type="email"
				{...register('email')}
				error={errors.email?.message}
			/>
			<Field
				label="Phone Number"
				type="tel"
				{...register('phoneNumber')}
				error={errors.phoneNumber?.message}
			/>
			<Field
				label="Password"
				type="password"
				{...register('password')}
				error={errors.password?.message}
			/>
			<GradientButton type="submit">Sign up</GradientButton>
		</form>
	)
}

export default AuthRegisterTab

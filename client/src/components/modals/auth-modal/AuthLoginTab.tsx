import Field from '@/components/ui/field/Field'
import GradientButton from '@/components/ui/gradient-button/GradientButton'
import { TLoginSchema, loginSchema } from '@/lib/schemas/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const AuthLoginTab: FC = () => {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm<TLoginSchema>({
		mode: 'onChange',
		resolver: zodResolver(loginSchema),
	})

	const onSubmit: SubmitHandler<TLoginSchema> = async data => {
		await signIn('credentials', {
			email: data.email,
			password: data.password,
		})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Field
				type="email"
				label="Email"
				{...register('email')}
				error={errors.email?.message}
			/>
			<Field
				type="password"
				label="Password"
				{...register('password')}
				error={errors.password?.message}
			/>
			<GradientButton type="submit">Log in</GradientButton>
		</form>
	)
}

export default AuthLoginTab

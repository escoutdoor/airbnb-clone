'use client';

import { FC } from 'react';
import { DateTime } from 'luxon';
import { TRegisterSchema, registerSchema } from '@/lib/schemas/auth.schema';
import { AuthService } from '@/services/auth/auth.service';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import GradientButton from '@/components/ui/gradient-button/GradientButton';
import Field from '@/components/ui/field/Field';

const AuthRegisterTab: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm<TRegisterSchema>({
    mode: 'onChange',
    resolver: zodResolver(registerSchema),
    defaultValues: {
      dateOfBirth: DateTime.now().minus({ years: 18 }).toJSDate(),
    },
  });

  const onSubmit: SubmitHandler<TRegisterSchema> = async (data) => {
    await AuthService.register(data);
  };

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
        label="Date of Birth"
        type="date"
        {...register('dateOfBirth')}
        min={DateTime.now().minus({ years: 100 }).toISODate()}
        max={DateTime.now().minus({ years: 3 }).toISODate()}
        error={errors.dateOfBirth?.message}
      />
      <Field
        label="Password"
        type="password"
        {...register('password')}
        error={errors.password?.message}
      />
      <GradientButton type="submit" style={{ marginTop: '15px' }}>
        Sign up
      </GradientButton>
    </form>
  );
};

export default AuthRegisterTab;

import styles from './personal-info.module.scss';
import { NextPage } from 'next';
import { TUserSchema, userSchema } from '@/lib/schemas/user.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { getName } from '@/utils/get-name';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { IUser } from '@/shared/interfaces/user.interface';
import DarkButton from '@/components/ui/dark-button/DarkButton';
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading';
import EditBox from '../edit-box/EditBox';
import Field from '@/components/ui/field/Field';
import { useUpdateProfile } from '@/hooks/useUpdateProfile';

type PersonalInfoProps = {
  profile: IUser;
};

const PersonalInfo: NextPage<PersonalInfoProps> = ({ profile }) => {
  const [activeItem, setActiveItem] = useState<string | undefined>();
  const { updateProfile, isPending, isError } = useUpdateProfile();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<TUserSchema>({
    mode: 'onChange',
    resolver: zodResolver(userSchema),
    values: {
      ...profile,
    },
  });

  const onSubmit: SubmitHandler<TUserSchema> = (data) => {
    updateProfile(data);

    setActiveItem(undefined);
  };

  return (
    <div className={styles.page}>
      <ParagraphHeading>Personal info</ParagraphHeading>
      <div className={styles.container}>
        <EditBox
          title="Legal name"
          description={
            activeItem === 'Legal name'
              ? 'This is the name on your travel document, which could be a license or a passport.'
              : getName({ ...profile })
          }
          setActiveItem={setActiveItem}
          isActive={activeItem === 'Legal name'}
          isDisabled={
            activeItem ? (activeItem === 'Legal name' ? false : true) : false
          }
          resetFields={reset}
        >
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputs}>
              <Field
                label="First name"
                {...register('firstName')}
                error={errors.firstName?.message}
              />
              <Field
                label="Surname"
                {...register('surName')}
                error={errors.surName?.message}
              />
            </div>
            <DarkButton type="submit">Save</DarkButton>
          </form>
        </EditBox>
        <EditBox
          title="Phone number"
          description={
            activeItem === 'Phone number'
              ? 'Change your phone number there'
              : profile.phoneNumber
          }
          setActiveItem={setActiveItem}
          isActive={activeItem === 'Phone number'}
          isDisabled={
            activeItem ? (activeItem === 'Phone number' ? false : true) : false
          }
          resetFields={reset}
        >
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Field
              label="Phone number"
              {...register('phoneNumber')}
              error={errors.phoneNumber?.message}
            />
            <DarkButton type="submit">Save</DarkButton>
          </form>
        </EditBox>
        <EditBox
          title="Email address"
          description={
            activeItem === 'Email address'
              ? 'Use an address you’ll always have access to.'
              : profile.email
          }
          setActiveItem={setActiveItem}
          isActive={activeItem === 'Email address'}
          isDisabled={
            activeItem ? (activeItem === 'Email address' ? false : true) : false
          }
          resetFields={reset}
        >
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Field
              label="Email address"
              {...register('email')}
              error={errors.email?.message}
            />
            <DarkButton type="submit">Save</DarkButton>
          </form>
        </EditBox>
      </div>
    </div>
  );
};

export default PersonalInfo;

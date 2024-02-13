import styles from './personal-info.module.scss';
import { NextPage } from 'next';
import { TUserSchema, userSchema } from '@/lib/schemas/user.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { getName } from '@/utils/get-name';
import { SubmitHandler, useForm } from 'react-hook-form';
import DarkButton from '@/components/ui/dark-button/DarkButton';
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading';
import EditBox from '../edit-box/EditBox';
import { IUser } from '@/shared/interfaces/user.interface';
import Field from '@/components/ui/field/Field';

type PersonalInfoProps = {
  profile: IUser;
};

const PersonalInfo: NextPage<PersonalInfoProps> = ({ profile }) => {
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

  const onSubmit: SubmitHandler<TUserSchema> = (data) => {};

  return (
    <div className={styles.page}>
      <ParagraphHeading>Personal info</ParagraphHeading>
      <div className={styles.container}>
        <EditBox
          title="Legal name"
          description={getName({ ...profile })}
          activeDescription="This is the name on your travel document, which could be a license or a passport."
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
      </div>
    </div>
  );
};

export default PersonalInfo;

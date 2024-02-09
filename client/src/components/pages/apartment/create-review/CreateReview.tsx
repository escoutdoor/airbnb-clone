import { FC } from 'react';
import styles from './create-review.module.scss';
import Field from '@/components/ui/field/Field';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  TCreateReviewSchema,
  createReviewSchema,
} from '@/lib/schemas/review.schema';
import { useCreateReview } from '@/hooks/useCreateReview';
import TextArea from '@/components/ui/text-area/TextArea';
import Text from '@/components/ui/text/Text';
import { useProfile } from '@/hooks/useProfile';
import { useAuthModal } from '@/hooks/useAuthModal';
import DarkButton from '@/components/ui/dark-button/DarkButton';

const CreateReview: FC<{ apartmentId: string }> = ({ apartmentId }) => {
  const { profile } = useProfile();
  const { createReview, isPending } = useCreateReview();
  const { open } = useAuthModal();

  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm<TCreateReviewSchema>({
    mode: 'onChange',
    resolver: zodResolver(createReviewSchema),
  });

  const onSubmit: SubmitHandler<TCreateReviewSchema> = (data) => {
    if (!profile) {
      open('register');
    }

    createReview({ apartmentId, data });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text>Leave your review there</Text>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextArea
          placeholder="Review"
          error={errors.text?.message}
          {...register('text')}
        />
        <DarkButton type="submit">Create</DarkButton>
      </form>
    </div>
  );
};

export default CreateReview;

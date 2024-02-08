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

const CreateReview: FC = () => {
  const { createReview, isPending } = useCreateReview();

  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm<TCreateReviewSchema>({
    mode: 'onChange',
    resolver: zodResolver(createReviewSchema),
  });

  const onSubmit: SubmitHandler<TCreateReviewSchema> = (data) => {};

  return (
    <div className={styles.container}>
      <div className={styles.header}>Hello World</div>
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </div>
  );
};

export default CreateReview;

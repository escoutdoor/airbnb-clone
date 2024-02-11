'use client';

import { FC } from 'react';
import styles from './rating-select.module.scss';
import { Rating, ThinRoundedStar } from '@smastrom/react-rating';
import ErrorText from '@/components/ui/field/error-text/ErrorText';

type RatingSelectProps = {
  handleChange: (value: number) => void;
  value: number;
  error: string | undefined;
};

const RatingSelect: FC<RatingSelectProps> = ({
  value,
  handleChange,
  error,
}) => {
  const myStyles = {
    itemShapes: ThinRoundedStar,
    activeFillColor: '#222222',
    inactiveFillColor: '#717171',
  };

  return (
    <div className={styles.container}>
      <div className={styles.rating__wrapper}>
        <Rating
          value={value || 0}
          onChange={handleChange}
          itemStyles={myStyles}
          className={styles.rating}
          halfFillMode="svg"
        />
      </div>
      {error && (
        <div className={styles.error__wrapper}>
          <ErrorText>{error}</ErrorText>
        </div>
      )}
    </div>
  );
};

export default RatingSelect;

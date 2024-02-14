'use client';

import Text from '@/components/ui/text/Text';
import styles from './edit-box.module.scss';
import { FC, PropsWithChildren } from 'react';
import UnderlinedButton from '@/components/ui/underlined-button/UnderlinedButton';
import SmallText from '@/components/ui/small-text/SmallText';

type EditBoxProps = {
  title: string;
  description: string;
  isActive: boolean;
  isDisabled: boolean;
  resetFields: () => void;
  setActiveItem: (id: string | undefined) => void;
};

const EditBox: FC<PropsWithChildren<EditBoxProps>> = ({
  title,
  description,
  children,
  isActive,
  isDisabled,
  resetFields,
  setActiveItem,
}) => {
  const handleClick = () => {
    if (isActive) {
      setActiveItem(undefined);
      resetFields();
      return;
    }

    setActiveItem(title);
  };

  return (
    <div
      className={
        isDisabled ? `${styles.container} ${styles.disabled}` : styles.container
      }
    >
      <div className={styles.header}>
        <div className={styles.target}>
          <Text>{title}</Text>
          <UnderlinedButton onClick={handleClick}>
            {isActive ? 'Cancel' : 'Edit'}
          </UnderlinedButton>
        </div>
        <SmallText>{description}</SmallText>
      </div>
      <main>{isActive ? children : null}</main>
    </div>
  );
};

export default EditBox;

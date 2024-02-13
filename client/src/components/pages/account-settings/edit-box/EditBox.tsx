'use client';

import Text from '@/components/ui/text/Text';
import styles from './edit-box.module.scss';
import {
  Dispatch,
  FC,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import UnderlinedButton from '@/components/ui/underlined-button/UnderlinedButton';
import SmallText from '@/components/ui/small-text/SmallText';

type EditBoxProps = {
  title: string;
  description: string;
  activeDescription?: string;
  resetFields: () => void;
};

const EditBox: FC<PropsWithChildren<EditBoxProps>> = ({
  title,
  description,
  activeDescription,
  children,
  resetFields,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.target}>
          <Text>{title}</Text>
          <UnderlinedButton
            onClick={() => {
              setIsActive(!isActive);
              resetFields();
            }}
          >
            {isActive ? 'Cancel' : 'Edit'}
          </UnderlinedButton>
        </div>
        <SmallText>
          {isActive ? activeDescription || description : description}
        </SmallText>
      </div>
      <main>{isActive ? children : null}</main>
    </div>
  );
};

export default EditBox;

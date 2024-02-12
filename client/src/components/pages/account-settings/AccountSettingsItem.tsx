import styles from './account-settings.module.scss';
import { IAccountSettingsItem } from '@/interfaces/account-settings-item.interface';
import MediumHeading from '@/components/ui/headings/medium-heading/MediumHeading';
import SmallText from '@/components/ui/small-text/SmallText';
import Link from 'next/link';

const AccountSettingsItem = ({ item }: { item: IAccountSettingsItem }) => {
  return (
    <li className={styles.item}>
      <Link href={item.href}>
        <div className={styles.content}>
          <item.Icon className={styles.icon} />
          <div className={styles.info}>
            <MediumHeading>{item.name}</MediumHeading>
            <SmallText>{item.description}</SmallText>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default AccountSettingsItem;

import { IUser } from '@/shared/interfaces/user.interface';
import styles from './account-settings.module.scss';
import { NextPage } from 'next';
import { getName } from '@/utils/get-name';
import { accountSettings } from '@/data/account-settings.data';
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading';
import Text from '@/components/ui/text/Text';
import UnderlinedButton from '@/components/ui/underlined-button/UnderlinedButton';
import Link from 'next/link';
import AccountSettingsItem from './AccountSettingsItem';

type AccountSettingsProps = {
  profile: IUser;
};

const AccountSettings: NextPage<AccountSettingsProps> = ({ profile }) => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <ParagraphHeading>Account Settings</ParagraphHeading>
        <Text>
          {getName({ ...profile })}, {profile.email}
          {' · '}
          <UnderlinedButton>
            <Link href={`/users/${profile.id}`}>Go to profile</Link>
          </UnderlinedButton>
        </Text>
      </div>
      <ul className={styles.list}>
        {accountSettings.map((item) => (
          <AccountSettingsItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default AccountSettings;

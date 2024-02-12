import { IUser } from '@/shared/interfaces/user.interface';
import styles from './personal-info.module.scss';
import { NextPage } from 'next';

type PersonalInfoProps = {
  profile: IUser;
};

const PersonalInfo: NextPage<PersonalInfoProps> = ({ profile }) => {
  return <div className={styles.page}>PersonalInfo</div>;
};

export default PersonalInfo;

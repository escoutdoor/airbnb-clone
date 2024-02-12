import { IAccountSettingsItem } from '@/interfaces/account-settings-item.interface';
import { GrDocumentUser } from 'react-icons/gr';

const accountSettings: IAccountSettingsItem[] = [
  {
    id: 1,
    name: 'Personal info',
    description: 'Provide personal details and how we can reach you',
    Icon: GrDocumentUser,
    href: '/account-settings/personal-info',
  },
];

export { accountSettings };

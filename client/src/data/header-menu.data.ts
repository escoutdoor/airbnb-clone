import { IHeaderMenuItem } from '@/interfaces/header-menu.interface'

export const headerMenu: IHeaderMenuItem[] = [
	{
		id: 1,
		title: 'Sign up',
		onClick: () => console.log('Sign up'),
	},
	{
		id: 2,
		title: 'Log in',
		onClick: () => console.log('Log in'),
	},
	{
		id: 3,
		title: 'Gift Cards',
		href: '/gift-cards',
	},
	{
		id: 4,
		title: 'Airbnb your home',
		href: '/host/homes',
	},
]

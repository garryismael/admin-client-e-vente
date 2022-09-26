export const titles = [
	'id',
	['name', 'profile'],
	'address',
	'contact',
	'email',
];
export const inputEdit = [
	{ label: 'name', type: 'text' },
	{ label: 'profile', type: 'file' },
	{ label: 'address', type: 'text' },
	{ label: 'contact', type: 'text' },
	{ label: 'email', type: 'email' },
];

export const inputs = inputEdit.concat({ label: 'password', type: 'password' });


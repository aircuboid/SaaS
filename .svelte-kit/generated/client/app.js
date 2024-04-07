export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33')
];

export const server_loads = [2,7];

export const dictionary = {
		"/(marketing)": [22,[4]],
		"/(admin)/account/(menu)": [~8,[2,3]],
		"/(admin)/account/api": [~17,[2]],
		"/(admin)/account/(menu)/billing": [~9,[2,3]],
		"/(admin)/account/(menu)/billing/manage": [~10,[2,3]],
		"/(admin)/account/create_profile": [18,[2]],
		"/(admin)/account/select_plan": [19,[2]],
		"/(admin)/account/(menu)/settings": [11,[2,3]],
		"/(admin)/account/(menu)/settings/change_email": [12,[2,3]],
		"/(admin)/account/(menu)/settings/change_password": [13,[2,3]],
		"/(admin)/account/(menu)/settings/delete_account": [14,[2,3]],
		"/(admin)/account/(menu)/settings/edit_profile": [15,[2,3]],
		"/(admin)/account/(menu)/settings/reset_password": [16,[2,3]],
		"/(admin)/account/sign_out": [20,[2]],
		"/(admin)/account/subscribe/[slug]": [~21,[2]],
		"/(marketing)/blog": [23,[4,5]],
		"/(marketing)/blog/(posts)/awesome_post": [24,[4,5,6]],
		"/(marketing)/blog/(posts)/example_blog_post": [25,[4,5,6]],
		"/(marketing)/blog/(posts)/how_we_built_our_41kb_saas_website": [26,[4,5,6]],
		"/(marketing)/contact_us": [~27,[4]],
		"/(marketing)/login": [28,[4,7]],
		"/(marketing)/login/current_password_error": [29,[4,7]],
		"/(marketing)/login/forgot_password": [~30,[4,7]],
		"/(marketing)/login/sign_in": [~31,[4,7]],
		"/(marketing)/login/sign_up": [~32,[4,7]],
		"/(marketing)/pricing": [33,[4]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';
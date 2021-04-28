import httpRequest from '../utils/httpRequest';
import { getCookie } from '../utils/session';

const userAPI = {
	current: async () => {
		const { data } = await httpRequest.get({
			url: `/user`,
			token: getCookie('token')
		});
		return data;
	},
	login: async (user) => {
		const { data } = await httpRequest.post({
			url: `/users/login`,
			data: user
		});
		return data;
	},
	register: async (user) => {
		const { data } = await httpRequest.post({
			url: `/users/register`,
			data: user
		});
		return data;
	},
	logout: async () => {
		const { data } = await httpRequest.get({
			url: `/users/logout`,
			token: getCookie('token')
		});
		return data;
	},
	single: async (user_name) => {
		const { data } = await httpRequest.get({
			url: `/users/${user_name}`
		});
		return data;
	},
	update: async () => {}
};

export default userAPI;

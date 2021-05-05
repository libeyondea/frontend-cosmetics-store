import httpRequest from '../utils/httpRequest';
import config from 'config';
import { getCookie } from 'lib/utils/session';

const brandAPI = {
	list: async (page = 1, limit = config.LIMIT_PAGE.LIST_CATEGORY) => {
		const { data } = await httpRequest.get({
			url: `/carts`,
			token: getCookie('token'),
			params: {
				offset: (page - 1) * limit,
				limit: limit
			}
		});
		return data;
	},
	add: async (cart) => {
		const { data } = await httpRequest.post({
			url: `/carts/add-to-cart`,
			token: getCookie('token'),
			data: cart
		});
		return data;
	}
};

export default brandAPI;

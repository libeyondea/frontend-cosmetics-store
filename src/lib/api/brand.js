import httpRequest from '../utils/httpRequest';
import config from 'config';

const cartAPI = {
	list: async (page = 1, limit = config.LIMIT_PAGE.LIST_CATEGORY) => {
		const { data } = await httpRequest.get({
			url: `/carts`,
			params: {
				offset: (page - 1) * limit,
				limit: limit
			}
		});
		return data;
	}
};

export default cartAPI;

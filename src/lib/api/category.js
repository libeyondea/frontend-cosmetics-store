import httpRequest from '../utils/httpRequest';
import config from 'config';

const categoryAPI = {
	list: async (page = 1, limit = config.LIMIT_PAGE.LIST_CATEGORY) => {
		const { data } = await httpRequest.get({
			url: `/categories`,
			params: {
				offset: (page - 1) * limit,
				limit: limit
			}
		});
		return data;
	}
};

export default categoryAPI;

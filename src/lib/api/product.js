import httpRequest from '../utils/httpRequest';
import config from 'config';

const postAPI = {
	list: async (page = 1, limit = config.LIMIT_PAGE.LIST_POST_HOME) => {
		const { data } = await httpRequest.get({
			url: '/products',
			params: {
				offset: (page - 1) * limit,
				limit: limit
			}
		});
		return data;
	},
	listByTag: async (tag_slug, page = 1, limit = config.LIMIT_PAGE.LIST_POST_TAG) => {
		const { data } = await httpRequest.get({
			url: '/posts',
			params: {
				tag: tag_slug,
				offset: (page - 1) * limit,
				limit: limit
			}
		});
		return data;
	},
	listByCategory: async (
		category_slug,
		brands = [],
		sort_field = null,
		sort_type = null,
		price_from = null,
		price_to = null,
		page = 1,
		limit = config.LIMIT_PAGE.LIST_POST_CATEGORY
	) => {
		const { data } = await httpRequest.get({
			url: '/products',
			params: {
				provider: 'category',
				slug: category_slug,
				brands: brands,
				sort_field: sort_field,
				sort_type: sort_type,
				price_from: price_from,
				price_to: price_to,
				offset: (page - 1) * limit,
				limit: limit
			}
		});
		return data;
	},
	listByUser: async (user_name, page = 0, limit = config.LIMIT_PAGE.LIST_POST_USER) => {
		const { data } = await httpRequest.get({
			url: '/posts',
			params: {
				user: user_name,
				offset: page * limit,
				limit: limit
			}
		});
		return data;
	},
	listByFavoritedUser: async (
		favorited_user_name,
		page = 0,
		limit = config.LIMIT_PAGE.LIST_POST_FAVORITED
	) => {
		const { data } = await httpRequest.get({
			url: '/posts',
			params: {
				favorited: favorited_user_name,
				offset: page * limit,
				limit: limit
			}
		});
		return data;
	},
	single: async (slug) => {
		const { data } = await httpRequest.get({
			url: `/products/${slug}`
		});
		return data;
	}
};

export default postAPI;

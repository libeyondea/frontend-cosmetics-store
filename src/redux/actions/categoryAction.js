import { LIST_CATEGORY_REQUESTED, LIST_CATEGORY_SUCCEED, LIST_CATEGORY_FAILED } from '../constants';

export const listCategoryRequestedAction = (page) => ({
	type: LIST_CATEGORY_REQUESTED,
	payload: {
		page: page
	}
});
export const listCategorySucceedAction = (categories) => ({
	type: LIST_CATEGORY_SUCCEED,
	payload: {
		categories: categories
	}
});
export const listCategoryFailedAction = (errors) => ({
	type: LIST_CATEGORY_FAILED,
	payload: {
		errors: errors
	}
});

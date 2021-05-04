import { LIST_BRAND_REQUESTED, LIST_BRAND_SUCCEED, LIST_BRAND_FAILED } from '../constants';

export const listBrandRequestedAction = (page) => ({
	type: LIST_BRAND_REQUESTED,
	payload: {
		page: page
	}
});
export const listBrandSucceedAction = (brands) => ({
	type: LIST_BRAND_SUCCEED,
	payload: {
		brands: brands
	}
});
export const listBrandFailedAction = (errors) => ({
	type: LIST_BRAND_FAILED,
	payload: {
		errors: errors
	}
});

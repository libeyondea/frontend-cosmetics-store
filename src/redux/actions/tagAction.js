import { LIST_TAG_REQUESTED, LIST_TAG_SUCCEED, LIST_TAG_FAILED } from '../constants';

export const listTagRequestedAction = (page) => ({
	type: LIST_TAG_REQUESTED,
	payload: {
		page: page
	}
});
export const listTagSucceedAction = (tags) => ({
	type: LIST_TAG_SUCCEED,
	payload: {
		tags: tags
	}
});
export const listTagFailedAction = (errors) => ({
	type: LIST_TAG_FAILED,
	payload: {
		errors: errors
	}
});

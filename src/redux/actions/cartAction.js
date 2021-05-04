import { LIST_CART_FAILED, LIST_CART_REQUESTED, LIST_CART_SUCCEED } from '../constants';

export const listCartRequestedAction = (page) => ({
	type: LIST_CART_REQUESTED,
	payload: {
		page: page
	}
});
export const listCartSucceedAction = (carts) => ({
	type: LIST_CART_SUCCEED,
	payload: {
		carts: carts
	}
});
export const listCartFailedAction = (errors) => ({
	type: LIST_CART_FAILED,
	payload: {
		errors: errors
	}
});

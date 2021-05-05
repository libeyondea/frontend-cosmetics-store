import {
	LIST_CART_FAILED,
	LIST_CART_REQUESTED,
	LIST_CART_SUCCEED,
	ADD_TO_CART_FAILED,
	ADD_TO_CART_REQUESTED,
	ADD_TO_CART_SUCCEED
} from '../constants';

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
//
export const addToCartRequestedAction = (cart) => ({
	type: ADD_TO_CART_REQUESTED,
	payload: {
		cart: cart
	}
});
export const addToCartSucceedAction = (cart) => ({
	type: ADD_TO_CART_SUCCEED,
	payload: {
		cart: cart
	}
});
export const addToCartFailedAction = (errors) => ({
	type: ADD_TO_CART_FAILED,
	payload: {
		errors: errors
	}
});

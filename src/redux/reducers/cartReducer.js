import { LIST_CART_FAILED, LIST_CART_REQUESTED, LIST_CART_SUCCEED } from '../constants';

const initialState = {
	list_cart: {
		carts: [],
		is_loading: true,
		errors: null
	}
};
const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case LIST_CART_REQUESTED:
			return {
				...state,
				list_cart: {
					...state.list_cart,
					is_loading: true
				}
			};
		case LIST_CART_SUCCEED:
			return {
				...state,
				list_cart: {
					...state.list_cart,
					carts: action.payload.carts,
					is_loading: false
				}
			};
		case LIST_CART_FAILED:
			return {
				...state,
				list_cart: {
					...state.list_cart,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};

export default cartReducer;

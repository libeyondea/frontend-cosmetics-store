import {
	LIST_CART_FAILED,
	LIST_CART_REQUESTED,
	LIST_CART_SUCCEED,
	ADD_TO_CART_FAILED,
	ADD_TO_CART_REQUESTED,
	ADD_TO_CART_SUCCEED,
	ORDER_FAILED,
	ORDER_REQUESTED,
	ORDER_SUCCEED
} from '../constants';

const initialState = {
	list_cart: {
		carts: [],
		is_loading: true,
		errors: null
	},
	add_to_cart: {
		cart: {},
		is_loading: false,
		errors: null
	},
	checkout: {
		order: {},
		is_loading: false,
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
		//
		case ADD_TO_CART_REQUESTED:
			return {
				...state,
				add_to_cart: {
					...state.add_to_cart,
					is_loading: true
				}
			};
		case ADD_TO_CART_SUCCEED:
			return {
				...state,
				add_to_cart: {
					...state.add_to_cart,
					cart: action.payload.cart,
					is_loading: false
				}
			};
		case ADD_TO_CART_FAILED:
			return {
				...state,
				add_to_cart: {
					...state.add_to_cart,
					errors: action.payload.errors
				}
			};
		//
		case ORDER_REQUESTED:
			return {
				...state,
				checkout: {
					...state.checkout,
					is_loading: true
				}
			};
		case ORDER_SUCCEED:
			return {
				...state,
				checkout: {
					...state.checkout,
					order: action.payload.order,
					is_loading: false
				}
			};
		case ORDER_FAILED:
			return {
				...state,
				checkout: {
					...state.checkout,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};

export default cartReducer;

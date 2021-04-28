import {
	LIST_PRODUCT_REQUESTED,
	LIST_PRODUCT_SUCCEED,
	LIST_PRODUCT_FAILED,
	LIST_POST_TAG_REQUESTED,
	LIST_POST_TAG_SUCCEED,
	LIST_POST_TAG_FAILED,
	LIST_PRODUCT_CATEGORY_REQUESTED,
	LIST_PRODUCT_CATEGORY_SUCCEED,
	LIST_PRODUCT_CATEGORY_FAILED,
	SINGLE_POST_REQUESTED,
	SINGLE_POST_SUCCEED,
	SINGLE_POST_FAILED
} from '../constants';

const initialState = {
	list_product: {
		products: [],
		products_count: 0,
		is_loading: true,
		errors: null
	},
	list_post_tag: {
		posts: [],
		posts_count: 0,
		is_loading: true,
		errors: null
	},
	list_product_category: {
		products: [],
		products_count: 0,
		is_loading: true,
		errors: null
	},
	single_post: {
		post: {},
		is_loading: true,
		errors: null
	}
};
const producrReducer = (state = initialState, action) => {
	switch (action.type) {
		case LIST_PRODUCT_REQUESTED:
			return {
				...state,
				list_product: {
					...state.list_product,
					is_loading: true
				}
			};
		case LIST_PRODUCT_SUCCEED:
			return {
				...state,
				list_product: {
					...state.list_product,
					products: action.payload.products,
					products_count: action.payload.products_count,
					is_loading: false
				}
			};
		case LIST_PRODUCT_FAILED:
			return {
				...state,
				list_product: {
					...state.list_product,
					errors: action.payload.errors
				}
			};
		//
		case LIST_POST_TAG_REQUESTED:
			return {
				...state,
				list_post_tag: {
					...state.list_post_tag,
					is_loading: true
				}
			};
		case LIST_POST_TAG_SUCCEED:
			return {
				...state,
				list_post_tag: {
					...state.list_post_tag,
					posts: action.payload.posts,
					posts_count: action.payload.posts_count,
					is_loading: false
				}
			};
		case LIST_POST_TAG_FAILED:
			return {
				...state,
				list_post_tag: {
					...state.list_post_tag,
					errors: action.payload.errors
				}
			};
		//
		case LIST_PRODUCT_CATEGORY_REQUESTED:
			return {
				...state,
				list_product_category: {
					...state.list_product_category,
					is_loading: true
				}
			};
		case LIST_PRODUCT_CATEGORY_SUCCEED:
			return {
				...state,
				list_product_category: {
					...state.list_product_category,
					products: action.payload.products,
					products_count: action.payload.products_count,
					is_loading: false
				}
			};
		case LIST_PRODUCT_CATEGORY_FAILED:
			return {
				...state,
				list_product_category: {
					...state.list_product_category,
					errors: action.payload.errors
				}
			};
		//
		case SINGLE_POST_REQUESTED:
			return {
				...state,
				single_post: {
					...state.single_post,
					is_loading: true
				}
			};
		case SINGLE_POST_SUCCEED:
			return {
				...state,
				single_post: {
					...state.single_post,
					post: action.payload.post,
					is_loading: false
				}
			};
		case SINGLE_POST_FAILED:
			return {
				...state,
				single_post: {
					...state.single_post,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};

export default producrReducer;

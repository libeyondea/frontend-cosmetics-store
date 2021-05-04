import { LIST_BRAND_REQUESTED, LIST_BRAND_SUCCEED, LIST_BRAND_FAILED } from '../constants';

const initialState = {
	list_brand: {
		brands: [],
		is_loading: true,
		errors: null
	}
};
const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case LIST_BRAND_REQUESTED:
			return {
				...state,
				list_brand: {
					...state.list_brand,
					is_loading: true
				}
			};
		case LIST_BRAND_SUCCEED:
			return {
				...state,
				list_brand: {
					...state.list_brand,
					brands: action.payload.brands,
					is_loading: false
				}
			};
		case LIST_BRAND_FAILED:
			return {
				...state,
				list_brand: {
					...state.list_brand,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};

export default categoryReducer;

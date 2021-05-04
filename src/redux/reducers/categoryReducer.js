import { LIST_CATEGORY_REQUESTED, LIST_CATEGORY_SUCCEED, LIST_CATEGORY_FAILED } from '../constants';

const initialState = {
	list_category: {
		categories: [],
		is_loading: true,
		errors: null
	}
};
const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case LIST_CATEGORY_REQUESTED:
			return {
				...state,
				list_category: {
					...state.list_category,
					is_loading: true
				}
			};
		case LIST_CATEGORY_SUCCEED:
			return {
				...state,
				list_category: {
					...state.list_category,
					categories: action.payload.categories,
					is_loading: false
				}
			};
		case LIST_CATEGORY_FAILED:
			return {
				...state,
				list_category: {
					...state.list_category,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};

export default categoryReducer;

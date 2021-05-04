import { LIST_TAG_REQUESTED, LIST_TAG_SUCCEED, LIST_TAG_FAILED } from '../constants';

const initialState = {
	list_tag: {
		tags: [],
		is_loading: true,
		errors: null
	},
	single_tag: {
		tag: {},
		is_loading: true,
		errors: null
	}
};
const tagReducer = (state = initialState, action) => {
	switch (action.type) {
		case LIST_TAG_REQUESTED:
			return {
				...state,
				list_tag: {
					...state.list_tag,
					is_loading: true
				}
			};
		case LIST_TAG_SUCCEED:
			return {
				...state,
				list_tag: {
					...state.list_tag,
					tags: action.payload.tags,
					is_loading: false
				}
			};
		case LIST_TAG_FAILED:
			return {
				...state,
				list_tag: {
					...state.list_tag,
					errors: action.payload.errors
				}
			};
		default:
			return state;
	}
};

export default tagReducer;

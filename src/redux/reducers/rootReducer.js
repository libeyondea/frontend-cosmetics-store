import { combineReducers } from 'redux';
import productReducer from './productReducer';
import tagReducer from './tagReducer';
import categoryReducer from './categoryReducer';
import userReducer from './userReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
	users: userReducer,
	products: productReducer,
	tags: tagReducer,
	categories: categoryReducer,
	comments: commentReducer
});

export default rootReducer;

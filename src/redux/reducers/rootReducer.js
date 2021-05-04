import { combineReducers } from 'redux';
import productReducer from './productReducer';
import tagReducer from './tagReducer';
import categoryReducer from './categoryReducer';
import brandReducer from './brandReducer';
import userReducer from './userReducer';
import commentReducer from './commentReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
	users: userReducer,
	products: productReducer,
	tags: tagReducer,
	categories: categoryReducer,
	brands: brandReducer,
	comments: commentReducer,
	carts: cartReducer
});

export default rootReducer;

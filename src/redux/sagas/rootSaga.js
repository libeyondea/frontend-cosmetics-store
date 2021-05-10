import { all } from 'redux-saga/effects';
import {
	listProductWatcher,
	listPostTagWatcher,
	listProductCategoryWatcher,
	singleProductWatcher
} from './productSaga';
import { listTagWatcher } from './tagSaga';
import { listCartWatcher, addToCartWatcher, checkoutWatcher } from './cartSaga';
import { listCategoryWatcher } from './categorySaga';
import { listBrandWatcher } from './brandSaga';
import { listCommentWatcher } from './commentSaga';
import {
	loginUserWatcher,
	registerUserWatcher,
	currentUserWatcher,
	logoutUserWatcher,
	singleUserWatcher,
	updateUserWatcher
} from './userSaga';

function* rootSaga() {
	yield all([
		checkoutWatcher(),
		addToCartWatcher(),
		listCartWatcher(),
		listProductWatcher(),
		listPostTagWatcher(),
		listProductCategoryWatcher(),
		listBrandWatcher(),
		singleProductWatcher(),
		listTagWatcher(),
		listCategoryWatcher(),
		loginUserWatcher(),
		registerUserWatcher(),
		currentUserWatcher(),
		logoutUserWatcher(),
		singleUserWatcher(),
		updateUserWatcher(),
		listCommentWatcher()
	]);
}

export default rootSaga;

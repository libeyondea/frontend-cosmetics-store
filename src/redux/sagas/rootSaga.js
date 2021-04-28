import { all } from 'redux-saga/effects';
import { listProductWatcher, listPostTagWatcher, listProductCategoryWatcher, singlePostWatcher } from './productSaga';
import { singleTagWatcher, listTagWatcher } from './tagSaga';
import { singleCategoryWatcher, listCategoryWatcher } from './categorySaga';
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
		listProductWatcher(),
		listPostTagWatcher(),
		listProductCategoryWatcher(),
		singlePostWatcher(),
		listTagWatcher(),
		singleTagWatcher(),
		listCategoryWatcher(),
		singleCategoryWatcher(),
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

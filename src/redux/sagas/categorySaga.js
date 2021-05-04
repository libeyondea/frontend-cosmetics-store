import { call, put, takeLatest } from 'redux-saga/effects';
import { LIST_CATEGORY_REQUESTED } from '../constants';
import { listCategorySucceedAction, listCategoryFailedAction } from '../actions/categoryAction';
import categoryAPI from 'lib/api/category';

function* listCategory(action) {
	const { page } = action.payload;
	try {
		const res = yield call(categoryAPI.list, page);
		if (res.success) {
			yield put(listCategorySucceedAction(res.data));
		}
	} catch (err) {
		yield put(listCategoryFailedAction(err.message));
	}
}

export function* listCategoryWatcher() {
	yield takeLatest(LIST_CATEGORY_REQUESTED, listCategory);
}

import { call, put, takeLatest } from 'redux-saga/effects';
import { LIST_BRAND_REQUESTED } from '../constants';
import { listBrandSucceedAction, listBrandFailedAction } from '../actions/brandAction';
import brandAPI from 'lib/api/brand';

function* listBrand(action) {
	const { page } = action.payload;
	try {
		const res = yield call(brandAPI.list, page);
		if (res.success) {
			yield put(listBrandSucceedAction(res.data));
		}
	} catch (err) {
		yield put(listBrandFailedAction(err.message));
	}
}

export function* listBrandWatcher() {
	yield takeLatest(LIST_BRAND_REQUESTED, listBrand);
}

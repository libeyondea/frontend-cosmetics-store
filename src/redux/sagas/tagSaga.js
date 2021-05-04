import { call, put, takeLatest } from 'redux-saga/effects';
import { LIST_TAG_REQUESTED } from '../constants';
import { listTagSucceedAction, listTagFailedAction } from '../actions/tagAction';
import tagAPI from '../../lib/api/tag';

function* listTag(action) {
	const { page } = action.payload;
	try {
		const res = yield call(tagAPI.list, page);
		if (res.success) {
			yield put(listTagSucceedAction(res.data));
		}
	} catch (err) {
		yield put(listTagFailedAction(err.message));
	}
}

export function* listTagWatcher() {
	yield takeLatest(LIST_TAG_REQUESTED, listTag);
}

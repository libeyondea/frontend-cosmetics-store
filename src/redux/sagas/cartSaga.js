import { call, put, takeLatest } from 'redux-saga/effects';
import { LIST_CART_REQUESTED } from '../constants';
import { listCartSucceedAction, listCartFailedAction } from '../actions/cartAction';
import cartAPI from 'lib/api/cart';

function* listCart(action) {
	const { page } = action.payload;
	try {
		const res = yield call(cartAPI.list, page);
		if (res.success) {
			yield put(listCartSucceedAction(res.data));
		}
	} catch (err) {
		yield put(listCartFailedAction(err.message));
	}
}

export function* listCartWatcher() {
	yield takeLatest(LIST_CART_REQUESTED, listCart);
}

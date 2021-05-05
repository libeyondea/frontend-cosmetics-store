import { call, put, takeLatest } from 'redux-saga/effects';
import { LIST_CART_REQUESTED, ADD_TO_CART_REQUESTED } from '../constants';
import {
	listCartSucceedAction,
	listCartFailedAction,
	addToCartFailedAction,
	addToCartSucceedAction
} from '../actions/cartAction';
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

function* addToCart(action) {
	const { cart } = action.payload;
	try {
		const res = yield call(cartAPI.add, cart);
		if (res.success) {
			yield put(addToCartSucceedAction(res.data));
		}
	} catch (err) {
		yield put(addToCartFailedAction(err.message));
	}
}

export function* listCartWatcher() {
	yield takeLatest(LIST_CART_REQUESTED, listCart);
}

export function* addToCartWatcher() {
	yield takeLatest(ADD_TO_CART_REQUESTED, addToCart);
}

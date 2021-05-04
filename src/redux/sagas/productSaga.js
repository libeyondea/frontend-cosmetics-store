import { call, put, takeLatest } from 'redux-saga/effects';
import {
	LIST_PRODUCT_REQUESTED,
	LIST_POST_TAG_REQUESTED,
	LIST_PRODUCT_CATEGORY_REQUESTED,
	SINGLE_PRODUCT_REQUESTED
} from '../constants';
import {
	listProductSucceedAction,
	listProductFailedAction,
	listPostTagSucceedAction,
	listPostTagFailedAction,
	listProductCategorySucceedAction,
	listProductCategoryFailedAction,
	singleProductSucceedAction,
	singleProductFailedAction
} from '../actions/productAction';
import productAPI from '../../lib/api/product';

function* listProduct(action) {
	try {
		const { page } = action.payload;
		const res = yield call(productAPI.list, page);
		if (res.success) {
			yield put(listProductSucceedAction(res.data, res.meta.posts_count));
		}
	} catch (err) {
		yield put(listProductFailedAction(err.message));
	}
}

function* listPostTag(action) {
	try {
		const { tag_slug, page } = action.payload;
		const res = yield call(productAPI.listByTag, tag_slug, page);
		if (res.success) {
			yield put(listPostTagSucceedAction(res.data, res.meta.posts_count));
		}
	} catch (err) {
		yield put(listPostTagFailedAction(err.message));
	}
}

function* listProductCategory(action) {
	try {
		const {
			category_slug,
			brands,
			price_from,
			price_to,
			page,
			sort_type,
			sort_field
		} = action.payload;
		const res = yield call(
			productAPI.listByCategory,
			category_slug,
			brands,
			sort_field,
			sort_type,
			price_from,
			price_to,
			page
		);
		if (res.success) {
			yield put(listProductCategorySucceedAction(res.data, res.meta.products_count));
		}
	} catch (err) {
		yield put(listProductCategoryFailedAction(err.message));
	}
}

function* singleProduct(action) {
	try {
		const { slug } = action.payload;
		const res = yield call(productAPI.single, slug);
		if (res.success) {
			yield put(singleProductSucceedAction(res.data));
		}
	} catch (err) {
		yield put(singleProductFailedAction(err.message));
	}
}

export function* listProductWatcher() {
	yield takeLatest(LIST_PRODUCT_REQUESTED, listProduct);
}

export function* listPostTagWatcher() {
	yield takeLatest(LIST_POST_TAG_REQUESTED, listPostTag);
}

export function* listProductCategoryWatcher() {
	yield takeLatest(LIST_PRODUCT_CATEGORY_REQUESTED, listProductCategory);
}

export function* singleProductWatcher() {
	yield takeLatest(SINGLE_PRODUCT_REQUESTED, singleProduct);
}

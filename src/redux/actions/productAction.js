import {
	LIST_PRODUCT_REQUESTED,
	LIST_PRODUCT_SUCCEED,
	LIST_PRODUCT_FAILED,
	LIST_POST_TAG_REQUESTED,
	LIST_POST_TAG_SUCCEED,
	LIST_POST_TAG_FAILED,
	LIST_PRODUCT_CATEGORY_REQUESTED,
	LIST_PRODUCT_CATEGORY_SUCCEED,
	LIST_PRODUCT_CATEGORY_FAILED,
	SINGLE_PRODUCT_REQUESTED,
	SINGLE_PRODUCT_SUCCEED,
	SINGLE_PRODUCT_FAILED
} from '../constants';

export const listProductRequestedAction = (page) => ({
	type: LIST_PRODUCT_REQUESTED,
	payload: {
		page: page
	}
});
export const listProductSucceedAction = (products, products_count) => ({
	type: LIST_PRODUCT_SUCCEED,
	payload: {
		products: products,
		products_count: products_count
	}
});
export const listProductFailedAction = (errors) => ({
	type: LIST_PRODUCT_FAILED,
	payload: {
		errors: errors
	}
});
//
export const listPostTagRequestedAction = (tag_slug, page) => ({
	type: LIST_POST_TAG_REQUESTED,
	payload: {
		tag_slug: tag_slug,
		page: page
	}
});
export const listPostTagSucceedAction = (posts, posts_count) => ({
	type: LIST_POST_TAG_SUCCEED,
	payload: {
		posts: posts,
		posts_count: posts_count
	}
});
export const listPostTagFailedAction = (errors) => ({
	type: LIST_POST_TAG_FAILED,
	payload: {
		errors: errors
	}
});
//
export const listProductCategoryRequestedAction = (
	category_slug,
	brands,
	sort_field,
	sort_type,
	price_from,
	price_to,
	page
) => ({
	type: LIST_PRODUCT_CATEGORY_REQUESTED,
	payload: {
		category_slug: category_slug,
		brands: brands,
		sort_field: sort_field,
		sort_type: sort_type,
		price_from: price_from,
		price_to: price_to,
		page: page
	}
});
export const listProductCategorySucceedAction = (products, products_count) => ({
	type: LIST_PRODUCT_CATEGORY_SUCCEED,
	payload: {
		products: products,
		products_count: products_count
	}
});
export const listProductCategoryFailedAction = (errors) => ({
	type: LIST_PRODUCT_CATEGORY_FAILED,
	payload: {
		errors: errors
	}
});
//
export const singleProductRequestedAction = (slug) => ({
	type: SINGLE_PRODUCT_REQUESTED,
	payload: {
		slug: slug
	}
});
export const singleProductSucceedAction = (product) => ({
	type: SINGLE_PRODUCT_SUCCEED,
	payload: {
		product: product
	}
});
export const singleProductFailedAction = (errors) => ({
	type: SINGLE_PRODUCT_FAILED,
	payload: {
		errors: errors
	}
});

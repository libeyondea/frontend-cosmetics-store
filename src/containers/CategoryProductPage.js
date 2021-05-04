import React, { useCallback, useEffect, useState } from 'react';
import { Range } from 'rc-slider';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { listProductCategoryRequestedAction } from 'redux/actions/productAction';
import useRouter from 'lib/hooks/useRouter';
import MayBeSpinner from 'components/MayBeSpinner';
import { listCategoryRequestedAction } from 'redux/actions/categoryAction';
import { Link } from 'react-router-dom';
import { listBrandRequestedAction } from 'redux/actions/brandAction';

const CategoryProductPage = ({ props }) => {
	const [amount, setAmount] = useState([10000, 10000000]);
	const [price, setPrice] = useState([]);
	const [brands, setBrands] = useState([]);
	const [sortValue, setSortValue] = useState('desc_date');
	const [sortBy, setSortBy] = useState([]);
	const router = useRouter();
	const dispatch = useDispatch();
	const listProductCategory = useSelector((state) => state.products.list_product_category);
	const listCategory = useSelector((state) => state.categories.list_category);
	const listBrand = useSelector((state) => state.brands.list_brand);
	const {
		query: { slug }
	} = router;

	const onChangeAmount = (value) => {
		setAmount([value[0], value[1]]);
	};
	const handleAmount = useCallback(
		(e) => {
			e.preventDefault();
			setPrice([amount[0], amount[1]]);
		},
		[amount]
	);

	useEffect(() => {
		dispatch(listBrandRequestedAction(1));
	}, [dispatch]);

	useEffect(() => {
		dispatch(
			listProductCategoryRequestedAction(slug, brands, sortBy[0], sortBy[1], price[0], price[1])
		);
	}, [brands, dispatch, price, slug, sortBy]);

	const handleCheckboxChange = (event) => {
		let newArray = [...brands, event.target.id];
		if (brands.includes(event.target.id)) {
			newArray = newArray.filter((day) => day !== event.target.id);
		}
		setBrands(newArray);
	};

	const handleSortBy = (event) => {
		let value = event.target.value;
		let sortField = '';
		let sortType = '';
		if (value === 'desc_date') {
			sortField = 'created_at';
			sortType = 'desc';
		} else if (value === 'asc_date') {
			sortField = 'created_at';
			sortType = 'asc';
		} else if (value === 'desc_price') {
			sortField = 'price';
			sortType = 'desc';
		} else if (value === 'asc_price') {
			sortField = 'price';
			sortType = 'asc';
		}
		setSortValue(value);
		setSortBy([sortField, sortType]);
	};

	return (
		<Layout>
			<div className="breacrumb-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="breadcrumb-text">
								<a href="#!">
									<i className="fa fa-home" /> Home
								</a>
								<span>Shop</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="product-shop spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
							<div className="filter-widget">
								<h4 className="fw-title">Categories</h4>
								<ul className="filter-catagories">
									<MayBeSpinner test={listCategory.is_loading} spinner={<>Loading...</>}>
										{listCategory.categories.map((item) => (
											<li key={item.id}>
												<Link to={`/category/${item.slug}`}>{item.title}</Link>
											</li>
										))}
									</MayBeSpinner>
								</ul>
							</div>
							<div className="filter-widget">
								<h4 className="fw-title">Brands</h4>
								<div className="fw-brand-check">
									{listBrand.brands.map((item) => (
										<div className="bc-item" key={item.id}>
											<label htmlFor={item.slug}>
												{item.title}
												<input
													name="brand"
													type="checkbox"
													id={item.slug}
													onChange={handleCheckboxChange}
												/>
												<span className="checkmark" />
											</label>
										</div>
									))}
								</div>
							</div>
							<div className="filter-widget">
								<h4 className="fw-title">Price</h4>
								<div className="filter-range-wrap">
									<div className="range-slider">
										{amount[0]} - {amount[1]}
									</div>
									<Range
										allowCross={false}
										min={10000}
										max={10000000}
										defaultValue={amount}
										onChange={onChangeAmount}
									/>
								</div>
								<a href="#!" className="filter-btn" onClick={handleAmount}>
									Filter
								</a>
							</div>
							<div className="filter-widget">
								<h4 className="fw-title">Tags</h4>
								<div className="fw-tags">
									<a href="#!">Towel</a>
									<a href="#!">Shoes</a>
									<a href="#!">Coat</a>
									<a href="#!">Dresses</a>
									<a href="#!">Trousers</a>
									<a href="#!">Men's hats</a>
									<a href="#!">Backpack</a>
								</div>
							</div>
						</div>
						<div className="col-lg-9 order-1 order-lg-2">
							<div className="product-show-option">
								<div className="row">
									<div className="col-lg-7 col-md-7">
										<div className="select-option">
											<select
												className="custom-select sorting"
												onChange={handleSortBy}
												value={sortValue}
											>
												<option value="desc_date">Desc date</option>
												<option value="asc_date">Asc date</option>
												<option value="desc_price">Desc price</option>
												<option value="asc_price">Asc price</option>
												<option value="desc_selling">Desc selling</option>
												<option value="asc_selling">Asc selling</option>
											</select>
										</div>
									</div>
									<div className="col-lg-5 col-md-5 text-right">
										<p>Show 01- 09 Of 66 Product</p>
									</div>
								</div>
							</div>
							<div className="product-list">
								<MayBeSpinner test={listProductCategory.is_loading} spinner={<>Loading...</>}>
									<div className="row">
										{listProductCategory.products?.map((product) => (
											<div className="col-lg-4 col-sm-6" key={product.id}>
												<ProductCard
													title={product.title}
													price={product.price}
													discount={product.discount}
													image={product.images[0]?.image_url}
													slug={product.slug}
													category_title={product.category?.title}
												/>
											</div>
										))}
									</div>
								</MayBeSpinner>
							</div>
							<div className="loading-more">
								<i className="icon_loading" />
								<a href="#!">Loading More</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default CategoryProductPage;

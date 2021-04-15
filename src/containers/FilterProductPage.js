import React, { useState } from 'react';
import { Range } from 'rc-slider';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';

const FilterProductPage = ({ props }) => {
	const [amount, setAmount] = useState([10000, 100000]);

	const onChangeAmount = (value) => {
		setAmount([value[0], value[1]]);
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
									<li>
										<a href="#!">Men</a>
									</li>
									<li>
										<a href="#!">Women</a>
									</li>
									<li>
										<a href="#!">Kids</a>
									</li>
								</ul>
							</div>
							<div className="filter-widget">
								<h4 className="fw-title">Brand</h4>
								<div className="fw-brand-check">
									<div className="bc-item">
										<label htmlFor="bc-calvin">
											Calvin Klein
											<input type="checkbox" id="bc-calvin" />
											<span className="checkmark" />
										</label>
									</div>
									<div className="bc-item">
										<label htmlFor="bc-diesel">
											Diesel
											<input type="checkbox" id="bc-diesel" />
											<span className="checkmark" />
										</label>
									</div>
									<div className="bc-item">
										<label htmlFor="bc-polo">
											Polo
											<input type="checkbox" id="bc-polo" />
											<span className="checkmark" />
										</label>
									</div>
									<div className="bc-item">
										<label htmlFor="bc-tommy">
											Tommy Hilfiger
											<input type="checkbox" id="bc-tommy" />
											<span className="checkmark" />
										</label>
									</div>
								</div>
							</div>
							<div className="filter-widget">
								<h4 className="fw-title">Price</h4>
								<div className="filter-range-wrap">
									<div className="range-slider">
										{amount[0]} - {amount[1]}
										{/* <div className="price-input">
											<input type="text" id="minamount" value={amount[0]} />
											<input type="text" id="maxamount" value={amount[1]} /> 
										</div>*/}
									</div>
									<Range allowCross={false} min={10000} max={1000000} defaultValue={amount} onChange={onChangeAmount} />
								</div>
								<a href="#!" className="filter-btn">
									Filter
								</a>
							</div>
							<div className="filter-widget">
								<h4 className="fw-title">Color</h4>
								<div className="fw-color-choose">
									<div className="cs-item">
										<input type="radio" id="cs-black" />
										<label className="cs-black" htmlFor="cs-black">
											Black
										</label>
									</div>
									<div className="cs-item">
										<input type="radio" id="cs-violet" />
										<label className="cs-violet" htmlFor="cs-violet">
											Violet
										</label>
									</div>
									<div className="cs-item">
										<input type="radio" id="cs-blue" />
										<label className="cs-blue" htmlFor="cs-blue">
											Blue
										</label>
									</div>
									<div className="cs-item">
										<input type="radio" id="cs-yellow" />
										<label className="cs-yellow" htmlFor="cs-yellow">
											Yellow
										</label>
									</div>
									<div className="cs-item">
										<input type="radio" id="cs-red" />
										<label className="cs-red" htmlFor="cs-red">
											Red
										</label>
									</div>
									<div className="cs-item">
										<input type="radio" id="cs-green" />
										<label className="cs-green" htmlFor="cs-green">
											Green
										</label>
									</div>
								</div>
							</div>
							<div className="filter-widget">
								<h4 className="fw-title">ML</h4>
								<div className="fw-size-choose">
									<div className="sc-item">
										<input type="radio" id="sm-size" />
										<label htmlFor="sm-size">100ml</label>
									</div>
									<div className="sc-item">
										<input type="radio" id="md-size" />
										<label htmlFor="md-size">200ml</label>
									</div>
									<div className="sc-item">
										<input type="radio" id="lg-size" />
										<label htmlFor="lg-size">400ml</label>
									</div>
									<div className="sc-item">
										<input type="radio" id="xl-size" />
										<label htmlFor="xl-size">600ml</label>
									</div>
								</div>
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
											<select class="custom-select sorting" defaultValue="asc">
												<option value="asc">Asc</option>
												<option value="desc">Desc</option>
											</select>
											<select class="custom-select p-show" defaultValue="10">
												<option value="10">Show: 10</option>
												<option value="20">Show: 20</option>
												<option value="50">Show: 50</option>
												<option value="100">Show: 100</option>
											</select>
										</div>
									</div>
									<div className="col-lg-5 col-md-5 text-right">
										<p>Show 01- 09 Of 36 Product</p>
									</div>
								</div>
							</div>
							<div className="product-list">
								<div className="row">
									<div className="col-lg-4 col-sm-6">
										<ProductCard
											title="Product 9291"
											price="1000000"
											discount="222000"
											image="http://placehold.it/666x666"
											slug="product"
											category_title="Trang điểm"
										/>
									</div>
									<div className="col-lg-4 col-sm-6">
										<ProductCard
											title="Product 9291"
											price="1000000"
											discount="222000"
											image="http://placehold.it/666x666"
											slug="product"
											category_title="Trang điểm"
										/>
									</div>
									<div className="col-lg-4 col-sm-6">
										<ProductCard
											title="Product 9291"
											price="1000000"
											discount="222000"
											image="http://placehold.it/666x666"
											slug="product"
											category_title="Trang điểm"
										/>
									</div>
									<div className="col-lg-4 col-sm-6">
										<ProductCard
											title="Product 9291"
											price="1000000"
											discount="222000"
											image="http://placehold.it/666x666"
											slug="product"
											category_title="Trang điểm"
										/>
									</div>
									<div className="col-lg-4 col-sm-6">
										<ProductCard
											title="Product 9291"
											price="1000000"
											discount="222000"
											image="http://placehold.it/666x666"
											slug="product"
											category_title="Trang điểm"
										/>
									</div>
									<div className="col-lg-4 col-sm-6">
										<ProductCard
											title="Product 9291"
											price="1000000"
											discount="222000"
											image="http://placehold.it/666x666"
											slug="product"
											category_title="Trang điểm"
										/>
									</div>
								</div>
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

export default FilterProductPage;

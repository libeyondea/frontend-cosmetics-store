import React from 'react';
import Layout from '../components/Layout';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import ProductCard from '../components/ProductCard';

const ProductPage = ({ props }) => {
	return (
		<Layout>
			<div className="breacrumb-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="breadcrumb-text product-more">
								<a href="/">
									<i className="fa fa-home" /> Home
								</a>
								<a href="/shop">Shop</a>
								<span>Detail</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="product-shop spad page-details">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="row">
								<div className="col-lg-5">
									<Tab.Container id="image-tab" defaultActiveKey="first">
										<Tab.Content className="product-pic-zoom">
											<Tab.Pane eventKey="first">
												<img
													className="product-big-img"
													src="http://placehold.it/400x500"
													alt="img"
												/>
												<div className="zoom-icon">
													<i className="fa fa-search-plus" />
												</div>
											</Tab.Pane>
											<Tab.Pane eventKey="second">
												<img
													className="product-big-img"
													src="http://placehold.it/400x500"
													alt="img"
												/>
												<div className="zoom-icon">
													<i className="fa fa-search-plus" />
												</div>
											</Tab.Pane>
											<Tab.Pane eventKey="third">
												<img
													className="product-big-img"
													src="http://placehold.it/400x500"
													alt="img"
												/>
												<div className="zoom-icon">
													<i className="fa fa-search-plus" />
												</div>
											</Tab.Pane>
										</Tab.Content>
										<div className="product-thumbs">
											<Nav className="product-thumbs-track ps-slider owl-carousel">
												<Nav.Item>
													<Nav.Link className="pt mr-3 mb-3" eventKey="first">
														<img src="http://placehold.it/400x500" width="100" alt="img" />
													</Nav.Link>
												</Nav.Item>
												<Nav.Item>
													<Nav.Link className="pt mr-3 mb-3" eventKey="second">
														<img src="http://placehold.it/400x500" width="100" alt="img" />
													</Nav.Link>
												</Nav.Item>
												<Nav.Item>
													<Nav.Link className="pt" eventKey="third">
														<img src="http://placehold.it/400x500" width="100" alt="img" />
													</Nav.Link>
												</Nav.Item>
											</Nav>
										</div>
									</Tab.Container>
								</div>
								<div className="col-lg-7">
									<div className="product-details">
										<div className="pd-title">
											<h3>Pure Pineapple</h3>
											<a href="#!" className="heart-icon">
												<i className="icon_heart_alt" />
											</a>
										</div>
										<div className="pd-rating">
											<i className="fa fa-star mr-1" />
											<i className="fa fa-star mr-1" />
											<i className="fa fa-star mr-1" />
											<i className="fa fa-star mr-1" />
											<i className="fa fa-star-o mr-1" />
											<span>(5)</span>
										</div>
										<div className="pd-desc">
											<p>
												Lorem ipsum dolor sit amet, consectetur ing elit, sed do eiusmod tempor sum
												dolor sit amet, consectetur adipisicing elit, sed do mod tempor
											</p>
											<h4>
												$495.00 <span>629.99</span>
											</h4>
										</div>
										<div className="pd-color">
											<h6>Color</h6>
											<div className="pd-color-choose">
												<div className="cc-item">
													<input type="radio" id="cc-black" />
													<label htmlFor="cc-black" />
												</div>
												<div className="cc-item">
													<input type="radio" id="cc-yellow" />
													<label htmlFor="cc-yellow" className="cc-yellow" />
												</div>
												<div className="cc-item">
													<input type="radio" id="cc-violet" />
													<label htmlFor="cc-violet" className="cc-violet" />
												</div>
											</div>
										</div>
										<div className="pd-size-choose">
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
										<div className="quantity">
											<div className="pro-qty">
												<span className="dec qtybtn">-</span>
												<input type="text" defaultValue={1} />
												<span className="inc qtybtn">+</span>
											</div>
											<a href="#!" className="primary-btn pd-cart">
												Add To Cart
											</a>
										</div>
										<ul className="pd-tags">
											<li>
												<span>CATEGORIES</span>: Trang điểm
											</li>
											<li>
												<span>TAGS</span>: Kem
											</li>
										</ul>
										<div className="pd-share">
											<div className="p-code">Sku : 00012</div>
											<div className="pd-social">
												<a href="#!">
													<i className="ti-facebook" />
												</a>
												<a href="#!">
													<i className="ti-twitter-alt" />
												</a>
												<a href="#!">
													<i className="ti-linkedin" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="product-tab">
								<Tab.Container id="left-tabs-example" defaultActiveKey="first">
									<div className="tab-item">
										<Nav as="ul">
											<Nav.Item as="li">
												<Nav.Link eventKey="first">DESCRIPTION</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link eventKey="second">SPECIFICATIONS</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link eventKey="third">Customer Reviews (02)</Nav.Link>
											</Nav.Item>
										</Nav>
									</div>
									<Tab.Content className="tab-item-content">
										<div className="tab-content">
											<Tab.Pane eventKey="first">
												<div className="product-content">
													<div className="row">
														<div className="col-12">
															<h5>Introduction</h5>
															<p>
																Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
																eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
																ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
																aliquip ex ea commodo consequat. Duis aute irure dolor in{' '}
															</p>
															<h5>Features</h5>
															<p>
																Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
																eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
																ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
																aliquip ex ea commodo consequat. Duis aute irure dolor in{' '}
															</p>
														</div>
													</div>
												</div>
											</Tab.Pane>
											<Tab.Pane eventKey="second">
												<div className="specification-table">
													<table>
														<tbody>
															<tr>
																<td className="p-catagory">Customer Rating</td>
																<td>
																	<div className="pd-rating">
																		<i className="fa fa-star mr-1" />
																		<i className="fa fa-star mr-1" />
																		<i className="fa fa-star mr-1" />
																		<i className="fa fa-star mr-1" />
																		<i className="fa fa-star-o mr-1" />
																		<span>(5)</span>
																	</div>
																</td>
															</tr>
															<tr>
																<td className="p-catagory">Price</td>
																<td>
																	<div className="p-price">$495.00</div>
																</td>
															</tr>
															<tr>
																<td className="p-catagory">Add To Cart</td>
																<td>
																	<div className="cart-add">+ add to cart</div>
																</td>
															</tr>
															<tr>
																<td className="p-catagory">Availability</td>
																<td>
																	<div className="p-stock">22 in stock</div>
																</td>
															</tr>
															<tr>
																<td className="p-catagory">Weight</td>
																<td>
																	<div className="p-weight">1,3kg</div>
																</td>
															</tr>
															<tr>
																<td className="p-catagory">ML</td>
																<td>
																	<div className="p-size">200ML</div>
																</td>
															</tr>
															<tr>
																<td className="p-catagory">Color</td>
																<td>
																	<span className="cs-color" />
																</td>
															</tr>
															<tr>
																<td className="p-catagory">Sku</td>
																<td>
																	<div className="p-code">00012</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</Tab.Pane>
											<Tab.Pane eventKey="third">
												<div className="customer-review-option">
													<div className="row">
														<div className="col-12 col-md-6">
															<h4>2 Comments</h4>
															<div className="comment-option">
																<div className="co-item">
																	<div className="avatar-pic">
																		<img src="/img/product-single/avatar-1.png" alt="img" />
																	</div>
																	<div className="avatar-text">
																		<div className="at-rating">
																			<i className="fa fa-star mr-1" />
																			<i className="fa fa-star mr-1" />
																			<i className="fa fa-star mr-1" />
																			<i className="fa fa-star mr-1" />
																			<i className="fa fa-star-o mr-1" />
																		</div>
																		<h5>
																			Brandon Kelley <span>27 Aug 2019</span>
																		</h5>
																		<div className="at-reply">Nice !</div>
																	</div>
																</div>
																<div className="co-item">
																	<div className="avatar-pic">
																		<img src="/img/product-single/avatar-2.png" alt="img" />
																	</div>
																	<div className="avatar-text">
																		<div className="at-rating">
																			<i className="fa fa-star mr-1" />
																			<i className="fa fa-star mr-1" />
																			<i className="fa fa-star mr-1" />
																			<i className="fa fa-star mr-1" />
																			<i className="fa fa-star-o mr-1" />
																		</div>
																		<h5>
																			Roy Banks <span>27 Aug 2019</span>
																		</h5>
																		<div className="at-reply">Nice !</div>
																	</div>
																</div>
															</div>
															<div className="personal-rating">
																<h6>Your Ratind</h6>
																<div className="rating">
																	<i className="fa fa-star mr-1" />
																	<i className="fa fa-star mr-1" />
																	<i className="fa fa-star mr-1" />
																	<i className="fa fa-star mr-1" />
																	<i className="fa fa-star-o mr-1" />
																</div>
															</div>
														</div>
														<div className="col-12 col-md-6">
															<div className="leave-comment">
																<h4>Leave A Comment</h4>
																<form action="#" className="comment-form">
																	<div className="row">
																		<div className="col-lg-6">
																			<input type="text" placeholder="Name" />
																		</div>
																		<div className="col-lg-6">
																			<input type="text" placeholder="Email" />
																		</div>
																		<div className="col-lg-12">
																			<textarea placeholder="Messages" defaultValue={''} />
																			<button type="submit" className="site-btn">
																				Send message
																			</button>
																		</div>
																	</div>
																</form>
															</div>
														</div>
													</div>
												</div>
											</Tab.Pane>
										</div>
									</Tab.Content>
								</Tab.Container>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="related-products spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title">
								<h2>Related Products</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-sm-6">
							<ProductCard
								title="Product 1565"
								price="1000000"
								image="http://placehold.it/666x666"
								slug="product"
								category_title="Trang điểm"
							/>
						</div>
						<div className="col-lg-3 col-sm-6">
							<ProductCard
								title="Product 1565"
								price="1000000"
								image="http://placehold.it/666x666"
								slug="product"
								category_title="Trang điểm"
							/>
						</div>
						<div className="col-lg-3 col-sm-6">
							<ProductCard
								title="Product 1565"
								price="1000000"
								image="http://placehold.it/666x666"
								slug="product"
								category_title="Trang điểm"
							/>
						</div>
						<div className="col-lg-3 col-sm-6">
							<ProductCard
								title="Product 1565"
								price="1000000"
								image="http://placehold.it/666x666"
								slug="product"
								category_title="Trang điểm"
							/>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ProductPage;

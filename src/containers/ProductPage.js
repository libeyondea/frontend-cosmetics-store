import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import {
	listProductRequestedAction,
	singleProductRequestedAction
} from '../redux/actions/productAction';
import useRouter from 'lib/hooks/useRouter';
import MayBeSpinner from 'components/MayBeSpinner';
import Carousel from 'react-multi-carousel';
import { addToCartRequestedAction, listCartRequestedAction } from 'redux/actions/cartAction';

const ProductPage = ({ props }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5,
			slidesToSlide: 5
		},
		minDestop: {
			breakpoint: { max: 1024, min: 720 },
			items: 3,
			slidesToSlide: 3
		},
		tablet: {
			breakpoint: { max: 720, min: 464 },
			items: 2,
			slidesToSlide: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1
		}
	};
	const dispatch = useDispatch();
	const router = useRouter();
	const login = useSelector((state) => state.users.login);
	const listProduct = useSelector((state) => state.products.list_product);
	const singleProduct = useSelector((state) => state.products.single_product);
	const {
		query: { slug }
	} = router;

	useEffect(() => {
		dispatch(singleProductRequestedAction(slug));
		dispatch(listProductRequestedAction());
	}, [dispatch, slug]);

	const handleAddToCart = (product_id, quantity) => {
		if (login.is_authenticated) {
			const product = {
				product_id: product_id,
				quantity: quantity
			};
			console.log(product);
			dispatch(addToCartRequestedAction(product));
			dispatch(listCartRequestedAction());
		} else {
			router.push('/login');
		}
	};
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
			<section className="product-shop spad page-details pt-5">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<MayBeSpinner test={singleProduct.is_loading} spinner={<>Loading...</>}>
								<div className="row">
									<div className="col-lg-5">
										<Tab.Container id="image-tab" defaultActiveKey="first">
											<Tab.Content className="product-pic-zoom">
												{singleProduct.product.images?.map((item) => (
													<Tab.Pane eventKey="first" key={item.id}>
														<img
															className="product-big-img"
															src={`${process.env.REACT_APP_IMAGE_URL}/${item.image_url}`}
															alt="img"
														/>
														<div className="zoom-icon">
															<i className="fa fa-search-plus" />
														</div>
													</Tab.Pane>
												))}
											</Tab.Content>
											<div className="product-thumbs">
												<Nav className="product-thumbs-track ps-slider owl-carousel">
													{singleProduct.product.images?.map((item) => (
														<Nav.Item key={item.id}>
															<Nav.Link className="pt mr-3 mb-3" eventKey="first">
																<img
																	src={`${process.env.REACT_APP_IMAGE_URL}/${item.image_url}`}
																	width="100"
																	alt="img"
																/>
															</Nav.Link>
														</Nav.Item>
													))}
												</Nav>
											</div>
										</Tab.Container>
									</div>
									<div className="col-lg-7">
										<div className="product-details">
											<div className="pd-title">
												<h3>{singleProduct.product.title}</h3>
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
												<p>{singleProduct.product.excerpt}</p>
												<h4>
													{parseFloat(singleProduct.product.discount) === 0 ||
													!singleProduct.product.discount ? (
														<>{singleProduct.product.price}₫</>
													) : (
														<>
															{singleProduct.product.price -
																parseFloat(singleProduct.product.discount)}
															₫ <span>{singleProduct.product.price}₫</span>
														</>
													)}
												</h4>
											</div>
											<div className="quantity">
												{/* <div className="pro-qty">
													<span className="dec qtybtn">-</span>
													<input type="text" defaultValue={1} />
													<span className="inc qtybtn">+</span>
												</div> */}
												<a
													href="#!"
													className="primary-btn pd-cart"
													onClick={handleAddToCart.bind(this, singleProduct.product.id, 1)}
												>
													Add To Cart
												</a>
											</div>
											<ul className="pd-tags">
												<li>
													<span>CATEGORIES</span>: {singleProduct.product.category?.title}
												</li>
												<li>
													<span>TAGS</span>:{' '}
													{singleProduct.product.tags?.map((item) => (
														<span key={item.id}>{item.title}</span>
													))}
												</li>
											</ul>
											<div className="pd-share">
												<div className="p-code"></div>
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
																<p>{singleProduct.product.content}</p>
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
																		<div className="p-price">
																			{parseFloat(singleProduct.product.discount) === 0 ||
																			!singleProduct.product.discount ? (
																				<>{singleProduct.product.price}₫</>
																			) : (
																				<>
																					{singleProduct.product.price -
																						parseFloat(singleProduct.product.discount)}
																					₫
																				</>
																			)}
																		</div>
																	</td>
																</tr>
																<tr>
																	<td className="p-catagory">Availability</td>
																	<td>
																		<div className="p-stock">
																			{singleProduct.product.quantity} in stock
																		</div>
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
																			<img src="/img/d4z.jpg" alt="img" />
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
																				Tester <span>27 Aug 2019</span>
																			</h5>
																			<div className="at-reply">Nice !</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className="col-12 col-md-6">
																<div className="leave-comment">
																	<h4>Leave A Comment</h4>
																	<form action="#" className="comment-form">
																		<div className="row">
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
							</MayBeSpinner>
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
						<div className="col-12">
							<MayBeSpinner test={listProduct.is_loading} spinner={<>Loading...</>}>
								<Carousel
									swipeable={true}
									draggable={true}
									showDots={true}
									responsive={responsive}
									ssr={true}
									infinite={true}
									minimumTouchDrag={80}
									autoPlay={true}
									autoPlaySpeed={1000}
									keyBoardControl={true}
									transitionDuration={1000}
									containerClass="carousel-container"
									removeArrowOnDeviceType={['tablet', 'mobile']}
									dotListClass="custom-dot-list-style"
									itemClass="px-3"
								>
									{listProduct.products?.map((product) => (
										<ProductCard
											id={product.id}
											title={product.title}
											price={product.price}
											discount={product.discount}
											image={product.images[0]?.image_url}
											slug={product.slug}
											category_title={product.category?.title}
											key={product.id}
										/>
									))}
								</Carousel>
							</MayBeSpinner>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ProductPage;

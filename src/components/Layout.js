import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Carousell from 'react-multi-carousel';
import { useDispatch, useSelector } from 'react-redux';
import useRouter from 'lib/hooks/useRouter';
import { logoutUserRequestedAction } from 'redux/actions/userAction';
import Maybe from './Maybe';
import { listCategoryRequestedAction } from 'redux/actions/categoryAction';
import MayBeSpinner from './MayBeSpinner';
import { listCartRequestedAction } from 'redux/actions/cartAction';

const totalObj = function (arr, prop) {
	return arr.reduce(function (a, b) {
		return a + b[prop];
	}, 0);
};

const totalPrice = function (arr, qty, price, discount) {
	return arr.reduce(function (a, b) {
		return a + b[qty] * (b[price] - b[discount]);
	}, 0);
};

const Layout = ({ children }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
			slidesToSlide: 4
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
	const listCategory = useSelector((state) => state.categories.list_category);
	const login = useSelector((state) => state.users.login);
	const listCart = useSelector((state) => state.carts.list_cart);

	const handleLogoutUser = (e) => {
		e.preventDefault();
		dispatch(logoutUserRequestedAction(router));
	};

	useEffect(() => {
		dispatch(listCategoryRequestedAction(1));
		if (login.is_authenticated) {
			dispatch(listCartRequestedAction(1));
		}
	}, [dispatch, login.is_authenticated]);

	return (
		<>
			<header className="header-section">
				<div className="header-top">
					<div className="container">
						<div className="ht-left">
							<div className="mail-service">
								<i className=" fa fa-envelope" />
								nguyenhienthuc666@gmail.com
							</div>
							<div className="phone-service">
								<i className=" fa fa-phone" />
								+84 33.6077.131
							</div>
						</div>
						<div className="ht-right">
							<Maybe test={login.is_authenticated}>
								<Dropdown as={NavItem} className="top-panel-user bg-white">
									<Dropdown.Toggle
										as={NavLink}
										id="dropdown-custom-1"
										className="pt-0 pb-0 dropdown-toggle-custom"
									>
										<i className="fa fa-user" />
										{login.user?.user_name}
									</Dropdown.Toggle>
									<Dropdown.Menu align="right">
										<Dropdown.Item as={Link} to="/">
											Profile
										</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Item onClick={handleLogoutUser}>Logout</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Maybe>
							<Maybe test={!login.is_authenticated}>
								<Link to="/register" className="login-panel">
									<i className="fa fa-user" />
									Register
								</Link>
								<Link to="/login" className="login-panel">
									<i className="fa fa-user" />
									Login
								</Link>
							</Maybe>

							<div className="top-social">
								<a href="#!">
									<i className="ti-facebook" />
								</a>
								<a href="#!">
									<i className="ti-twitter-alt" />
								</a>
								<a href="#!">
									<i className="ti-linkedin" />
								</a>
								<a href="#!">
									<i className="ti-pinterest" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="inner-header">
						<div className="row">
							<div className="col-lg-2 col-md-2">
								<div className="">
									<a href="/">
										<img className="rounded-circle" width="66" src="/img/d4z.jpg" alt="Logo" />
									</a>
								</div>
							</div>
							<div className="col-lg-7 col-md-7">
								<div className="advanced-search mb-2">
									<button type="button" className="category-btn">
										All Categories
									</button>
									<div className="input-group">
										<input type="text" placeholder="What do you need?" />
										<button type="button">
											<i className="ti-search" />
										</button>
									</div>
								</div>
							</div>
							<div className="col-lg-3 text-right col-md-3">
								<ul className="nav-right">
									<li className="heart-icon">
										<a href="#!">
											<i className="icon_heart_alt" />
											<span>1</span>
										</a>
									</li>
									<li className="cart-icon">
										<a href="#!">
											<i className="icon_bag_alt" />
											<span>{totalObj(listCart.carts, 'quantity_in_carts')}</span>
										</a>
										<div className="cart-hover">
											<div className="select-items" style={{ height: '400px', overflow: 'auto' }}>
												<table>
													<tbody>
														{listCart.carts.map((item) => (
															<tr key={item.id}>
																<td className="si-pic">
																	<img
																		src={`${process.env.REACT_APP_IMAGE_URL}/${item.images[0]?.image_url}`}
																		alt={item.images[0]?.title}
																	/>
																</td>
																<td className="si-text">
																	<div className="product-selected">
																		<p>
																			{parseFloat(item.discount) === 0 || !item.discount ? (
																				<>{item.price}₫</>
																			) : (
																				<>{item.price - parseFloat(item.discount)}₫</>
																			)}{' '}
																			x {item.quantity_in_carts}
																		</p>
																		<h6>{item.title}</h6>
																	</div>
																</td>
																<td className="si-close">
																	<i className="ti-close" />
																</td>
															</tr>
														))}
													</tbody>
												</table>
											</div>
											<div className="select-total">
												<span>total:</span>
												<h5>
													{totalPrice(listCart.carts, 'quantity_in_carts', 'price', 'discount')}₫
												</h5>
											</div>
											<div className="select-button">
												<Link to="/cart" className="primary-btn view-card">
													VIEW CARD
												</Link>
												<a href="#!" className="primary-btn checkout-btn">
													CHECK OUT
												</a>
											</div>
										</div>
									</li>
									<li className="cart-price">
										{totalPrice(listCart.carts, 'quantity_in_carts', 'price', 'discount')}₫
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<Navbar collapseOnSelect expand="md" variant="light" className="nav-item">
					<Container>
						<div className="nav-depart">
							<div className="depart-btn">
								<i className="ti-menu" />
								<span>All departments</span>
								<ul className="depart-hover">
									<li className="active">
										<a href="#!">Woman</a>
									</li>
									<li>
										<a href="#!">Man</a>
									</li>
								</ul>
							</div>
						</div>
						<Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto align-items-lg-center">
								<Nav.Item>
									<Nav.Link to="/" as={Link}>
										Home
									</Nav.Link>
								</Nav.Item>
								<Dropdown as={NavItem}>
									<Dropdown.Toggle as={NavLink} id="dropdown-custom-1">
										Categories
									</Dropdown.Toggle>
									<Dropdown.Menu align="right">
										<MayBeSpinner test={listCategory.is_loading} spinner={<>Loading...</>}>
											{listCategory.categories.map((item) => (
												<Dropdown.Item as={Link} to={`/category/${item.slug}`} key={item.id}>
													{item.title}
												</Dropdown.Item>
											))}
										</MayBeSpinner>
									</Dropdown.Menu>
								</Dropdown>
								<Nav.Item>
									<Nav.Link>Blog</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link to="/contact" as={Link}>
										Contact
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link to="/faq" as={Link}>
										FAQ
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>
			{children}
			<div className="partner-logo">
				<div className="container">
					<Carousell
						responsive={responsive}
						additionalTransfrom={0}
						arrows
						autoPlaySpeed={3000}
						centerMode={false}
						className=""
						containerClass="container-with-dots"
						dotListClass=""
						draggable
						focusOnSelect={false}
						infinite
						itemClass=""
						keyBoardControl
						renderButtonGroupOutside={false}
						renderDotsOutside={false}
						showDots={false}
						sliderClass=""
						slidesToSlide={1}
						swipeable
					>
						<div className="logo-item">
							<div className="tablecell-inner">
								<img src="/img/logo-carousel/logo-1.png" alt="img" />
							</div>
						</div>
						<div className="logo-item">
							<div className="tablecell-inner">
								<img src="/img/logo-carousel/logo-2.png" alt="img" />
							</div>
						</div>
						<div className="logo-item">
							<div className="tablecell-inner">
								<img src="/img/logo-carousel/logo-3.png" alt="img" />
							</div>
						</div>
						<div className="logo-item">
							<div className="tablecell-inner">
								<img src="/img/logo-carousel/logo-4.png" alt="img" />
							</div>
						</div>
						<div className="logo-item">
							<div className="tablecell-inner">
								<img src="/img/logo-carousel/logo-5.png" alt="img" />
							</div>
						</div>
					</Carousell>
				</div>
			</div>
			<footer className="footer-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<div className="footer-left">
								<div className="footer-logo">
									<a href="#!">
										<img className="rounded-circle" width="66" src="/img/d4z.jpg" alt="Logo" />
									</a>
								</div>
								<ul>
									<li>
										Address: Trường Chinh, Phường 15, Tân Bình, Thành phố Hồ Chí Minh, Việt Nam
									</li>
									<li>Phone: +84 33.6077.131</li>
									<li>Email: nguyenhienthuc666@gmail.com</li>
								</ul>
								<div className="footer-social">
									<a href="#!">
										<i className="fa fa-facebook" />
									</a>
									<a href="#!">
										<i className="fa fa-instagram" />
									</a>
									<a href="#!">
										<i className="fa fa-twitter" />
									</a>
									<a href="#!">
										<i className="fa fa-pinterest" />
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-2 offset-lg-1">
							<div className="footer-widget">
								<h5>Information</h5>
								<ul>
									<li>
										<a href="#!">About Us</a>
									</li>
									<li>
										<a href="#!">Checkout</a>
									</li>
									<li>
										<a href="#!">Contact</a>
									</li>
									<li>
										<a href="#!">Serivius</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2">
							<div className="footer-widget">
								<h5>My Account</h5>
								<ul>
									<li>
										<a href="#!">My Account</a>
									</li>
									<li>
										<a href="#!">Contact</a>
									</li>
									<li>
										<a href="#!">Shopping Cart</a>
									</li>
									<li>
										<a href="#!">Shop</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="newslatter-item">
								<h5>Join Our Newsletter Now</h5>
								<p>Get E-mail updates about our latest shop and special offers.</p>
								<form action="#!" className="subscribe-form">
									<input type="text" placeholder="Enter Your Mail" />
									<button type="button">Subscribe</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright-reserved">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="copyright-text">
									Copyright © All rights reserved | This template is made with{' '}
									<i className="fa fa-heart-o" aria-hidden="true" /> by{' '}
									<a href="https://de4thzone.com">De4thZone.Com</a>
								</div>
								<div className="payment-pic">
									<img src="/img/payment-method.png" alt="images" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Layout;

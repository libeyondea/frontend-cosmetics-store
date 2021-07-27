import withAuth from 'lib/hoc/withAuth';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const totalPrice = function (arr, qty, price, discount) {
	return arr.reduce(function (a, b) {
		return a + b[qty] * (b[price] - b[discount]);
	}, 0);
};

const totalObj = function (arr, prop) {
	return arr.reduce(function (a, b) {
		return a + b[prop];
	}, 0);
};
const CartPage = ({ props }) => {
	const listCart = useSelector((state) => state.carts.list_cart);

	return (
		<Layout>
			<div className="breacrumb-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="breadcrumb-text product-more">
								<a href="./home.html">
									<i className="fa fa-home" /> Home
								</a>
								<a href="./shop.html">Shop</a>
								<span>Shopping Cart</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="shopping-cart spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="cart-table">
								<table>
									<thead>
										<tr>
											<th>Image</th>
											<th className="p-name">Product Name</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Total</th>
											<th>
												<i className="ti-close" />
											</th>
										</tr>
									</thead>
									<tbody>
										{listCart.carts.map((item) => (
											<tr key={item.id}>
												<td className="cart-pic first-row">
													<img
														src={`${process.env.REACT_APP_IMAGE_URL}/${item.images[0]?.image_url}`}
														alt={item.images[0]?.title}
													/>
												</td>
												<td className="cart-title first-row">
													<h5>{item.title}</h5>
												</td>
												<td className="p-price first-row">
													{parseFloat(item.discount) === 0 || !item.discount ? (
														<>{item.price}₫</>
													) : (
														<>{item.price - parseFloat(item.discount)}₫</>
													)}
												</td>
												<td className="qua-col first-row">
													<div className="quantity">
														<div className="pro-qty">
															<span className="dec qtybtn">-</span>
															<input type="text" defaultValue={item.quantity_in_carts} />
															<span className="inc qtybtn">+</span>
														</div>
													</div>
												</td>
												<td className="total-price first-row">
													{parseFloat(item.discount) === 0 || !item.discount ? (
														<>{item.price * item.quantity_in_carts}₫</>
													) : (
														<>
															{(item.price - parseFloat(item.discount)) * item.quantity_in_carts}₫
														</>
													)}
												</td>
												<td className="close-td first-row">
													<i className="ti-close" />
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							<div className="row">
								<div className="col-lg-4">
									<div className="cart-buttons">
										<Link to="/" className="primary-btn continue-shop">
											Continue shopping
										</Link>
										<a href="#!" className="primary-btn up-cart">
											Update cart
										</a>
									</div>
									<div className="discount-coupon">
										<h6>Discount Codes</h6>
										<form action="#" className="coupon-form">
											<input type="text" placeholder="Enter your codes" />
											<button type="submit" className="site-btn coupon-btn">
												Apply
											</button>
										</form>
									</div>
								</div>
								<div className="col-lg-4 offset-lg-4">
									<div className="proceed-checkout">
										<ul>
											<li className="subtotal">
												Toatal quantity <span>{totalObj(listCart.carts, 'quantity_in_carts')}</span>
											</li>
											<li className="subtotal">
												Subtotal{' '}
												<span>
													{totalPrice(listCart.carts, 'quantity_in_carts', 'price', 'discount')}₫
												</span>
											</li>
											<li className="cart-total">
												Total{' '}
												<span>
													{totalPrice(listCart.carts, 'quantity_in_carts', 'price', 'discount')}₫
												</span>
											</li>
										</ul>
										<Link to="/checkout" className="proceed-btn">
											PROCEED TO CHECK OUT
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default withAuth(CartPage);

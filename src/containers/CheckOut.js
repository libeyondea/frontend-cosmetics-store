import withAuth from 'lib/hoc/withAuth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import InputForm from '../components/InputForm';
import SelectForm from '../components/SelectForm';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import useRouter from 'lib/hooks/useRouter';
import { orderRequestedAction } from 'redux/actions/cartAction';

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
	const dispatch = useDispatch();
	const router = useRouter();
	const listCart = useSelector((state) => state.carts.list_cart);
	const initialValues = {
		first_name: '',
		last_name: '',
		email: '',
		phone_number: '',
		address: '',
		district: '',
		ward: '',
		city: '',
		shipping: 60000
	};
	const validationSchema = Yup.object({
		first_name: Yup.string()
			.min(1, 'Fisrt name must be at least 1 characters')
			.max(16, 'Fisrt name must be at most 16 characters')
			.required('First name is required'),
		last_name: Yup.string()
			.min(1, 'Last name must be at least 1 characters')
			.max(16, 'Last name must be at most 16 characters')
			.required('Last name is required'),
		email: Yup.string()
			.matches(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				'Email invalid'
			)
			.required('Email is required'),
		phone_number: Yup.string()
			.min(10, 'Phone number must be at least 10 characters')
			.matches(/^[0-9]+$/, 'Phone number invalid')
			.required('Phone number is required'),
		address: Yup.string()
			.min(6, 'Address must be at least 6 characters')
			.max(66, 'Address must be at most 66 characters')
			.required('Address is required'),
		district: Yup.string()
			.min(6, 'District must be at least 6 characters')
			.max(66, 'District must be at most 66 characters')
			.required('District is required'),
		ward: Yup.string()
			.min(6, 'Ward must be at least 6 characters')
			.max(66, 'Ward must be at most 66 characters')
			.required('Ward is required'),
		city: Yup.string()
			.min(6, 'City must be at least 6 characters')
			.max(66, 'City must be at most 66 characters')
			.required('City is required'),
		shipping: Yup.string()
			.oneOf(['60000', '100000'], 'Invalid shipping')
			.required('Select shipping')
	});
	const onSubmit = (values) => {
		const order = {
			shipping: parseInt(values.shipping),
			first_name: values.first_name,
			last_name: values.last_name,
			email: values.email,
			phone_number: values.phone_number,
			address: values.address,
			district: values.district,
			ward: values.ward,
			city: values.city,
			order_product: listCart.carts.map((node) => {
				return {
					product_id: node.id,
					price: (node.price - node.discount) * node.quantity_in_carts,
					quantity: node.quantity_in_carts
				};
			})
		};
		console.log(order);
		dispatch(orderRequestedAction(order, router));
	};
	return (
		<Layout>
			<div className="breacrumb-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="breadcrumb-text product-more">
								<a href="./index.html">
									<i className="fa fa-home" /> Home
								</a>
								<a href="./shop.html">Shop</a>
								<span>Check Out</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="checkout-section spad">
				<div className="container">
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={onSubmit}
					>
						{({ values }) => (
							<Form className="checkout-form">
								<div className="row">
									<div className="col-lg-6">
										<h4>Biiling Details</h4>
										<div className="row">
											<div className="col-lg-6">
												<InputForm
													label="First name"
													placeholder="First name"
													id="first_name"
													name="first_name"
													type="text"
												/>
											</div>
											<div className="col-lg-6">
												<InputForm
													label="Last name"
													placeholder="Last name"
													id="last_name"
													name="last_name"
													type="text"
												/>
											</div>
											<div className="col-lg-12">
												<InputForm
													label="Email"
													placeholder="Email"
													id="email"
													name="email"
													type="text"
												/>
											</div>
											<div className="col-lg-12">
												<InputForm
													label="Phone number"
													placeholder="84 336 077 131"
													id="phone_number"
													name="phone_number"
													type="text"
												/>
											</div>
											<div className="col-lg-12">
												<InputForm
													label="Address"
													placeholder="Address"
													id="address"
													name="address"
													type="text"
												/>
											</div>
											<div className="col-lg-12">
												<InputForm
													label="District"
													placeholder="District"
													id="district"
													name="district"
													type="text"
												/>
											</div>
											<div className="col-lg-12">
												<InputForm
													label="Ward"
													placeholder="Ward"
													id="ward"
													name="ward"
													type="text"
												/>
											</div>
											<div className="col-lg-12">
												<InputForm
													label="City"
													placeholder="City"
													id="city"
													name="city"
													type="text"
												/>
											</div>
											<div className="col-lg-12">
												<SelectForm label="Shipping" name="shipping">
													<option value="60000">Delivery of the week</option>
													<option value="100000">Delivery in 24h</option>
												</SelectForm>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="place-order">
											<h4>Your Order</h4>
											<div className="order-total">
												<ul className="order-table">
													<li>
														Product <span>Total</span>
													</li>
													{listCart.carts.map((item) => (
														<li className="fw-normal" key={item.id}>
															{item.title} x {item.quantity_in_carts}{' '}
															<span>
																{parseFloat(item.discount) === 0 || !item.discount ? (
																	<>{item.price * item.quantity_in_carts}₫</>
																) : (
																	<>
																		{(item.price - parseFloat(item.discount)) *
																			item.quantity_in_carts}
																		₫
																	</>
																)}
															</span>
														</li>
													))}
													<li className="fw-normal">
														Total quantity{' '}
														<span>{totalObj(listCart.carts, 'quantity_in_carts')}</span>
													</li>
													<li className="fw-normal">
														Shipping and handling <span>{values.shipping}₫</span>
													</li>
													<li className="fw-normal">
														Subtotal{' '}
														<span>
															{totalPrice(listCart.carts, 'quantity_in_carts', 'price', 'discount')}
															₫
														</span>
													</li>
													<li className="total-price">
														Total{' '}
														<span>
															{totalPrice(listCart.carts, 'quantity_in_carts', 'price', 'discount')}
															₫
														</span>
													</li>
												</ul>
												<div className="payment-check">
													<div className="pc-item">
														<label htmlFor="pc-check">
															Cheque Payment
															<input type="checkbox" id="pc-check" />
															<span className="checkmark" />
														</label>
													</div>
													<div className="pc-item">
														<label htmlFor="pc-paypal">
															Paypal
															<input type="checkbox" id="pc-paypal" />
															<span className="checkmark" />
														</label>
													</div>
												</div>
												<div className="order-btn">
													<button type="submit" className="site-btn place-btn">
														Place Order
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</section>
		</Layout>
	);
};

export default withAuth(CartPage);

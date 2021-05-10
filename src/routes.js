import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./containers/HomePage'));
const RegisterPage = lazy(() => import('./containers/RegisterPage'));
const LoginPage = lazy(() => import('./containers/LoginPage'));
const CartPage = lazy(() => import('./containers/CartPage'));
const ProductPage = lazy(() => import('./containers/ProductPage'));
const CategoryProductPage = lazy(() => import('./containers/CategoryProductPage'));
const ContactPage = lazy(() => import('./containers/ContactPage'));
const FaqPage = lazy(() => import('./containers/FaqPage'));
const CheckOut = lazy(() => import('./containers/CheckOut'));

const Routes = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/register" component={RegisterPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/cart" component={CartPage} />
					<Route exact path="/checkout" component={CheckOut} />
					<Route exact path="/p/:slug" component={ProductPage} />
					<Route exact path="/category/:slug" component={CategoryProductPage} />
					<Route exact path="/contact" component={ContactPage} />
					<Route exact path="/faq" component={FaqPage} />
				</Switch>
			</Router>
		</Suspense>
	);
};

export default Routes;

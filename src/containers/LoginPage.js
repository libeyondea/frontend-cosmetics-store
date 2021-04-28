import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Layout from '../components/Layout';
import InputForm from '../components/InputForm';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUserRequestedAction } from 'redux/actions/userAction';
import useRouter from 'lib/hooks/useRouter';
import FacebookLoginButton from 'components/FacebookLoginButton';
import GoogleLoginButton from 'components/GoogleLoginButton';
import withAuth from 'lib/hoc/withAuth';

const LoginPage = ({ props }) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const login = useSelector((state) => state.users.login);
	const initialValues = {
		user_name: '',
		password: ''
	};
	const validationSchema = Yup.object({
		user_name: Yup.string().required('User name is required'),
		password: Yup.string().required('Password is required')
	});

	const onSubmit = (values) => {
		const user = {
			user_name: values.user_name,
			password: values.password
		};
		dispatch(loginUserRequestedAction(user, router));
	};

	const handleSocialLogin = (res) => {
		const user = {
			access_token: res._token.accessToken,
			provider: res._provider
		};
		dispatch(loginUserRequestedAction(user, router));
	};

	const handleSocialLoginFailure = (err) => {
		console.error(err);
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
								<span>Login</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="register-login-section spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<div className="login-form">
								<h2>Login</h2>
								<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
									<Form>
										<div className="group-input">
											<InputForm
												label="User name"
												placeholder="Enter user name"
												id="user_name"
												name="user_name"
												type="text"
												errors={login.errors?.user}
											/>
										</div>
										<div className="group-input">
											<InputForm
												label="Password"
												placeholder="Password"
												id="password"
												name="password"
												type="password"
												errors={login.errors?.user}
											/>
										</div>
										<div className="group-input gi-check">
											<div className="gi-more">
												<label htmlFor="save-pass">
													Save Password
													<input type="checkbox" id="save-pass" />
													<span className="checkmark" />
												</label>
												<a href="#!" className="forget-pass">
													Forget your Password
												</a>
											</div>
										</div>
										{login.is_loading ? (
											<button type="submit" className="site-btn login-btn mb-4" disabled>
												<span className="spinner-grow spinner-grow-sm mr-1" role="status" aria-hidden="true" />
												Login
											</button>
										) : (
											<button type="submit" className="site-btn login-btn mb-4">
												Login
											</button>
										)}
										<FacebookLoginButton
											handleSocialLogin={handleSocialLogin}
											handleSocialLoginFailure={handleSocialLoginFailure}
										/>
										<GoogleLoginButton
											handleSocialLogin={handleSocialLogin}
											handleSocialLoginFailure={handleSocialLoginFailure}
										/>
									</Form>
								</Formik>
								<div className="switch-login">
									<Link to="/register" className="or-login">
										Or Create An Account
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default withAuth(LoginPage, { type: 'auth' });

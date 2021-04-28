import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Layout from '../components/Layout';
import InputForm from '../components/InputForm';
import SelectForm from '../components/SelectForm';
import CheckBoxForm from '../components/CheckBoxForm';
import TextForm from '../components/TextForm';
import { useSelector, useDispatch } from 'react-redux';
import { registerUserRequestedAction } from 'redux/actions/userAction';
import useRouter from 'lib/hooks/useRouter';
import { Link } from 'react-router-dom';
import withAuth from 'lib/hoc/withAuth';

const RegisterPage = ({ props }) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const register = useSelector((state) => state.users.register);

	const initialValues = {
		first_name: '',
		last_name: '',
		user_name: '',
		email: '',
		password: '',
		password_confirm: '',
		phone_number: '',
		address: '',
		district: '',
		ward: '',
		city: '',
		intro: '',
		profile: '',
		gender: '',
		avatar: '',
		agreeterms: false
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
		user_name: Yup.string()
			.min(6, 'User name must be at least 6 characters')
			.max(16, 'User name must be at most 16 characters')
			.matches(/^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 'User name invalid')
			.required('User name is required'),
		email: Yup.string()
			.matches(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				'Email invalid'
			)
			.required('Email is required'),
		password: Yup.string().required('Password is required'),
		password_confirm: Yup.string()
			.required('Comfirm password is required')
			.oneOf([Yup.ref('password')], 'Password is not match'),
		phone_number: Yup.string()
			.min(10, 'Phone number must be at least 10 characters')
			.matches(/^[0-9]+$/, 'Phone number invalid')
			.nullable(),
		address: Yup.string()
			.min(6, 'Address must be at least 6 characters')
			.max(66, 'Address must be at most 66 characters')
			.nullable(),
		district: Yup.string()
			.min(6, 'District must be at least 6 characters')
			.max(66, 'District must be at most 66 characters')
			.nullable(),
		ward: Yup.string()
			.min(6, 'Ward must be at least 6 characters')
			.max(66, 'Ward must be at most 66 characters')
			.nullable(),
		city: Yup.string()
			.min(6, 'City must be at least 6 characters')
			.max(66, 'City must be at most 66 characters')
			.nullable(),
		intro: Yup.string()
			.min(6, 'Intro must be at least 6 characters')
			.max(66, 'Intro must be at most 66 characters')
			.nullable(),
		profile: Yup.string()
			.min(6, 'Profile must be at least 6 characters')
			.max(666, 'Profile must be at most 666 characters')
			.nullable(),
		avatar: Yup.string().max(666, 'Image must be at most 666 characters'),
		gender: Yup.string().oneOf(['male', 'female', 'orther', null], 'Gender invalid').nullable(),
		agreeterms: Yup.boolean().oneOf([true], 'You must agree to terms of service').required('Required')
	});
	const onSubmit = (values) => {
		const user = {
			first_name: values.first_name,
			last_name: values.last_name,
			user_name: values.user_name,
			email: values.email,
			password: values.password,
			phone_number: values.phone_number,
			address: values.address,
			district: values.district,
			ward: values.ward,
			city: values.city,
			intro: values.intro,
			profile: values.profile,
			gender: values.gender,
			avatar: values.avatar
		};
		dispatch(registerUserRequestedAction(user, router));
	};
	const gender = ['', 'male', 'female', 'orther'];
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
								<span>Register</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="register-login-section spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 offset-lg-3">
							<div className="register-form">
								<h2>Register</h2>
								<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
									<Form>
										<div className="group-input">
											<InputForm
												label="First name"
												placeholder="First name"
												id="first_name"
												name="first_name"
												type="text"
											/>
										</div>
										<div className="group-input">
											<InputForm
												label="Last name"
												placeholder="Last name"
												id="last_name"
												name="last_name"
												type="text"
											/>
										</div>
										<div className="group-input">
											<InputForm
												label="User name"
												placeholder="User name"
												id="user_name"
												name="user_name"
												type="text"
												errors={register.errors?.user_name}
											/>
										</div>
										<div className="group-input">
											<InputForm
												label="Email"
												placeholder="Email"
												id="email"
												name="email"
												type="text"
												errors={register.errors?.email}
											/>
										</div>
										<div className="group-input">
											<InputForm
												label="Password"
												placeholder="Password"
												id="password"
												name="password"
												type="password"
											/>
										</div>
										<div className="group-input">
											<InputForm
												label="Confirm password"
												placeholder="Confirm password"
												id="password_confirm"
												name="password_confirm"
												type="password"
											/>
										</div>
										<div className="group-input">
											<InputForm
												label="Phone number"
												placeholder="84 336 077 131"
												id="phone_number"
												name="phone_number"
												type="text"
											/>
										</div>
										<div className="group-input">
											<InputForm label="Address" placeholder="Address" id="address" name="address" type="text" />
										</div>
										<div className="group-input">
											<InputForm label="District" placeholder="District" id="district" name="district" type="text" />
										</div>
										<div className="group-input">
											<InputForm label="Ward" placeholder="Ward" id="ward" name="ward" type="text" />
										</div>
										<div className="group-input">
											<InputForm label="City" placeholder="City" id="city" name="city" type="text" />
										</div>
										<div className="group-input">
											<TextForm label="Intro" placeholder="Intro" id="intro" name="intro" type="text" rows="4" />
										</div>
										<div className="group-input">
											<TextForm
												label="Profile"
												placeholder="Profile"
												id="profile"
												name="profile"
												type="text"
												rows="4"
											/>
										</div>
										<div className="group-input">
											<SelectForm label="Gender" name="gender">
												<option value={gender[0]}>Select gender</option>
												<option value={gender[1]}>Male</option>
												<option value={gender[2]}>Female</option>
												<option value={gender[3]}>Other</option>
											</SelectForm>
										</div>
										<div className="group-input">
											<TextForm label="Avatar" placeholder="Avatar" id="avatar" name="avatar" type="text" rows="3" />
										</div>
										<div className="form-group form-check">
											<CheckBoxForm label="Agree to terms of service" id="agreeterms" name="agreeterms" />
										</div>
										{register.is_loading ? (
											<button type="submit" className="site-btn register-btn" disabled>
												<span className="spinner-grow spinner-grow-sm mr-1" role="status" aria-hidden="true" />
												Register
											</button>
										) : (
											<button type="submit" className="site-btn register-btn">
												Register
											</button>
										)}
									</Form>
								</Formik>
								<div className="switch-login">
									<Link to="/login" className="or-login">
										Or Login
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

export default withAuth(RegisterPage, { type: 'auth' });

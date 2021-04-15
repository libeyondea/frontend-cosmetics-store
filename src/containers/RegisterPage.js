import React from 'react';
import Layout from '../components/Layout';

const RegisterPage = ({ props }) => {
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
								<form action="#">
									<div className="group-input">
										<label htmlFor="username">Username or email address *</label>
										<input type="text" id="username" />
									</div>
									<div className="group-input">
										<label htmlFor="pass">Password *</label>
										<input type="text" id="pass" />
									</div>
									<div className="group-input">
										<label htmlFor="con-pass">Confirm Password *</label>
										<input type="text" id="con-pass" />
									</div>
									<button type="submit" className="site-btn register-btn">
										REGISTER
									</button>
								</form>
								<div className="switch-login">
									<a href="/login.html" className="or-login">
										Or Login
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default RegisterPage;

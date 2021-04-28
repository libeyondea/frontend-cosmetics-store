import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRouteLogF = ({ component: Component, ...rest }) => {
	const login = useSelector((state) => state.users.login);
	return (
		<Route
			{...rest}
			render={(props) =>
				login.is_authenticated ? (
					<Redirect
						to={{
							pathname: '/',
							state: { from: props.location }
						}}
					/>
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export default AuthRouteLogF;

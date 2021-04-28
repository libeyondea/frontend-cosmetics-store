import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentUserRequestedAction } from 'redux/actions/userAction';
import useRouter from 'lib/hooks/useRouter';

const withAuth = (WrappedComponent, options = {}) => {
	const WithAuthComponent = ({ ...props }) => {
		const dispatch = useDispatch();
		const router = useRouter();
		const { pathname } = router;
		useEffect(() => {
			dispatch(currentUserRequestedAction(options, router));
		}, [dispatch, pathname, router]);
		return <WrappedComponent {...props} />;
	};
	return WithAuthComponent;
};

export default withAuth;

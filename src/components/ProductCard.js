import useRouter from 'lib/hooks/useRouter';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCartRequestedAction, listCartRequestedAction } from 'redux/actions/cartAction';

const ProductCard = ({ id, title, price, discount, image, slug, category_title }) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const login = useSelector((state) => state.users.login);

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
		<div className="product-item border rounded bg-light shadow">
			<div className="pi-pic">
				<Link to={`/p/${slug}`}>
					<img src={`${process.env.REACT_APP_IMAGE_URL}/${image}`} alt={title} />
				</Link>
				{(parseInt(discount) > 0 || discount) && <div className="sale">Sale</div>}
				<div className="icon">
					<i className="icon_heart_alt" />
				</div>
				<ul>
					<li className="w-icon active mr-1">
						<a href="#!" onClick={handleAddToCart.bind(this, id, 1)}>
							<i className="icon_bag_alt" />
						</a>
					</li>
					<li className="quick-view  mr-1">
						<Link to={`/p/${slug}`}>View</Link>
					</li>
				</ul>
			</div>
			<div className="pi-text">
				<div className="catagory-name">{category_title}</div>
				<Link to={`/p/${slug}`}>
					<h5>{title}</h5>
				</Link>
				<div className="product-price">
					{parseFloat(discount) === 0 || !discount ? (
						<>{price}₫</>
					) : (
						<>
							{price - parseFloat(discount)}₫ <span>{price}₫</span>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

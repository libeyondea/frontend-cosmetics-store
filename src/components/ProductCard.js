import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, price, discount, image, slug, category_title }) => {
	return (
		<div className="product-item border rounded bg-light shadow">
			<div className="pi-pic">
				<Link to={`/p/${slug}`}>
					<img src={`${process.env.REACT_APP_URL}/images/${image}`} alt={title} />
				</Link>
				{(parseInt(discount) > 0 || discount) && <div className="sale">Sale</div>}
				<div className="icon">
					<i className="icon_heart_alt" />
				</div>
				<ul>
					<li className="w-icon active mr-1">
						<a href="#!">
							<i className="icon_bag_alt" />
						</a>
					</li>
					<li className="quick-view  mr-1">
						<Link to={`/p/${slug}`}>View</Link>
					</li>
					<li className="w-icon">
						<a href="#!">
							<i className="fa fa-random" />
						</a>
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

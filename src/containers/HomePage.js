import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import CarouselHome from '../components/CarouselHome';
import BannerHome from '../components/BannerHome';
import CountDownSell from '../components/CountDownSell';
import Carousel from 'react-multi-carousel';
import { listProductRequestedAction } from '../redux/actions/productAction';
import MayBeSpinner from 'components/MayBeSpinner';
import withAuth from 'lib/hoc/withAuth';

const HomePage = ({ props }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5,
			slidesToSlide: 5
		},
		minDestop: {
			breakpoint: { max: 1024, min: 720 },
			items: 3,
			slidesToSlide: 3
		},
		tablet: {
			breakpoint: { max: 720, min: 464 },
			items: 2,
			slidesToSlide: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1
		}
	};
	const dispatch = useDispatch();
	const listProduct = useSelector((state) => state.products.list_product);

	useEffect(() => {
		dispatch(listProductRequestedAction());
	}, []);

	return (
		<Layout>
			<section className="hero-section">
				<header>
					<CarouselHome />
				</header>
			</section>
			<BannerHome />
			<section className="women-banner spad">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title">
								<h2>New Product</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<MayBeSpinner test={listProduct.is_loading} spinner={<>Loading...</>}>
								<Carousel
									swipeable={true}
									draggable={true}
									showDots={true}
									responsive={responsive}
									ssr={true}
									infinite={true}
									minimumTouchDrag={80}
									autoPlay={true}
									autoPlaySpeed={1000}
									keyBoardControl={true}
									transitionDuration={1000}
									containerClass="carousel-container"
									removeArrowOnDeviceType={['tablet', 'mobile']}
									dotListClass="custom-dot-list-style"
									itemClass="px-3"
								>
									{listProduct.products?.map((product) => (
										<ProductCard
											title={product.title}
											price={product.price}
											discount={product.discount}
											image={product.images[0]?.image_url}
											slug={product.slug}
											category_title={product.category?.title}
											key={product.id}
										/>
									))}
								</Carousel>
							</MayBeSpinner>
						</div>
					</div>
				</div>
			</section>
			<section className="man-banner spad pt-0">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title">
								<h2>Top Selling Product</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<Carousel
								swipeable={true}
								draggable={true}
								showDots={true}
								responsive={responsive}
								ssr={true}
								infinite={true}
								minimumTouchDrag={80}
								autoPlay={true}
								autoPlaySpeed={1000}
								keyBoardControl={true}
								transitionDuration={1000}
								containerClass="carousel-container"
								removeArrowOnDeviceType={['tablet', 'mobile']}
								dotListClass="custom-dot-list-style"
								itemClass="px-3"
							>
								{listProduct.products?.map((product) => (
									<ProductCard
										title={product.title}
										price={product.price}
										discount={product.discount}
										image={product.images[0]?.image_url}
										slug={product.slug}
										category_title={product.category?.title}
										key={product.id}
									/>
								))}
							</Carousel>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default withAuth(HomePage);

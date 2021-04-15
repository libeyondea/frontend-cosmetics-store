import React from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import CarouselHome from '../components/CarouselHome';
import BannerHome from '../components/BannerHome';
import CountDownSell from '../components/CountDownSell';
import Carousel from 'react-multi-carousel';

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
							<div className="filter-control">
								<ul>
									<li className="active">Clothings</li>
									<li>HandBag</li>
									<li>Shoes</li>
									<li>Accessories</li>
								</ul>
							</div>
							<Carousel
								swipeable={true}
								draggable={true}
								showDots={true}
								responsive={responsive}
								ssr={true}
								infinite={true}
								minimumTouchDrag={80}
								autoPlay={false}
								autoPlaySpeed={1000}
								keyBoardControl={true}
								transitionDuration={1000}
								containerClass="carousel-container"
								removeArrowOnDeviceType={['tablet', 'mobile']}
								dotListClass="custom-dot-list-style"
								itemClass="px-3"
							>
								<ProductCard
									title="Product 1"
									price="500000"
									discount="90000"
									image="http://placehold.it/666x666"
									slug="product"
									category_title="Trang điểm"
								/>
								<ProductCard
									title="Product 2"
									price="500000"
									image="http://placehold.it/666x666"
									slug="product"
									category_title="Trang điểm"
								/>
								<ProductCard
									title="Product 3"
									price="500000"
									image="http://placehold.it/666x666"
									slug="product"
									category_title="Trang điểm"
								/>
								<ProductCard
									title="Product 4"
									price="500000"
									image="http://placehold.it/666x666"
									slug="product"
									category_title="Trang điểm"
								/>
								<ProductCard
									title="Product 5"
									price="500000"
									image="http://placehold.it/666x666"
									slug="product"
									category_title="Trang điểm"
								/>
							</Carousel>
						</div>
					</div>
				</div>
			</section>
			<CountDownSell />
			<section className="man-banner spad">
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
							<div className="filter-control">
								<ul>
									<li className="active">Clothings</li>
									<li>HandBag</li>
									<li>Shoes</li>
									<li>Accessories</li>
								</ul>
							</div>
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
								<ProductCard
									title="Product 1"
									price="500000"
									discount="90000"
									image="http://placehold.it/666x666"
									slug="product"
									category_title="Trang điểm"
								/>
								<ProductCard
									title="Product 2"
									price="500000"
									image="http://placehold.it/666x666"
									slug="product"
									category_title="Trang điểm"
								/>
								<ProductCard
									title="Product 3"
									price="500000"
									image="http://placehold.it/666x666"
									slug="product"
									category_title="Trang điểm"
								/>
								<ProductCard
									title="Product 4"
									price="500000"
									image="http://placehold.it/666x666"
									slug="product"
									category_title="Trang điểm"
								/>
								<ProductCard
									title="Product 5"
									price="500000"
									image="http://placehold.it/666x666"
									slug="product"
									category_title="Trang điểm"
								/>
							</Carousel>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default HomePage;

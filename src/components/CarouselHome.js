import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
	return (
		<Carousel className="hero-items" fade>
			<Carousel.Item>
				<img className="d-block w-100" src="img/banner-my-pham.jpg" alt="First slide" />
				<Carousel.Caption>
					<div className="container">
						<div className="row">
							<div className="col-lg-5">
								<span>Bag,kids</span>
								<h1>Black friday</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
									et dolore
								</p>
								<a href="#!" className="primary-btn">
									Shop Now
								</a>
							</div>
						</div>
						<div className="off-card">
							<h2>
								Sale <span>50%</span>
							</h2>
						</div>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src="img/thiet-ke-banner-my-pham37.jpg" alt="Second slide" />
				<Carousel.Caption>
					<div className="container">
						<div className="row">
							<div className="col-lg-5">
								<span>Bag,kids</span>
								<h1>Black friday</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
									et dolore
								</p>
								<a href="#!" className="primary-btn">
									Shop Now
								</a>
							</div>
						</div>
						<div className="off-card">
							<h2>
								Sale <span>50%</span>
							</h2>
						</div>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselHome;

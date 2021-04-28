import React from 'react';

const BannerHome = () => {
	return (
		<div className="banner-section spad py-5">
			<div className="container">
				<div className="benefit-items mt-0">
					<div className="row">
						<div className="col-lg-4">
							<div className="single-benefit">
								<div className="sb-icon">
									<img src="img/icon-1.png" alt="img" />
								</div>
								<div className="sb-text">
									<h6>Free Shipping</h6>
									<p>For all order over 99$</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-benefit">
								<div className="sb-icon">
									<img src="img/icon-2.png" alt="img" />
								</div>
								<div className="sb-text">
									<h6>Delivery On Time</h6>
									<p>If good have prolems</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-benefit">
								<div className="sb-icon">
									<img src="img/icon-1.png" alt="img" />
								</div>
								<div className="sb-text">
									<h6>Secure Payment</h6>
									<p>100% secure payment</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerHome;

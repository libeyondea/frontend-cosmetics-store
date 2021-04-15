import React from 'react';
import Layout from '../components/Layout';

const ContactPage = ({ props }) => {
	return (
		<Layout>
			<div className="map spad">
				<div className="container">
					<div className="map-inner">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.9627149755017!2d106.61225982808378!3d10.848324216803759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1618455025870!5m2!1svi!2s"
							height={610}
							style={{ border: 0 }}
							allowFullScreen
							title="Map location"
						></iframe>
						<div className="icon">
							<i className="fa fa-map-marker" />
						</div>
					</div>
				</div>
			</div>
			<section className="contact-section spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<div className="contact-title">
								<h4>Contacts Us</h4>
								<p>
									Contrary to popular belief, Lorem Ipsum is simply random text. It has roots in a piece of classical
									Latin literature from 45 BC, maki years old.
								</p>
							</div>
							<div className="contact-widget">
								<div className="cw-item">
									<div className="ci-icon">
										<i className="ti-location-pin" />
									</div>
									<div className="ci-text">
										<span>Address:</span>
										<p>Trường Chinh, Phường 15, Tân Bình, Thành phố Hồ Chí Minh, Việt Nam</p>
									</div>
								</div>
								<div className="cw-item">
									<div className="ci-icon">
										<i className="ti-mobile" />
									</div>
									<div className="ci-text">
										<span>Phone:</span>
										<p>+84 336077.131</p>
									</div>
								</div>
								<div className="cw-item">
									<div className="ci-icon">
										<i className="ti-email" />
									</div>
									<div className="ci-text">
										<span>Email:</span>
										<p>nguyenhienthuc666@gmail.com</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 offset-lg-1">
							<div className="contact-form">
								<div className="leave-comment">
									<h4>Leave A Comment</h4>
									<p>Our staff will call back later and answer your questions.</p>
									<form action="#" className="comment-form">
										<div className="row">
											<div className="col-lg-6">
												<input type="text" placeholder="Your name" />
											</div>
											<div className="col-lg-6">
												<input type="text" placeholder="Your email" />
											</div>
											<div className="col-lg-12">
												<textarea placeholder="Your message" defaultValue={''} />
												<button type="submit" className="site-btn">
													Send message
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default ContactPage;

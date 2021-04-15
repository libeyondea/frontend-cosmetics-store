import React from 'react';

const CountDownSell = () => {
	return (
		<section
			className="deal-of-week set-bg spad"
			data-setbg="img/time-bg.jpg"
			style={{ backgroundImage: 'url(img/time-bg.jpg)' }}
		>
			<div className="container">
				<div className="col-lg-6 text-center">
					<div className="section-title">
						<h2>Deal Of The Week</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
							<br /> do ipsum dolor sit amet, consectetur adipisicing elit{' '}
						</p>
						<div className="product-price">
							$35.00
							<span>/ HanBag</span>
						</div>
					</div>
					<div className="countdown-timer" id="countdown">
						<div className="cd-item">
							<span>56</span>
							<p>Days</p>
						</div>
						<div className="cd-item">
							<span>12</span>
							<p>Hrs</p>
						</div>
						<div className="cd-item">
							<span>40</span>
							<p>Mins</p>
						</div>
						<div className="cd-item">
							<span>52</span>
							<p>Secs</p>
						</div>
					</div>
					<a href="#!" className="primary-btn">
						Shop Now
					</a>
				</div>
			</div>
		</section>
	);
};

export default CountDownSell;

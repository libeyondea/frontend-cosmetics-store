import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Layout from '../components/Layout';

const FaqPage = () => {
	const [openOne, setOpenOne] = useState(true);
	const [openTwo, setOpenTwo] = useState(false);
	const [openThree, setOpenThree] = useState(false);
	return (
		<Layout>
			<div className="breacrumb-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="breadcrumb-text">
								<a href="#!">
									<i className="fa fa-home" /> Home
								</a>
								<span>FAQs</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="faq-section spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="faq-accordin">
								<div className="accordion" id="accordionExample">
									<div className="card">
										<div className="card-heading">
											<a
												href="#!"
												className=""
												onClick={() => setOpenOne(!openOne)}
												aria-controls="collapseOne"
												aria-expanded={openOne}
												style={{ color: 'inherit', textDecoration: 'none' }}
											>
												Is There Anything I Should Bring?
											</a>
										</div>
										<Collapse in={openOne}>
											<div id="collapseOne">
												<div className="card-body">
													<p>
														Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
														tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
														veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
														commodo consequat.
													</p>
												</div>
											</div>
										</Collapse>
									</div>
									<div className="card">
										<div className="card-heading">
											<a
												href="#!"
												className=""
												onClick={() => setOpenTwo(!openTwo)}
												aria-controls="collapseTwo"
												aria-expanded={openTwo}
												style={{ color: 'inherit', textDecoration: 'none' }}
											>
												Where Can I Find Market Research Reports?
											</a>
										</div>
										<Collapse in={openTwo}>
											<div id="collapseTwo">
												<div className="card-body">
													<p>
														Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
														tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
														veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
														commodo consequat.
													</p>
												</div>
											</div>
										</Collapse>
									</div>
									<div className="card">
										<div className="card-heading">
											<a
												href="#!"
												className=""
												onClick={() => setOpenThree(!openThree)}
												aria-controls="collapseThree"
												aria-expanded={openThree}
												style={{ color: 'inherit', textDecoration: 'none' }}
											>
												Where Can I Find The Wall Street Journal?
											</a>
										</div>
										<Collapse in={openThree}>
											<div id="collapseThree">
												<div className="card-body">
													<p>
														Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
														tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
														veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
														commodo consequat.
													</p>
												</div>
											</div>
										</Collapse>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default FaqPage;

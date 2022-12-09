import React from "react";

import { Input, InputNumber, Button } from "antd";

import Navbar from "../../components/appComponents/Navbar.tsx";
import Footer from "../../components/appComponents/Footer.tsx";
import styles from "../../styles/TourDetails.module.css";
import TOURS from "../../constants/tours";

const TourDetails = () => {
	return (
		<div>
			<Navbar />
			<div className={styles.wrapper}>
				<div className={styles.details_container}>
					<div className={styles.left_container}>
						<img src="/assets/home.jpg" alt="home" />
						<div className={styles.details}>
							<div>
								<h2>Inclusions</h2>
								<p>
									<span>Facilities: </span>
									{TOURS[0].facilities}
								</p>
								<p>
									<span>Equipment: </span>
									{TOURS[0].equipment}
								</p>
								<p>
									<span>Photography: </span>
									{TOURS[0].photography}
								</p>
								<p>
									<span>Certificate: </span>
									{TOURS[0].certificate}
								</p>
							</div>
							<div>
								<h2>Information to participants</h2>
								<p>
									<span>Minimum Age: </span>
									{TOURS[0].minAge}
								</p>
								<p>
									<span>Physical Requirement: </span>
									{TOURS[0].physicalRequirement}
								</p>
								<p>
									<span>Medical Condition: </span>
									{TOURS[0].medicalCondition}
								</p>
								<p>
									<span>What to carry: </span>
									{TOURS[0].carryItems}
								</p>
							</div>
						</div>
					</div>
					<div className={styles.right_container}>
						<h2>{TOURS[0].title}</h2>
						<h3>{TOURS[0].subtitle}</h3>
						<div className={styles.location_container}>
							<div>
								<h4>{TOURS[0].location}</h4>
								<h4>{TOURS[0].duration}</h4>
							</div>
							<div>
								<p>
									Minimum Age: <span>{TOURS[0].minAge}</span>
								</p>
								<p>
									Activity Type: <span>{TOURS[0].type}</span>
								</p>
							</div>
						</div>
						<div className={styles.description}>
							<h1>ABOUT</h1>
							<p>{TOURS[0].about}</p>
						</div>
						<div className={styles.description}>
							<h1 style={{ color: "rgb(204, 66, 99)" }}>
								WHY YOU WILL LOVE THIS ACTIVITY?
							</h1>
							<p>{TOURS[0].description}</p>
						</div>
						<div className={styles.contact_details}>
							<div>
								<div>
									<label htmlFor="name">Name</label>
									<Input style={{ width: "100%" }} />
								</div>
								<div>
									<label htmlFor="guests">Number of guests</label>
									<div className={styles.guest_details}>
										<div>
											<span>Adult</span>
											<InputNumber style={{ marginTop: ".5rem" }} />
										</div>
										<div>
											<span>Children</span>
											<InputNumber style={{ marginTop: ".5rem" }} />
										</div>
									</div>
								</div>
							</div>
							<div>
								<div>
									<label htmlFor="number">Contact Number</label>
									<Input />
								</div>
								<div>
									<label htmlFor="email">Email</label>
									<Input />
								</div>
							</div>
							<Button type="primary">I want to this tour</Button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default TourDetails;

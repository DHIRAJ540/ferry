import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Input, InputNumber, Button, Table } from "antd";

import Navbar from "../../components/appComponents/Navbar";
import Footer from "../../components/appComponents/Footer";
import styles from "../../styles/TourDetails.module.css";
import TOURS from "../../constants/tours";
import Faq from "@components/pageComponents/Faq";

const TravelDetails = () => {
	const columns = [
		{
			title: "Ship",
			dataIndex: "ship",
			key: "ship"
		},
		{
			title: "Departure Time",
			dataIndex: "departure",
			key: "departure"
		},
		{
			title: "Arrival Tome",
			dataIndex: "arrival",
			key: "arrival"
		},
		{
			title: "Book Ticket",
			dataIndex: "book",
			key: "book",
			render: (text) => <Link href="/book">{text}</Link>
		}
	];

	return (
		<div>
			<Navbar />
			<div className={styles.wrapper}>
				<div className={styles.details_container}>
					<div className={styles.left_container}>
						<Image
							src="/assets/home.jpg"
							alt="home"
							height={500}
							width={2000}
						/>
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
						{/* <div className={styles.description}>
							<h1 style={{ color: "rgb(204, 66, 99)" }}>
								WHY YOU WILL LOVE THIS ACTIVITY?
							</h1>
							<p>{TOURS[0].description}</p>
						</div> */}
						<div className={styles.description}>
							<h1>Schedule</h1>
							<div className={styles.table}>
								<Table columns={columns} dataSource={TOURS[0].tableData} />
							</div>
						</div>
						<div className={styles.description}>
							<h1>Maps</h1>
							<div className={styles.images}>
								{TOURS[0] &&
									TOURS[0].mapImages.length > 0 &&
									TOURS[0].mapImages.map((item, index) => (
										<Image
											height={2000}
											width={2000}
											src={item}
											alt="travel map"
											className={styles.travel_map}
										/>
									))}
							</div>
						</div>
						<div className={styles.description}>
							<h1>Frequently Asked Questions</h1>
							<div>
								<Faq faqs={TOURS[0].faqData} />
							</div>
						</div>
						{/* <div className={styles.contact_details}>
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
						</div> */}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default TravelDetails;

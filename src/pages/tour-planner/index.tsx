import React from "react";
import Image from "next/image";

import { Slider, Select, DatePicker, Card } from "antd";
const { RangePicker } = DatePicker;
const { Meta } = Card;

import Navbar from "../../components/appComponents/Navbar";
import Footer from "../../components/appComponents/Footer";
import styles from "../../styles/TourPlanner.module.css";
import PLACE_OPTIONS from "../../constants/places";
import TOURS from "../../constants/tours";
import Link from "next/dist/client/link";

type Props = {};

const TourPlanner = () => {
	return (
		<div>
			<Navbar />

			<div className={styles.wrapper}>
				<div className={styles.input_container}>
					<div>
						<label htmlFor="date">Date</label>
						<br />
						<RangePicker />
					</div>
					<div>
						<label htmlFor="price">Price</label>
						<Slider
							marks={{ 0: "0", 150000: "150000" }}
							min={0}
							max={150000}
							range
						/>
					</div>
					<div>
						<label htmlFor="place">Place</label>
						<br />
						<Select
							options={PLACE_OPTIONS}
							style={{ width: "100%" }}
							defaultValue="India"
						/>
					</div>
				</div>
				<div>
					<h2>Explore experiences</h2>
					<div>
						<div className={styles.tour_types}>
							<div>
								<Image
									src="/assets/home.jpg"
									alt="home"
									width={2000}
									height={2000}
								/>
								<p>Water sports</p>
							</div>
							<div>
								<Image
									src="/assets/home.jpg"
									alt="home"
									width={2000}
									height={2000}
								/>
								<p>Adeventure</p>
							</div>
							<div>
								<Image
									src="/assets/home.jpg"
									alt="home"
									width={2000}
									height={2000}
								/>
								<p>Romantic</p>
							</div>
							<div>
								<Image
									src="/assets/home.jpg"
									alt="home"
									width={2000}
									height={2000}
								/>
								<p>Tour</p>
							</div>
						</div>
						<div className={styles.tours}>
							{TOURS.map((item, index) => (
								<div key={index}>
									<Link href={"/travel/id"}>
										<Card
											hoverable
											style={{ width: 300 }}
											cover={
												<Image
													alt="example"
													src="/assets/home.jpg"
													style={{ height: 200, objectFit: "cover" }}
													width={2000}
													height={2000}
												/>
											}
										>
											<Meta title={item.title} description={item.subtitle} />
										</Card>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default TourPlanner;

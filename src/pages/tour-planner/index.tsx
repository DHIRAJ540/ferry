import React from "react";

import { Slider, Select, DatePicker, Card } from "antd";
const { RangePicker } = DatePicker;
const { Meta } = Card;

import Navbar from "../../components/appComponents/Navbar.tsx";
import Footer from "../../components/appComponents/Footer.tsx";
import styles from "../../styles/TourPlanner.module.css";
import PLACE_OPTIONS from "../../constants/places";
import TOURS from "../../constants/tours";

type Props = {};

const TourPlanner = (props: Props) => {
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
								<img src="/assets/home.jpg" alt="home" />
								<p>Water sports</p>
							</div>
							<div>
								<img src="/assets/home.jpg" alt="home" />
								<p>Adeventure</p>
							</div>
							<div>
								<img src="/assets/home.jpg" alt="home" />
								<p>Romantic</p>
							</div>
							<div>
								<img src="/assets/home.jpg" alt="home" />
								<p>Tour</p>
							</div>
						</div>
						<div className={styles.tours}>
							{TOURS.map((item, index) => (
								<div>
									<Card
										hoverable
										style={{ width: 300 }}
										cover={
											<img
												alt="example"
												src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
												style={{ height: 200, objectFit: "cover" }}
											/>
										}
									>
										<Meta title={item.title} description={item.subtitle} />
									</Card>
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

import React from "react";
import Image from "next/image";

import { Table } from "antd";
import { Button } from "antd";

import styles from "@styles/Operator.module.css";
import Navbar from "@components/appComponents/Navbar";
import Footer from "@components/appComponents/Footer";
import RighSidebar from "@components/pageComponents/RighSidebar";

const Page = () => {
	const columns = [
		{
			title: "#",
			dataIndex: "number",
			key: "number"
		},
		{
			title: "Class",
			dataIndex: "class",
			key: "class"
		},
		{
			title: "Departure",
			dataIndex: "departure",
			key: "departure"
		},
		{
			title: "Arrival",
			dataIndex: "arrival",
			key: "arrival"
		},
		{
			title: "duration",
			dataIndex: "duration",
			key: "duration"
		},
		{
			title: "Fare",
			dataIndex: "fare",
			key: "fare"
		}
	];

	const tableData = [
		{
			key: "1",
			number: "1",
			class: "Luxury",
			departure: "08:00",
			arrival: "09:30",
			duration: "02 Hours",
			fare: "1229"
		},
		{
			key: "1",
			number: "1",
			class: "Luxury",
			departure: "08:00",
			arrival: "09:30",
			duration: "02 Hours",
			fare: "1229"
		},
		{
			key: "1",
			number: "1",
			class: "Luxury",
			departure: "08:00",
			arrival: "09:30",
			duration: "02 Hours",
			fare: "1229"
		}
	];

	const tableData2 = [
		{
			key: "1",
			number: "1",
			class: "Luxury",
			departure: "08:00",
			arrival: "09:30",
			duration: "02 Hours",
			fare: "1229"
		},
		{
			key: "1",
			number: "1",
			class: "Luxury",
			departure: "08:00",
			arrival: "09:30",
			duration: "02 Hours",
			fare: "1229"
		},
		{
			key: "1",
			number: "1",
			class: "Luxury",
			departure: "08:00",
			arrival: "09:30",
			duration: "02 Hours",
			fare: "1229"
		}
	];

	return (
		<div>
			<Navbar />
			<main>
				<Image
					src={"/assets/green_ocean.jpeg"}
					height={2000}
					width={2000}
					alt="operator image"
					className={styles.cover_image}
				/>
				<div className={styles.wrapper}>
					<div className={styles.left_container}>
						<h1>Green Ocean</h1>
						<p>
							Green Ocean is a reliable ferry operator with a decades on Ferry /
							Boat operational experience under its belt in Andaman sea.Ferry
							operations is the first and the only all weather deep sea vessel
							to operate between Port Blair. Green Ocean Seaways has a Fleet of
							two Ferry operating between Port Blair – Havelock-Neil Island
							route Daily Trip from Port Blair Harbor – Haddo Warf. Green Ocean
							is very well received among Traveler as a Fun and most Happening
							Ferry with Onboard Music and Dance.its the only Ferry with open
							air area where one can stroll around to see amazing view of the
							coastlines of the islands as the ferry Sails.Besides taking Green
							Ocean Transfer allows people to spend more time on tour and sight
							seeing in destination islands – Havelock and Neil.
						</p>
						<h3>Green Ocean 1</h3>

						<p>
							Travel from port Blair to Havelock or Neil is best through Green
							Ocean Seaways ferry as it takes 2hrs from your destination. Vessel
							has the capacity of 314 seats of different classes .
						</p>
						<div>
							<ul>
								<li>Upper Deck – Royal class</li>
								<li>Middle Deck – Delux class</li>
								<li>Lower Deck – Premium class</li>
							</ul>
						</div>
						<div className={styles.images}>
							<Image
								src={"/assets/green_ocean_1.jpg"}
								className={styles.image}
								height={500}
								width={500}
								alt="green ocean image"
							/>
							<Image
								src={"/assets/green_ocean_2.jpeg"}
								className={styles.image}
								height={500}
								width={500}
								alt="green ocean image"
							/>
							<Image
								src={"/assets/green_ocean_3.jpeg"}
								className={styles.image}
								height={500}
								width={500}
								alt="green ocean image"
							/>
							<Image
								src={"/assets/green_ocean_4.jpeg"}
								className={styles.image}
								height={500}
								width={500}
								alt="green ocean image"
							/>
						</div>
						<div className={styles.tables}>
							<div className={styles.table}>
								<h3>Port Blair to Havelock Island</h3>
								<Table columns={columns} dataSource={tableData} />
							</div>
							<div className={styles.table}>
								<h3>Havelock to Neil Island – Check Availability</h3>
								<Table columns={columns} dataSource={tableData2} />
							</div>
						</div>

						<p>
							Click here to learn more information about Green Ocean all weather
							sea way ferry from port blair to havelock, havelock to niel – in
							andaman islands
						</p>
						<h3>
							Green Ocean 2 – Currency off schedule – Expected by Jan 2022.
						</h3>

						<p>
							Travel in style onboard Green Ocean 2 High speed craft – Havelock
							to Neil which takes about 1.5 hrs and Neil to Port Blair 1.15 hr
							Vessel has the capacity of 200 seats of different classes.
						</p>
						<div>
							<ul>
								<li>Upper Deck – Royal class</li>
								<li>Middle Deck – Delux class</li>
								<li>Lower Deck – Premium class</li>
							</ul>
						</div>
						<p>
							Green Ocean 2 has modern cafe with hot and cold beverages and
							Packaged food and bakery.
						</p>
						<h3>Luxury Seat – Sit around table</h3>
						<p>
							The Unique thing about green ocean 2 is a sit around table with a
							big window in luxury classs. Four person and seat with two in each
							row facing each other.
						</p>
						<div className={styles.images}>
							<Image
								src={"/assets/green_ocean_1.jpg"}
								className={styles.image}
								height={500}
								width={500}
								alt="green ocean image"
							/>
							<Image
								src={"/assets/green_ocean_2.jpeg"}
								className={styles.image}
								height={500}
								width={500}
								alt="green ocean image"
							/>
							<Image
								src={"/assets/green_ocean_3.jpeg"}
								className={styles.image}
								height={500}
								width={500}
								alt="green ocean image"
							/>
							<Image
								src={"/assets/green_ocean_4.jpeg"}
								className={styles.image}
								height={500}
								width={500}
								alt="green ocean image"
							/>
						</div>
					</div>
					<div>
						<RighSidebar />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Page;

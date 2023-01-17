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
			title: "From",
			dataIndex: "from",
			key: "from"
		},
		{
			title: "To",
			dataIndex: "to",
			key: "to"
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
			title: "Premium",
			dataIndex: "premium",
			key: "premium"
		},
		{
			title: "Delux",
			dataIndex: "delux",
			key: "delux"
		},
		{
			title: "Royal",
			dataIndex: "royal",
			key: "royal"
		}
	];

	const tableData = [
		{
			key: "1",
			from: "Port Blair",
			to: "Havelock",
			departure: "08:00",
			arrival: "09:30",
			premium: "1450 + 18% GST + 50 PSF",
			delux: "1450 + 18% GST + 50 PSF",
			royal: "1450 + 18% GST + 50 PSF"
		},
		{
			key: "1",
			from: "Port Blair",
			to: "Havelock",
			departure: "08:00",
			arrival: "09:30",
			premium: "1450 + 18% GST + 50 PSF",
			delux: "1450 + 18% GST + 50 PSF",
			royal: "1450 + 18% GST + 50 PSF"
		},
		{
			key: "1",
			from: "Port Blair",
			to: "Havelock",
			departure: "08:00",
			arrival: "09:30",
			premium: "1450 + 18% GST + 50 PSF",
			delux: "1450 + 18% GST + 50 PSF",
			royal: "1450 + 18% GST + 50 PSF"
		},
		{
			key: "1",
			from: "Port Blair",
			to: "Havelock",
			departure: "08:00",
			arrival: "09:30",
			premium: "1450 + 18% GST + 50 PSF",
			delux: "1450 + 18% GST + 50 PSF",
			royal: "1450 + 18% GST + 50 PSF"
		},
		{
			key: "1",
			from: "Port Blair",
			to: "Havelock",
			departure: "08:00",
			arrival: "09:30",
			premium: "1450 + 18% GST + 50 PSF",
			delux: "1450 + 18% GST + 50 PSF",
			royal: "1450 + 18% GST + 50 PSF"
		}
	];

	return (
		<div>
			<Navbar />
			<main>
				<Image
					src={"/assets/makruzz.jpeg"}
					height={2000}
					width={2000}
					alt="operator image"
					className={styles.cover_image}
				/>
				<div className={styles.wrapper}>
					<div className={styles.left_container}>
						<h1>Makruzz Ferry Ticket Booking</h1>
						<p>
							Travelling between Andaman islands by a Makruzz Ferry is very
							convenient and cost-effective.
						</p>
						<p>
							Makruzz Ferries are private owned and boast comfortable seating
							with prices lower than others. Makruzz is the first private ferry
							company to start ferry services for tourism in Andaman island and
							has largest and long serving fleet of ferry which is why its able
							to do better in terms confirmed <span>schedule departures</span>.
							over the years it has established itself for on time departure and
							schedule performance with the multiple ferry they operates
							.Makruzz cover more destinations sector and various departures for
							Between Port Blair , Havelock and Neil Islands.
						</p>
						<p>
							Although there isn’t an open deck, the seats inside Makruzz Ferry
							have windows which give you a clear view of the water outside.
						</p>
						<h3>There are 3 seating options available:</h3>
						<div>
							<ul>
								<li>Premium</li>
								<li>Delux</li>
								<li>Royal</li>
							</ul>
						</div>
						<p>
							<span>Royal</span> is on the upper deck of the ferry with best and
							is the most luxurious class with big window with only 8 seats
							making it a exclusive class.
						</p>
						<p>
							<span>Deluxe</span> and Premium are lower deck of the ferry and
							also has window for outside view. Deluxe in on the front and
							Premium is on the back.
						</p>
						<p>
							Makruzz is a high speed ferry and can save little time than other
							ferry for transfer between islands. all the passenger seating area
							and classes are fully air conditioned multi media and
							entertainment system all the seats are modern and provide maximum
							comfort onboard cafeteria
						</p>
						<h2>Schedule From 01st Dec’ 21 to 31st Jan’ 22</h2>
						<div className={styles.table}>
							<h3>Makruzz Fare</h3>
							<Table columns={columns} dataSource={tableData} />
						</div>
						<div className={styles.button_container}>
							<Button type="primary"> Check Availability </Button>
						</div>
						<p>
							The Makruzz Ferries run between Havelock island, Port Blair, and
							Neil island mostly all throughout the day. there are two ferry
							which operates for Port Blair to havelock , havelock to neil and
							Neil to port Blair route and one ferry that operates for Port to
							neil and neil to havelock and havelock to port blair route daily
							trips from port blair haddo jetty.
						</p>
						<p>
							The Makruzz timings may vary depending on the climate but the
							maximum time taken to reach through these ferries may range
							between 1 and a half to 2 and a half hours.
						</p>
						<p>
							Presently makruzz stoped ferry service for Port Blair to Neil
							island direct.
						</p>
						<p>
							After you reach your destination, you can also indulge in fun
							activities such as scuba diving, sea walking, or even visit
							Elephant Beach.
						</p>
						<p>
							Makruzz Ferry booking online is hassle-free with lower prices
							compared to when you go through an agent. Make the most of your
							trip by booking from ferrybooking.in.
						</p>
						<p>View Makruzz cruise and ferry photos and reviews.</p>
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

import React from "react";
import Image from "next/image";

import styles from "@styles/Operator.module.css";
import Navbar from "@components/appComponents/Navbar";
import Footer from "@components/appComponents/Footer";
import RighSidebar from "@components/pageComponents/RighSidebar";

const Page = () => {
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
						<h1>ITTPL Majestic</h1>
						<span>I T T</span> Group which very well know maritime company
						active in Kolkata and Andaman since 1952. Its services includes
						cargo vessels operation, chartering, shipping agency, custom- house
						brokers etc. The company is also involved in travel and tourism
						sector and own and operate hotel. I T T Group having a fleet of
						eight vessels and has been offering services for carriage of cargo
						across the country for the last several years. The aim of I T T
						Majestic is to offer quality passenger services together with luxury
						and comfort in Andaman &amp; Nicobar Islands, India.
						<p>
							<span>I T T Majestics</span> a high speed passenger craft is owned
							by I T T Lines (P) Ltd was pressed in to services since 2019. the
							vessel was designed by the Australian Naval Architect and
							Engineering Company Incat Crowthers and built by Indonesian
							Company in 2016. The craft is 33 Mtrs length having 200 seats of
							different categories. The craft is spread over a single deck I is
							fully air-conditioned and comfortable seats. There is a huge
							transparent glass window running the entire length of the craft
							which will enable passengers to enjoy panoramic view of the Sea.
							Passenger beside the window will be thrilled to see the enormous
							rolling waves. The vessel is capable for attaining the maximum
							speed of 33 nautical miles per hour.
						</p>
						<h3>There are 2 seating options available:</h3>
						<h3>There are 3 seating options available:</h3>
						<div>
							<ul>
								<li>
									<p>
										<span>Silver</span>
										<br />
										Silver Class has comfortable push back seats, this class has
										big windows that provide great views during journey.
									</p>
								</li>
								<li>
									<p>
										<span>Majesty</span>
										<br />
										Majesty is a Premium Class with exclusive space and seating
										arrangement that provide a comfortable and luxurious
										journey.
									</p>
								</li>
							</ul>
						</div>
						<h3>Schedule From 01st Aug’ 21 to 31st Jan’ 23</h3>
						<span>I T T Majestic</span> will make a round trip journey
						connecting PORT BLAIR – SWARAJ DWEEP ( HAVELOCK) – SHAHEED DWEEP
						(NEIL) – PORT BLAIR which will be completing one way journey in
						about/around 90 minutes. During the voyage passengers can enjoy
						delicious mouth watering, delicious hot meals together with a huge
						collection of drinks. These can be purchased on board or through a
						on pre booked system.
						<p>
							<span>Deluxe</span> and Premium are lower deck of the ferry and
							also has window for outside view. Deluxe in on the front and
							Premium is on the back.
						</p>
						<p>
							This vessel has been designed and built in compliance with IMO
							High Speed Code CAT – A. The bridge of the vessel is similar to
							the cockpit of an aircraft. The vessel is equipped with all the
							latest safety equipment for safety of the vessel as well as for
							the passengers travelling on board. The Engine room of the vessel
							is suitable for operation as unmanned machinery spaces having
							latest system which can be monitored through CCTV arrangement from
							the Bridge.
						</p>
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

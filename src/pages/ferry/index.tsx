import React from "react";

import { DatePicker, InputNumber, Button } from "antd";

import Navbar from "../../components/appComponents/Navbar.tsx";
import Footer from "../../components/appComponents/Footer.tsx";
import styles from "../../styles/Ferry.module.css";

type Props = {};

const Ferry = (props: Props) => {
	return (
		<div>
			<Navbar />
			<div className={styles.wrapper}>
				<div className={styles.ferry_container}>
					<div>
						<p>From</p>
						<h3>Port Blair</h3>
					</div>

					<div>
						<p>To</p>
						<h3>Swaraj Dweep</h3>
					</div>

					<div>
						<p>Travel Date</p>
						<DatePicker />
					</div>

					<div>
						<p>Passengers</p>
						<div className={styles.input_container}>
							<div>
								<span>Adult</span>
								<InputNumber />
							</div>
							<div>
								<span>Children</span>
								<InputNumber />
							</div>
						</div>
					</div>
					<div className={styles.button_container}>
						<Button type="primary">Search</Button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Ferry;

import React from "react";

import { Input, Select } from "antd";
const { TextArea } = Input;

import Navbar from "../../components/appComponents/Navbar.tsx";
import Footer from "../../components/appComponents/Footer.tsx";
import styles from "../../styles/Contact.module.css";

type Props = {};

const Contact = (props: Props) => {
	const options = [
		{ value: "book ferry ticket", label: "Book Ferry Ticket" },
		{ value: "book tour packages", label: "Book Tour Packages" }
	];

	return (
		<div>
			<Navbar />
			<div className={styles.wrapper}>
				<div>
					<h1>Contact Us</h1>
					<div className={styles.contact_details}>
						<div>
							<h3 className="tw-mb-0">Ferryasia.com</h3>
							<p className="tw-mt-0">
								26 , RGT Road, Port Blair,
								<br /> Andaman and Nicobar Islands <br /> 744104, India
							</p>
							<div className={styles.footer_contact}>
								<span className="">mail</span>
								<a href="mail: info@ferryasia.com">info@ferryasia.com</a>
							</div>
							<div className={styles.footer_contact}>
								<span className="">call</span>
								<a href="tel:+918900913888">+918900913888</a>
							</div>
							<div className={styles.footer_contact}>
								<span className="">call</span>
								<a href="tel:+919933248880">+919933248880</a>
							</div>
							<div className={styles.footer_contact}>
								<span className="">call</span>
								<a href="tel:+913092231704">+913092231704</a>
							</div>
						</div>
						<div>
							<h2>INQUIRY FORM</h2>
							<label htmlFor="name">Full Name</label>
							<Input placeholder="" />
							<label htmlFor="email">Email Address</label>
							<Input placeholder="" />
							<label htmlFor="phone">Phone Number</label>
							<Input placeholder="" />
							<label htmlFor="interested">Interested In</label>
							<br />
							<Select
								style={{ width: "100%" }}
								options={options}
								defaultValue="Book Ferry Ticket"
							/>
							<br />
							<label htmlFor="person">Number of Person</label>
							<Input placeholder="" />
							<label htmlFor="message">Your Message</label>
							<TextArea />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;

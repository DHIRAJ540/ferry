import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "antd";

import styles from "../../styles/Footer.module.css";

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.payments}>
				<Button type="primary">Pay Money</Button>
				<Image
					src="/assets/payment.svg"
					width={609}
					height={59}
					alt="Payment-icons"
					style={{ width: "100%"}}
				/>
				<p>
					All Major Credit/Debit cards, UPI, Google Pay, PhonePe amd BHIM
					Accepted
				</p>
			</div>
			<div>
				<div className={styles.footer_details}>
					<div className={styles.footer_details_section}>
						<h2>Company</h2>
						<a href="">About Us</a>
						<Link href="/faq">FAQs</Link>
						<a href="">Privacy Policy</a>
						<a href="">Terms of Use</a>
						<a href="">Cancellation Policy</a>
					</div>
					<div className={styles.footer_details_section}>
						<h2>Useful Links</h2>
						<a href="">Online Ferry Ticket Booking</a>
						<a href="">Boat Ticket Booking</a>
						<a href="">Scuba And Adventures Booking</a>
					</div>
					<div className={styles.footer_details_section}>
						<h2>Ferry Partners</h2>
						<a href="">Green Ocean</a>
						<a href="">Makruzz</a>
						<a href="">ITTPL Majestic</a>
					</div>
					<div className={styles.footer_details_section}>
						<h2>Reach Us</h2>
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
				</div>
			</div>
			<div className={styles.copyright}>
				Copyright 2022 © All Rights Reserved.
			</div>
		</footer>
	);
};

export default Footer;

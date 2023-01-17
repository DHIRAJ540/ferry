import React from "react";

import { ArticleJsonLd, NextSeo } from "next-seo";
import { Input, Select } from "antd";
const { TextArea } = Input;

import styles from "../styles/Contact.module.css";
import Navbar from "@components/appComponents/Navbar";
import Footer from "@components/appComponents/Footer";
import BOOKING_OPTIONS from "@constants/bookingOptions";

const Page = () => {
	return (
		<div>
			<ArticleJsonLd
				title="Destinations in Andaman Nicobar Islands India"
				description="Book packages for Andaman tour with best price and options"
				url="https://example.com/destinations-in-andaman-nicobar-islands-india"
				datePublished="2015-02-05T08:00:00+08:00"
				authorName={[
					{
						name: "Jane Blogs",
						url: "https://example.com"
					}
				]}
				publisherName="Gary Meehan"
				publisherLogo="/assets/home.png"
				images={["/assets.home.png"]}
			/>
			<Navbar />
			<div>
				<div>
					<h1 style={{ textAlign: "center" }}>
						Destinations in Andaman Nicobar Islands India
					</h1>
				</div>
				<div className={styles.contact_details}>
					<div style={{ maxWidth: "700px", marginInline: "auto" }}>
						<h2 style={{ textAlign: "center" }}>INQUIRY FORM</h2>
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
							options={BOOKING_OPTIONS}
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
			<Footer />
		</div>
	);
};

export default Page;

import Head from "next/head";
import Image from "next/image";
import { CSSProperties } from "react";

import { Select, DatePicker, Button, Space, Card } from "antd";

import styles from "@styles/Home.module.css";
import Navbar from "@components/appComponents/Navbar";
import Footer from "@components/appComponents/Footer";
import Faq from "@components/pageComponents/Faq";
import { FAQS, PLACE_OPTIONS } from "@constants/index";

const { RangePicker } = DatePicker;
const { Meta } = Card;

const gridStyle: CSSProperties = {
	width: "25%",
	textAlign: "center"
};

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Navbar />
				<div className={styles.header}>
					<div>
						<Image
							alt="home_image"
							src="/assets/home.jpg"
							className={styles.header_image}
							width={2000}
							height={2000}
						/>
					</div>
					<div className={styles.header_details}>
						<h1>Your Travel Partner</h1>
						<div>
							<Space>
								<Select
									defaultValue="India"
									style={{ width: 120 }}
									options={PLACE_OPTIONS}
								/>
								<Select
									defaultValue="India"
									style={{ width: 120 }}
									options={PLACE_OPTIONS}
								/>
								<RangePicker showTime />
								<Button type="primary">Search</Button>
							</Space>
						</div>
					</div>
				</div>
				<div className={styles.wrapper}>
					<h1>Travel guides</h1>
					<div className={styles.card_container}>
						<Card
							hoverable
							style={{
								width: 250,
								marginBlock: "1rem"
							}}
							cover={
								<img
									alt="example"
									src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									style={{ height: 150, objectFit: "cover" }}
								/>
							}
						>
							<Meta title="Europe" />
						</Card>
						<Card
							hoverable
							style={{
								width: 250,
								marginBlock: "1rem"
							}}
							cover={
								<img
									alt="example"
									src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									style={{ height: 150, objectFit: "cover" }}
								/>
							}
						>
							<Meta title="Europe" />
						</Card>
						<Card
							hoverable
							style={{
								width: 250,
								marginBlock: "1rem"
							}}
							cover={
								<img
									alt="example"
									src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									style={{ height: 150, objectFit: "cover" }}
								/>
							}
						>
							<Meta title="Europe" />
						</Card>
						<Card
							hoverable
							style={{
								width: 250,
								marginBlock: "1rem"
							}}
							cover={
								<img
									alt="example"
									src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									style={{ height: 150, objectFit: "cover" }}
								/>
							}
						>
							<Meta title="Europe" />
						</Card>
						<Card
							hoverable
							style={{
								width: 250,
								marginBlock: "1rem"
							}}
							cover={
								<img
									alt="example"
									src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									style={{ height: 150, objectFit: "cover" }}
								/>
							}
						>
							<Meta title="Europe" />
						</Card>
					</div>
				</div>
				<div className={styles.wrapper}>
					<h1>Popular Routes</h1>
					<Card title="Thailand" style={{ marginBottom: ".5rem" }}>
						<Card.Grid style={gridStyle}>Budapest &#8594; Bangkok</Card.Grid>
						<Card.Grid style={gridStyle}>Budapest &#8594; Bangkok</Card.Grid>
						<Card.Grid style={gridStyle}>Budapest &#8594; Bangkok</Card.Grid>
						<Card.Grid style={gridStyle}>Budapest &#8594; Bangkok</Card.Grid>
						<Card.Grid style={gridStyle}>Budapest &#8594; Bangkok</Card.Grid>
						<Card.Grid style={gridStyle}>Budapest &#8594; Bangkok</Card.Grid>
						<Card.Grid style={gridStyle}>Budapest &#8594; Bangkok</Card.Grid>
					</Card>
					<Card title="India">
						<Card.Grid style={gridStyle}>Budapest &#8594; Bangkok</Card.Grid>
						<Card.Grid style={gridStyle}>Budapest &#8594; Bangkok</Card.Grid>
						<Card.Grid style={gridStyle}>Budapest &#8594; Bangkok</Card.Grid>
						<Card.Grid style={gridStyle}>Budapest &#8594; Bangkok</Card.Grid>
						<Card.Grid style={gridStyle}>Budapest &#8594; Bangkok</Card.Grid>
						<Card.Grid style={gridStyle}>Budapest &#8594; Bangkok</Card.Grid>
						<Card.Grid style={gridStyle}>Budapest &#8594; Bangkok</Card.Grid>
					</Card>
				</div>
				<div className={styles.wrapper}>
					<h1>Frequently Asked Questions</h1>
					<Faq faqs={FAQS} />
				</div>
			</main>
			<Footer />
		</div>
	);
}

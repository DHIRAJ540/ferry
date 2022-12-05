import Head from "next/head";
import Image from "next/image";
import homeImg from "../../public/assets/home.jpg";
import { Select, DatePicker, Button, Space, Card, Collapse } from "antd";
const { Meta } = Card;
const { RangePicker } = DatePicker;
const { Panel } = Collapse;

import styles from "@styles/Home.module.css";
import Navbar from "@components/Navbar";
import Faq from "@components/pageComponents/Faq";

export default function Home() {
	const placeOptions = [
		{ value: "India", label: "India" },
		{ value: "England", label: "England" },
		{ value: "Dubai", label: "Dubai" },
		{ value: "Ireland", label: "Ireland" }
	];

	const gridStyle = {
		width: "25%",
		textAlign: "center"
	};

	const faqs = [
		{
			question: "What is a travel guide?",
			answer:
				"A travel guide is a collection of travel tips and information that you can use to plan your next trip."
		},
		{
			question: "How do I create a travel guide?",
			answer:
				'You can create a travel guide by clicking the "Create a travel guide" button in the top right corner of the page. You can then add a title, a description, and a list of destinations.'
		},
		{
			question: "How do I add a destination to my travel guide?",
			answer:
				'You can add a destination by clicking the "Add a destination" button in the top right corner of the page. You can then add a title, a description, and a list of activities.'
		},
		{
			question: "How do I add an activity to my destination?",
			answer:
				'You can add an activity by clicking the "Add an activity" button in the top right corner of the page. You can then add a title, a description, and a list of activities.'
		}
	];

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
							src={homeImg}
							layout="fill"
							objectFit="cover"
							className={styles.header_image}
						/>
					</div>
					<div className={styles.header_details}>
						<h1>Your Travel Partner</h1>
						<div>
							<Space>
								<Select
									defaultValue="India"
									style={{ width: 120 }}
									options={placeOptions}
								/>
								<Select
									defaultValue="India"
									style={{ width: 120 }}
									options={placeOptions}
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
					<Card title="Thailand">
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
					<Faq faqs={faqs} />
				</div>
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
}

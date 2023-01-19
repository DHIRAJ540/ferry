import Image from "next/image";
import Link from "next/link";

import { ArticleJsonLd, NextSeo } from "next-seo";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { Table } from "antd";

import Navbar from "@components/appComponents/Navbar";
import Footer from "@components/appComponents/Footer";
import Faq from "@components/pageComponents/Faq";
import styles from "../styles/Tour.module.css";
import FAQS from "@constants/faqs";
import { useRouter } from "next/router";

export default function TourPage({
	frontmatter: { cover_image, table_data, title, description, map_image },
	content
}) {
	const columns = [
		{
			title: "Ship",
			dataIndex: "ship",
			key: "ship"
		},
		{
			title: "Departure Time",
			dataIndex: "departure",
			key: "departure"
		},
		{
			title: "Arrival Tome",
			dataIndex: "arrival",
			key: "arrival"
		},
		{
			title: "Book Ticket",
			dataIndex: "book",
			key: "book",
			render: (text) => <Link href="/book">{text}</Link>
		}
	];

	const router = useRouter();
	const { slug } = router.query;

	return (
		<div>
			<Navbar />
			{/* <NextSeo title={title} description={description} /> */}
			<ArticleJsonLd
				title={title}
				description={description}
				url={`https://example.com/${slug}`}
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
			<Image
				alt="tour_image"
				src={cover_image}
				className={styles.cover_image}
				width={2000}
				height={2000}
			/>
			<div className={styles.wrapper}>
				<div className={styles.left_container}>
					<div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
					{map_image && (
						<div style={{ marginBottom: "2rem" }}>
							<h3>Maps</h3>
							<div className={styles.images}>
								<Image
									height={400}
									width={2000}
									src={map_image}
									alt="map"
									className={styles.image}
								/>
							</div>
						</div>
					)}

					<div className={styles.table}>
						<Table columns={columns} dataSource={table_data} />
					</div>
					<h2>Frequently asked questions</h2>
					<Faq faqs={FAQS} />
				</div>
				<div className={styles.right_container}>
					<h3>Useful Links</h3>
					<div>
						<h5>Planning</h5>
						<Link href="/ferry-cruise-connectivity-in-andaman-nicobar-islands/">
							About Andamans
						</Link>
						<Link href="/ferry-cruise-connectivity-in-andaman-nicobar-islands/">
							Ferry connectivity in Andamans
						</Link>
						<Link href="/ferry-cruise-connectivity-in-andaman-nicobar-islands/">
							Boat Connectivity in Andamans
						</Link>
					</div>
					<div>
						<h5>Destinations</h5>
						<Link href="/ferry-cruise-connectivity-in-andaman-nicobar-islands/">
							Port Blair to Havelock
						</Link>
						<Link href="/ferry-cruise-connectivity-in-andaman-nicobar-islands/">
							Ross island
						</Link>
						<Link href="/ferry-cruise-connectivity-in-andaman-nicobar-islands/">
							Elephants beach
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("tours"));

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".md", "")
		}
	}));

	// console.log(paths);

	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(
		path.join("tours", slug + ".md"),
		"utf-8"
	);

	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			frontmatter,
			slug,
			content
		}
	};
}

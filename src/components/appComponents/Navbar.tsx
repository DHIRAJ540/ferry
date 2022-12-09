import React, { useState } from "react";

import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const { Item } = Menu;

import styles from "../../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const items = [
		{
			label: (
				<Link href={`/`} key="home">
					<Item>Home</Item>
				</Link>
			),
			key: "home"
		},
		{
			label: (
				<Link href={`/ferry`} key="ferry">
					<Item>Ferry</Item>
				</Link>
			),
			key: "ferry"
		},
		{
			label: (
				<Link href={`/destinations`} key="destinations">
					<Item>Destinations</Item>
				</Link>
			),
			key: "destinations"
		},
		{
			label: (
				<Link href={`/tour-planner`} key="tour-planner">
					<Item>Tour planner</Item>
				</Link>
			),
			key: "tour-planner"
		},
		{
			label: (
				<Link href={`/manage-bookings`} key="manage-bookings">
					<Item>Manage bookings</Item>
				</Link>
			),
			key: "manage-bookings"
		},
		{
			label: (
				<Link href={`/blog`} key="blog">
					<Item>Blog</Item>
				</Link>
			),
			key: "blog"
		},
		{
			label: (
				<Link href={`/about`} key="about">
					<Item>About</Item>
				</Link>
			),
			key: "about"
		},
		{
			label: (
				<Link href={`/contact`} key="contact">
					<Item>Contact</Item>
				</Link>
			),
			key: "contact"
		}
	];

	return (
		<div>
			<div className={styles.nav_container}>
				<div className="logo">
					<p>FerryAsia</p>
				</div>
				<div>
					<div className={styles.menu}>
						<Menu items={items} mode="horizontal" className="nav_menu" />
					</div>
					<div className={styles.ham_menu}>
						<Button
							className="barsMenu"
							type="primary"
							onClick={() => setIsOpen(!isOpen)}
						>
							<MenuOutlined />
						</Button>
						<Drawer
							placement="right"
							closable={false}
							onClose={() => setIsOpen(false)}
							open={isOpen}
							width="300px"
						>
							<Menu items={items} mode="vertical" className="nav_menu" />
						</Drawer>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

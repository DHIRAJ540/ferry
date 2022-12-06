import React, { useState } from "react";

import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const { Item } = Menu;

import styles from "../../styles/Navbar.module.css";

const MenuComponent = ({ mode, items }) => {
	return (
		<Menu mode={mode}>
			{items.map((item, index) => (
				<Item key={index}>{item.label}</Item>
			))}
		</Menu>
	);
};

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const items = [
		{ label: "Home", key: "Home" },
		{ label: "Ferry", key: "Ferry" },
		{ label: "Destinations", key: "Destinations" },
		{ label: "Tour Planner", key: "Tour Planner" },
		{ label: "Manage Bookings", key: "Manage Bookings" },
		{ label: "Blog", key: "Blog" },
		{ label: "about", key: "about" },
		{ label: "contact", key: "contact" }
	];

	return (
		<div>
			<div className={styles.nav_container}>
				<div className="logo">
					<p>FerryAsia</p>
				</div>
				<div>
					<div className={styles.menu}>
						<MenuComponent items={items} mode="horizontal" />
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
							<MenuComponent items={items} mode="vertical" />
						</Drawer>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
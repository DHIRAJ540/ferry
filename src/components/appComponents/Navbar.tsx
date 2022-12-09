import React, { useState } from "react";

import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const { Item } = Menu;

import styles from "../../styles/Navbar.module.css";
import Link from "next/link";

const MenuComponent = ({ mode, navOptions }) => {
	return (
		<Menu
			mode={mode}
			items={navOptions.map((item, index) => ({
				label: <Link href={`/${item.key}`}>{item.label}</Link>
			}))}
		></Menu>
	);
};

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const items = [
		{ label: "Home", key: "/" },
		{ label: "Ferry", key: "ferry" },
		{ label: "Destinations", key: "destinations" },
		{ label: "Tour Planner", key: "tour-planner" },
		{ label: "Manage Bookings", key: "manage-bookings" },
		{ label: "Blog", key: "blog" },
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
						<MenuComponent navOptions={items} mode="horizontal" />
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
							<MenuComponent navOptions={items} mode="vertical" />
						</Drawer>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

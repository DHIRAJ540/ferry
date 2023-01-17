import React from "react";
import Link from "next/link";

import styles from "@styles/RightSidebar.module.css";

const RighSidebar = () => {
	return (
		<div>
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
	);
};

export default RighSidebar;

import React from "react";

import { Collapse } from "antd";
const { Panel } = Collapse;

const Faq = ({ faqs }) => {
	return (
		<Collapse accordion>
			{faqs.map((item, index) => (
				<Panel header={item.question} key={index}>
					<p>{item.answer}</p>
				</Panel>
			))}
		</Collapse>
	);
};

export default Faq;

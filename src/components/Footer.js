import React, { useState } from "react";
import { Hero, Tabs, Footer } from "react-bulma-components";

const HeroFooter = () => {
	return (
		<Hero.Footer>
			<Footer>
				<Tabs fullwidth={true} className="is-boxed">
					<Tabs.Tab>asdfsadf</Tabs.Tab>
					<Tabs.Tab>asdfsadf</Tabs.Tab>
					<Tabs.Tab>asdfsdaf</Tabs.Tab>
				</Tabs>
			</Footer>
		</Hero.Footer>
	);
};

export default HeroFooter;

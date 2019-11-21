import React, { useState } from "react";
import {
	Hero,
	Container,
	Heading,
	Button,
	Image
} from "react-bulma-components";
import { HeroFooter } from "./Footer";

const Header = props => {
	console.log(props);
	return (
		<Hero size="fullheight" color="info" gradient>
			<Hero.Body>
				<Container className="heading-text">
					<Heading>Daniel P. Tindugan</Heading>
					<Heading subtitle size={3}>
						Fullstack Web Developer | MERNG
					</Heading>
					<Button renderAs="a" color="primary" href="#portfolio">
						View Profile
					</Button>
				</Container>
			</Hero.Body>
			<HeroFooter
				aboutTab={props.aboutTab}
				projectsTab={props.projectsTab}
				contactTab={props.contactTab}
				profileTab={props.profileTab}
			/>
		</Hero>
	);
};

export default Header;

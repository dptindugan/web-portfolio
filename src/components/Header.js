import React, { useState } from "react";
import {
	Hero,
	Container,
	Heading,
	Button,
	Image
} from "react-bulma-components";

const Header = props => {
	return (
		<Hero size="fullheight" color="info" gradient>
			<Hero.Body>
				<Container className="heading-text">
					<img id="img-round" src="/images/profileImg.jpg" />
					<Heading>Daniel P. Tindugan</Heading>
					<Heading subtitle size={3}>
						Fullstack Web Developer | MERNG
					</Heading>
					<Button color="primary" onClick={props.project}>
						View Profile
					</Button>
				</Container>
			</Hero.Body>
		</Hero>
	);
};

export default Header;

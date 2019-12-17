import React from "react";
import { Hero, Container, Heading, Columns } from "react-bulma-components";
// import { HeroFooter } from "./Footer";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";
// import ParticlesContainer from "./ParticlesContainer";

const Header = props => {
	// console.log(props);
	return (
		<Hero.Body className="landing-bg">
			<Container>
				<Columns>
					<Columns.Column>
						<Animated animationIn="fadeInDownBig">
							<Heading size={1} className="myName">
								Daniel P. Tindugan
							</Heading>
						</Animated>
						<Heading
							subtitle
							size={3}
							className="whatIdo anim-typewriter"
						>
							Fullstack Web Developer | MERNG
						</Heading>
						<Link
							className="is-info is-large button is-outlined"
							id="btnLink"
							to="/portfolio"
						>
							View Profile
						</Link>
					</Columns.Column>
					<Columns.Column className="landgingProfileImg">
						<img
							id="img-round"
							src="/images/profileImg.jpg"
							alt="..."
						/>
					</Columns.Column>
				</Columns>
			</Container>
		</Hero.Body>
	);
};
// <HeroFooter
// 	aboutTab={props.aboutTab}
// 	projectsTab={props.projectsTab}
// 	contactTab={props.contactTab}
// 	profileTab={props.profileTab}
// />

export default Header;

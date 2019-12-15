import React from "react";
import {
	Container,
	Heading,
	Section,
	Columns,
	Hero,
	Button,
	Box
} from "react-bulma-components";
import { HeroFooter } from "./Footer";

const About = props => {
	return (
		<Hero size="fullheight" color="info" gradient>
			<Hero.Body>
				<Container className="has-text-centered">
					<Heading size={2}>
						<h1 className="heading-text">
							Web Development is our passion
						</h1>
					</Heading>
					<Heading subtitle size={6}>
						We are a multidisciplinary dev team specializing in
						mobile product design, web development, branding and
						illustration
					</Heading>
					<Button
						renderAs="a"
						href="https://docs.google.com/document/d/1ZKUTKJ6jWwPlDci7Fh1KKFpbOe2jaS-pC7N4ioGDOs0/edit"
						target="_blank"
					>
						Download Resume
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

const AboutLanding = () => {
	return (
		<Section className="has-text-centered has-background-grey-light about-bg">
			<Heading className="heading-text">About</Heading>
			<Columns>
				<Columns.Column>
					<Container>
						<img id="img-about" src="/images/profileImg.jpg" />
						<Heading size={3}>Daniel P. Tindugan</Heading>
						<Heading
							subtitle
							size={4}
							className="has-text-grey-lighter"
						>
							MongoDB| Express.Js | React.Js | Node.Js | GraphQL
						</Heading>

						<Container id="about-p">
							<p className="has-text-grey-lighter">
								A Zuitt coding boot camper. Full stack web
								engineer, who can use Laravel framework and MERN
								+ GraphQL stack. Specializes in javascript DOM
								manipulation (React.js). My strong suit is
								analytical and logical thinking and methodical
								in work.
							</p>
						</Container>
					</Container>
				</Columns.Column>

				<Columns.Column>
					<Box className="heading-text">
						<Heading>Technologies</Heading>
						<Columns
							className="has-text-centered technologies"
							breakpoint="mobile"
						>
							<Columns.Column>
								<div className="logos">
									<img src="/images/apollo.png" />
								</div>
							</Columns.Column>

							<Columns.Column>
								<div className="logos">
									<img src="/images/bootstrap.png" />
								</div>
							</Columns.Column>

							<Columns.Column>
								<div className="logos">
									<img src="/images/bulma-logo.png" />
								</div>
							</Columns.Column>
						</Columns>
						<Columns
							className="has-text-centered technologies"
							breakpoint="mobile"
						>
							<Columns.Column>
								<div className="logos">
									<img src="/images/Expressjs.png" />
								</div>
							</Columns.Column>
							<Columns.Column>
								<div className="logos">
									<img src="/images/github.png" />
								</div>
							</Columns.Column>

							<Columns.Column>
								<div className="logos">
									<img src="/images/gitlab.png" />
								</div>
							</Columns.Column>
						</Columns>
						<Columns
							className="has-text-centered technologies"
							breakpoint="mobile"
						>
							<Columns.Column>
								<div className="logos">
									<img src="/images/graphQL.png" />
								</div>
							</Columns.Column>

							<Columns.Column>
								<div className="logos">
									<img src="/images/heroku-logo.png" />
								</div>
							</Columns.Column>
							<Columns.Column>
								<div className="logos">
									<img src="/images/html.png" />
								</div>
							</Columns.Column>

							<Columns.Column>
								<div className="logos">
									<img src="/images/css.png" />
								</div>
							</Columns.Column>

							<Columns.Column>
								<div className="logos">
									<img src="/images/js.png" />
								</div>
							</Columns.Column>

							<Columns.Column>
								<div className="logos">
									<img src="/images/mongoDB.png" />
								</div>
							</Columns.Column>
						</Columns>
						<Columns
							className="has-text-centered technologies"
							breakpoint="mobile"
						>
							<Columns.Column>
								<div className="logos">
									<img src="/images/mySQL.png" />
								</div>
							</Columns.Column>

							<Columns.Column>
								<div className="logos">
									<img src="/images/nodejs-new-pantone-black.png" />
								</div>
							</Columns.Column>

							<Columns.Column>
								<div className="logos">
									<img src="/images/npm.png" />
								</div>
							</Columns.Column>

							<Columns.Column>
								<div className="logos">
									<img src="/images/ReactJsLogo.png" />
								</div>
							</Columns.Column>
						</Columns>
					</Box>
				</Columns.Column>
			</Columns>
		</Section>
	);
};

export { About, AboutLanding };

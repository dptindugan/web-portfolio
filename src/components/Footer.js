import React, { useState } from "react";
import { Hero, Tabs, Footer, Columns, Heading } from "react-bulma-components";
import { ContactFooter } from "./Contact";

const HeroFooter = props => {
	console.log(props);
	const [visible, setVisible] = useState(false);
	const [about, setAbout] = useState(false);
	const [projects, setProjects] = useState(false);
	const [contact, setContact] = useState(false);
	const [profile, setProfile] = useState(false);
	const profileTabHandler = () => {
		setVisible(true);
		setAbout(false);
		setProjects(false);
		setContact(false);
		setProfile(true);
		props.profileTab();
	};

	const projectsTabHandler = () => {
		setVisible(true);
		setAbout(false);
		setProjects(true);
		setContact(false);
		setProfile(false);
		props.projectsTab();
	};

	const contactTabHandler = () => {
		setVisible(true);
		setAbout(false);
		setProjects(false);
		setContact(true);
		setProfile(false);

		props.contactTab();
	};

	const aboutTabHandler = () => {
		setVisible(true);
		setAbout(true);
		setProjects(false);
		setContact(false);
		setProfile(false);

		props.aboutTab();
	};
	return (
		<Hero.Footer>
			<Tabs fullwidth={true} className="is-boxed">
				<Tabs.Tab
					active={visible && about ? true : false}
					onClick={profileTabHandler}
				>
					Profile
				</Tabs.Tab>
				<Tabs.Tab
					active={visible && about ? true : false}
					onClick={projectsTabHandler}
				>
					Projects
				</Tabs.Tab>
				<Tabs.Tab
					active={visible && about ? true : false}
					onClick={aboutTabHandler}
				>
					About
				</Tabs.Tab>
				<Tabs.Tab
					active={visible && about ? true : false}
					onClick={contactTabHandler}
				>
					Contact
				</Tabs.Tab>
			</Tabs>
		</Hero.Footer>
	);
};

const LandingFooter = () => {
	return (
		<Footer size="medium">
			<Columns>
				<Columns.Column className="has-text-centered">
					<Heading>Links</Heading>

					<ul>
						<li>
							<a
								target="_blank"
								href="https://www.facebook.com/seierherre"
							>
								<i className="fab fa-facebook-square fa-3x"></i>
							</a>
						</li>
						<li>
							<a
								target="_blank"
								href="https://www.linkedin.com/in/daniel-tindugan/"
							>
								<i class="fab fa-linkedin fa-3x"></i>
							</a>
						</li>
						<li>
							<a
								target="_blank"
								href="https://github.com/dptindugan?tab=repositories"
							>
								<i class="fab fa-github-square fa-3x"></i>
							</a>
						</li>
					</ul>
				</Columns.Column>
				<Columns.Column className="has-text-centered">
					<ContactFooter />
				</Columns.Column>
				<Columns.Column className="has-text-centered">
					<p>asdfsadf</p>
				</Columns.Column>
			</Columns>
		</Footer>
	);
};

export { HeroFooter, LandingFooter };

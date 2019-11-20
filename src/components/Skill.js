import React from "react";
import { Section, Container, Heading, Columns } from "react-bulma-components";

function Skill() {
	return (
		<Section size="medium">
			<Container renderAs="section">
				<Heading className="has-text-centered">Skills</Heading>

				<div className="icons">
					<i className="fas fa-cloud fa-5x"></i>
				</div>
				<div className="icons">
					<i className="fas fa-dollar-sign fa-5x"></i>
				</div>
				<div className="icons">
					<i className="fas fa-cogs fa-5x"></i>
				</div>
				<div className="icons">
					<i className="fas fa-code fa-5x"></i>
				</div>
				<div className="icons">
					<i className="fas fa-database fa-5x"></i>
				</div>
				<div className="icons">
					<i className="fas fa-mobile-alt fa-5x"></i>
				</div>
			</Container>
		</Section>
	);
}

export default Skill;

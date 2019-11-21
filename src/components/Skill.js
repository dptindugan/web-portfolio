import React from "react";
import { Section, Heading, Columns, Box } from "react-bulma-components";
import { Container, Row, Col } from "react-bootstrap";

function Skill() {
	return (
		<Section size="medium">
			<Container className="has-text-centered mx-auto">
				<Heading className="has-text-centered">Skills</Heading>
				<Row>
					<Col sm={12} md={4} className="skillSet">
						<div className="icons">
							<div className="is-centered">
								<i className="fas fa-code fa-5x"></i>
							</div>
						</div>
						<Heading size={5}>Web Application Development</Heading>
					</Col>
					<Col sm={12} md={4} className="skillSet">
						<div className="icons">
							<i className="fas fa-mobile-alt fa-5x"></i>
						</div>
						<Heading size={5}>Mobile Responsive Web App</Heading>
					</Col>

					<Col sm={12} md={4} className="skillSet">
						<div className="icons">
							<i className="fas fa-cogs fa-5x"></i>
						</div>
						<Heading size={5}>
							API Integration & Development
						</Heading>
					</Col>

					<Col sm={12} md={4} className="skillSet">
						<div className="icons">
							<i className="fas fa-cloud fa-5x"></i>
						</div>
						<Heading size={5}>Cloud Integration</Heading>
					</Col>
					<Col sm={12} md={4} className="skillSet">
						<div className="icons">
							<i className="fas fa-database fa-5x"></i>
						</div>
						<Heading size={5}>Database Design</Heading>
					</Col>

					<Col sm={12} md={4} className="skillSet">
						<div className="icons">
							<i className="fas fa-dollar-sign fa-5x"></i>
						</div>
						<Heading size={5}>Payment Gateway Integration</Heading>
					</Col>
				</Row>
			</Container>
		</Section>
	);
}

export default Skill;

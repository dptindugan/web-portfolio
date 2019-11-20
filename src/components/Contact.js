import React from "react";
import { Section, Container, Heading, Columns } from "react-bulma-components";

const Contact = () => {
	return (
		<Container renderAs="section" className="has-text-centered">
			<Columns>
				<Columns.Column>
					<Heading>Contact Us</Heading>
					<form>
						<div className="field">
							<label for="name" className="label has-text-light">
								Name
							</label>
							<div className="control">
								<input
									id="name"
									className="input"
									type="text"
								/>
							</div>
						</div>

						<div className="field">
							<label for="email" className="label has-text-light">
								Email
							</label>
							<div className="control">
								<input
									id="email"
									className="input"
									type="email"
								/>
							</div>
						</div>

						<div className="field">
							<label for="email" className="label has-text-light">
								Message
							</label>
							<div className="control">
								<textarea
									id="email"
									className="textarea"
									placeholder="Input Message Here"
								></textarea>
							</div>
						</div>
					</form>
				</Columns.Column>
				<Columns.Column>
					<iframe
						id="gmap"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9176.096254712369!2d121.0412875469964!3d14.76490467552928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397afd7ec8311e5%3A0x842e471e4d44d2d0!2sCamarin!5e0!3m2!1sen!2sph!4v1574221313953!5m2!1sen!2sph"
						frameborder="0"
						style={{ border: 0 }}
						allowfullscreen
					></iframe>
				</Columns.Column>
			</Columns>
		</Container>
	);
};

export default Contact;

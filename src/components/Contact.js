import React, { useState } from "react";
import {
	Container,
	Heading,
	Columns,
	Button,
	Hero
} from "react-bulma-components";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

// import { HeroFooter } from "./Footer";

const Contact = props => {
	const [state, setState] = useState({
		name: "",
		email: "",
		message: ""
	});

	const onChangeHandler = e => {
		let value = e.target.value;
		setState({
			...state,
			[e.target.id]: value
		});
	};

	const onSubmitHandler = e => {
		e.preventDefault();
		// console.log(state);
		let templateParams = {
			from_name: state.name,
			from_email: state.email,
			message_html: state.message
		};

		console.log("hello");

		emailjs
			.send(
				"dptindugan_gmail",
				"getintouch_qhPzsJBy",
				templateParams,
				"user_PBcr31VQFsgzszXxqQsld"
			)
			.then(
				result => {
					Swal.fire(
						"I got your message. I'll get back to you as soon as possible. Thanks!"
					).then(() => {
						setState({
							name: "",
							email: "",
							message: ""
						});
						// window.location.href =
						// "https://dptindugan-portfolio.herokuapp.com";
					});
				},
				error => {
					console.log(error.text);
				}
			);
	};

	return (
		<Hero.Body>
			<Container renderAs="section" className="has-text-centered">
				<Columns>
					<Columns.Column>
						<Heading>Contact Us</Heading>
						<form onSubmit={onSubmitHandler}>
							<div className="field">
								<label
									htmlFor="name"
									className="label has-text-light"
								>
									Name
								</label>
								<div className="control">
									<input
										id="name"
										className="input"
										type="text"
										onChange={onChangeHandler}
									/>
								</div>
							</div>

							<div className="field">
								<label
									htmlFor="email"
									className="label has-text-light"
								>
									Email
								</label>
								<div className="control">
									<input
										id="email"
										className="input"
										type="email"
										onChange={onChangeHandler}
									/>
								</div>
							</div>

							<div className="field">
								<label
									htmlFor="email"
									className="label has-text-light"
								>
									Message
								</label>
								<div className="control">
									<textarea
										id="message"
										className="textarea"
										placeholder="Input Message Here"
										onChange={onChangeHandler}
									></textarea>
								</div>
							</div>
							<Button color="primary" fullwidth>
								Send
							</Button>
						</form>
					</Columns.Column>
					<Columns.Column>
						<iframe
							id="gmap"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9176.096254712369!2d121.0412875469964!3d14.76490467552928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397afd7ec8311e5%3A0x842e471e4d44d2d0!2sCamarin!5e0!3m2!1sen!2sph!4v1574221313953!5m2!1sen!2sph"
							frameBorder="0"
							style={{ border: 0 }}
							allowFullScreen
							title="gmap"
						></iframe>
					</Columns.Column>
				</Columns>
			</Container>
		</Hero.Body>
	);
};

const ContactFooter = () => {
	return (
		<form>
			<Heading>Contact Us</Heading>
			<div className="field">
				<div className="control">
					<input
						id="name"
						className="input"
						type="text"
						placeholder="Name"
					/>
				</div>
			</div>

			<div className="field">
				<div className="control">
					<input
						id="email"
						className="input"
						type="email"
						placeholder="Email"
					/>
				</div>
			</div>

			<div className="field">
				<label htmlFor="message" className="label">
					Message
				</label>
				<div className="control">
					<textarea
						id="message"
						className="textarea"
						placeholder="Input Message Here"
					></textarea>
				</div>
			</div>
			<Button color="primary" fullwidth>
				Send
			</Button>
		</form>
	);
};

export { Contact, ContactFooter };

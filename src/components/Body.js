import React, { useState, useEffect } from "react";
import {
	Container,
	Columns,
	Card,
	Content,
	Heading,
	Image,
	Section,
	Hero,
	Box,
	Button
} from "react-bulma-components";
import { HeroFooter } from "./Footer";

const Body = () => {
	return (
		<Section medium className="has-text-centered" id="portfolio">
			<Heading>Porfolio</Heading>
			<Heading renderAs="h2" subtitle className="has-text-grey">
				Here is some of my work
			</Heading>

			<Container>
				<Columns>
					<Columns.Column>
						<Card>
							<Card.Image size="4by3" src="..." alt="...">
								imsadf
							</Card.Image>
							<Card.Content>
								<Content>
									<p className="has-text-grey">
										A static website built with CSS3, HTML,
										HTML5, and Bootstrap 4
									</p>
								</Content>
							</Card.Content>
							<Card.Footer>
								<Card.Footer.Item
									renderAs="a"
									href="https://dptindugan.gitlab.io/mind-palace "
								>
									View
								</Card.Footer.Item>
							</Card.Footer>
						</Card>
					</Columns.Column>
					<Columns.Column>
						<Card>
							<Card.Image size="4by3" src="..." alt="...">
								imsadf
							</Card.Image>
							<Card.Content>
								<Content>
									<p className="has-text-grey">
										An asset management web application with
										CRUD functionality created with
										PHP/Laravel Framework, CSS3, HTML,
										HTML5, and MySQL
									</p>
								</Content>
							</Card.Content>
							<Card.Footer>
								<Card.Footer.Item
									renderAs="a"
									href="https://seierherre-industries.herokuapp.com/"
								>
									View
								</Card.Footer.Item>
							</Card.Footer>
						</Card>
					</Columns.Column>
					<Columns.Column>
						<Card>
							<Card.Image size="4by3" src="..." alt="...">
								imsadf
							</Card.Image>
							<Card.Content>
								<Content>
									<p className="has-text-grey">
										A booking management web application
										created with MongoDB, Express, React,
										Node and GraphQL (MERNG stack)
									</p>
								</Content>
							</Card.Content>
							<Card.Footer>
								<Card.Footer.Item
									renderAs="a"
									href="https://glacial-garden-53824.herokuapp.com/"
								>
									View
								</Card.Footer.Item>
							</Card.Footer>
						</Card>
					</Columns.Column>
				</Columns>
			</Container>
		</Section>
	);
};

const ProjectCarousel = props => {
	const images = [
		"/images/sbLogo.png",
		"/images/dog.jpg",
		"/images/1364.jpg"
	];

	useEffect(() => {
		console.log(`this is the value of index: ${index}`);
	});

	const [index, setIndex] = useState(0);

	console.log("the array length of images is: " + images.length);

	const nextImageHandler = () => {
		console.log("selecting next image...");
		// setIndex(index + 1);

		// ternary operator
		// condition ? true : false
		// condition ? if : else
		/*
			if(index === images.length - 1) {
				true
				setIndex(0)
			} else {
				false
				setIndex(index+1)
			}
		*/
		// console.log(index);
		index === images.length - 1 ? setIndex(0) : setIndex(index + 1);
	};

	const previousImageHandler = () => {
		console.log("selecting previous image...");
		// console.log(index);
		// setIndex(index - 1);
		index <= 0 ? setIndex(images.length - 1) : setIndex(index - 1);
	};
	// const timer = () => {
	// 	console.log("selecting previous image...");
	// 	setIndex(index + 1);
	// };

	// setInterval(timer, 2000);

	// console.log(index);

	return (
		<Hero size="fullheight" color="info" gradient>
			<Hero.Body>
				<Container>
					<img
						style={{
							width: "100px",
							height: "100px"
						}}
						src={images[index]}
						alt="react carousel"
					/>
					<Box>
						<Button
							onClick={previousImageHandler}
							color="dark"
							outlined={true}
						>
							Previous
						</Button>
						<Button
							onClick={nextImageHandler}
							color="primary"
							outlined={false}
						>
							Next
						</Button>
					</Box>
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

export { Body, ProjectCarousel };

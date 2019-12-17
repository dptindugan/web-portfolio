import React from "react";
import { Tabs, Hero } from "react-bulma-components";
import { Link } from "react-router-dom";
const NavBar = props => {
	return (
		<Hero.Footer className="myNavbarContainer">
			<Tabs
				type="boxed"
				fullwidth={true}
				align="centered"
				color="transparent"
				id="myNavbar"
			>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>

					<li>
						<Link to="/about">About</Link>
					</li>

					<li>
						<Link to="/projects">Projects</Link>
					</li>

					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</Tabs>
		</Hero.Footer>
	);

	/*
		<Navbar color="primary" active={false} transparent={false}>
			<Navbar.Brand>
				<Navbar.Item renderAs="a" onClick={props.home}>
					Home
				</Navbar.Item>
				<Navbar.Burger />
			</Navbar.Brand>
			<Navbar.Menu>
				<Navbar.Container>
					<Navbar.Item onClick={props.project}>Projects</Navbar.Item>
				</Navbar.Container>
				<Navbar.Container position="end">
					<Navbar.Item dropdown hoverable href="#">
						<Navbar.Link arrowless={false}>About</Navbar.Link>
						<Navbar.Dropdown>
							<Navbar.Item onClick={props.about}>
								FAQS
							</Navbar.Item>
							<Navbar.Item onClick={props.contact}>
								Contact Us
							</Navbar.Item>
						</Navbar.Dropdown>
					</Navbar.Item>
				</Navbar.Container>
			</Navbar.Menu>
		</Navbar>
	*/
};

export default NavBar;

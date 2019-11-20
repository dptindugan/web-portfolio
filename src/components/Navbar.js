import React from "react";
import { Navbar, Box } from "react-bulma-components";
const Nav = props => {
	return (
		<Navbar color="primary" active={false} transparent={false}>
			<Navbar.Brand>
				<Navbar.Item renderAs="a" onClick={props.home}>
					<img
						src="https://bulma.io/images/bulma-logo.png"
						alt="Bulma: a modern CSS framework based on Flexbox"
						width="112"
						height="28"
					/>
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
	);
};

export default Nav;

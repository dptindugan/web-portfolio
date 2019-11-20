import React from "react";
import {
	Container,
	Columns,
	Card,
	Content,
	Box,
	Tile,
	Heading,
	Image
} from "react-bulma-components";

const Body = () => {
	return (
		<Container>
			<Columns>
				<Columns.Column>
					<Card>
						<Card.Image size="4by3" src="..." alt="...">
							imsadf
						</Card.Image>
						<Card.Content>
							<Content>
								<p>al;sdjflksdjlk</p>
							</Content>
						</Card.Content>
						<Card.Footer>
							<Card.Footer.Item renderAs="a" href="#Yes">
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
								<p>al;sdjflksdjlk</p>
							</Content>
						</Card.Content>
						<Card.Footer>
							<Card.Footer.Item renderAs="a" href="#Yes">
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
								<p>al;sdjflksdjlk</p>
							</Content>
						</Card.Content>
						<Card.Footer>
							<Card.Footer.Item renderAs="a" href="#Yes">
								View
							</Card.Footer.Item>
						</Card.Footer>
					</Card>
				</Columns.Column>
			</Columns>
		</Container>
	);
};

export default Body;

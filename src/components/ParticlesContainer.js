import React from "react";
import Particles from "react-particles-js";

const particleOpt = {
	particles: {
		number: {
			value: 160,
			density: {
				enable: false
			}
		},
		size: {
			value: 10,
			random: true
		},
		move: {
			direction: "bottom",
			out_mode: "out"
		},
		line_linked: {
			enable: false
		}
	},
	interactivity: {
		events: {
			onclick: {
				enable: true,
				mode: "remove"
			}
		},
		modes: {
			remove: {
				particles_nb: 10
			}
		}
	}
};

const ParticlesContainer = () => {
	return <Particles params={particleOpt} />;
};

export default ParticlesContainer;

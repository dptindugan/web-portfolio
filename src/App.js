import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skill";

// import { Hero } from "react-bulma-components";

function App() {
  const [componentToShow, setComponentToShow] = useState("landing");

  const landingClickHandler = () => {
    setComponentToShow("landing");
  };

  const projectsClickHandler = () => {
    setComponentToShow("projects");
  };

  const contactClickHandler = () => {
    setComponentToShow("contact");
  };

  const aboutClickHandler = () => {
    setComponentToShow("about");
  };

  if (componentToShow === "landing") {
    return (
      <div className="App">
        <Header project={projectsClickHandler} />
        <Skills />
        <Body />
        <Contact />
        <Footer />
      </div>
    );
  } else if (componentToShow === "projects") {
    return (
      <div>
        <Navbar
          project={projectsClickHandler}
          home={landingClickHandler}
          about={aboutClickHandler}
          contact={contactClickHandler}
        />
        <Body />
        <Footer />
      </div>
    );
  } else if (componentToShow === "contact") {
    return (
      <div>
        <Navbar
          project={projectsClickHandler}
          home={landingClickHandler}
          about={aboutClickHandler}
          contact={contactClickHandler}
        />
        <Contact />
        <Footer />
      </div>
    );
  } else if (componentToShow === "about") {
    return (
      <div>
        <Navbar
          project={projectsClickHandler}
          home={landingClickHandler}
          about={aboutClickHandler}
          contact={contactClickHandler}
        />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;

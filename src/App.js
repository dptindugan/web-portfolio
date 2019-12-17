import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Body } from "./components/Body";
import NavBar from "./components/Navbar";
import { Hero } from "react-bulma-components";
import { AboutLanding } from "./components/About";
import { Contact } from "./components/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { NavBar } from "./components/Navbar";

// import { Hero } from "react-bulma-components";

function App() {
  return (
    <BrowserRouter>
      <Hero size="fullheight">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/about" component={AboutLanding} />
          <Route exact path="/projects" component={Body} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Hero>
    </BrowserRouter>
  );
  // const [componentToShow, setComponentToShow] = useState("landing");
  // const [landingComponent, setLandingComponent] = useState("profile");
  // const projectsTabHandler = () => {
  //   setLandingComponent("projects");
  // };
  // const aboutTabHandler = () => {
  //   setLandingComponent("about");
  // };
  // const profileTabHandler = () => {
  //   setLandingComponent("profile");
  // };
  // const contactTabHandler = () => {
  //   setLandingComponent("contact");
  // };
  // const landingClickHandler = () => {
  //   setComponentToShow("landing");
  // };
  // const projectsClickHandler = () => {
  //   setComponentToShow("projects");
  // };
  // const contactClickHandler = () => {
  //   setComponentToShow("contact");
  // };
  // const aboutClickHandler = () => {
  //   setComponentToShow("about");
  // };
  // if (componentToShow === "landing") {
  //   if (landingComponent === "profile") {
  //     return (
  //       <div className="App">
  //         <Header
  //           project={projectsClickHandler}
  //           aboutTab={aboutTabHandler}
  //           projectsTab={projectsTabHandler}
  //           contactTab={contactTabHandler}
  //           profileTab={profileTabHandler}
  //         />
  //         <Skills />
  //         <Body />
  //         <AboutLanding />
  //         <LandingFooter />
  //       </div>
  //     );
  //   } else if (landingComponent === "about") {
  //     return (
  //       <div className="App">
  //         <About
  //           project={projectsClickHandler}
  //           aboutTab={aboutTabHandler}
  //           projectsTab={projectsTabHandler}
  //           contactTab={contactTabHandler}
  //           profileTab={profileTabHandler}
  //         />
  //         <Skills />
  //         <Body />
  //         <AboutLanding />
  //         <LandingFooter />
  //       </div>
  //     );
  //   } else if (landingComponent === "projects") {
  //     return (
  //       <div>
  //         <ProjectCarousel
  //           project={projectsClickHandler}
  //           aboutTab={aboutTabHandler}
  //           projectsTab={projectsTabHandler}
  //           contactTab={contactTabHandler}
  //           profileTab={profileTabHandler}
  //         />
  //         <Skills />
  //         <Body />
  //         <AboutLanding />
  //         <LandingFooter />
  //       </div>
  //     );
  //   } else if (landingComponent === "contact") {
  //     return (
  //       <div>
  //         <Contact
  //           project={projectsClickHandler}
  //           aboutTab={aboutTabHandler}
  //           projectsTab={projectsTabHandler}
  //           contactTab={contactTabHandler}
  //           profileTab={profileTabHandler}
  //         />
  //         <Skills />
  //         <Body />
  //         <AboutLanding />
  //         <LandingFooter />
  //       </div>
  //     );
  //   }
  // } else if (componentToShow === "projects") {
  //   return (
  //     <div>
  //       <Navbar
  //         project={projectsClickHandler}
  //         home={landingClickHandler}
  //         about={aboutClickHandler}
  //         contact={contactClickHandler}
  //       />
  //       <Body />
  //       <HeroFooter />
  //     </div>
  //   );
  // } else if (componentToShow === "contact") {
  //   return (
  //     <div>
  //       <Navbar
  //         project={projectsClickHandler}
  //         home={landingClickHandler}
  //         about={aboutClickHandler}
  //         contact={contactClickHandler}
  //       />
  //       <Contact />
  //       <HeroFooter />
  //     </div>
  //   );
  // } else if (componentToShow === "about") {
  //   return (
  //     <div>
  //       <Navbar
  //         project={projectsClickHandler}
  //         home={landingClickHandler}
  //         about={aboutClickHandler}
  //         contact={contactClickHandler}
  //       />
  //       <About />
  //       <HeroFooter />
  //     </div>
  //   );
  // }
}

export default App;

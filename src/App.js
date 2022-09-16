import React from "react";
import "./component/App.css";
import Gallary from "./component/Gallary";
import Education from "./component/Education";
import Home from "./component/Home";
import Information from "./component/Information";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Hobbies from "./component/Hobbies";
import Favourites from "./component/Favourites";
import About from "./component/About";
function App() {
  return (
    <div>
      <Nav />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <div className="screen">
        <Home />
        <Information />
        <br />
        <Education />
        <Skills />
        <Hobbies />
        <Favourites />
        <Gallary />
        <Contact />
        <About />
      </div>
     <br/>
      
    <Footer />
    </div>
  );
}

export default App;

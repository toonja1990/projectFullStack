//import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
//import './css/styles.css';
import '../styles/styles.css';
import Intro from "./Intro"; 
import Skill from "./Skill";
import Portfolio from "./Portfolio";
import About from "./About";
import Team from "./Team";
import Contact from "./Contact";
import member1 from '../assests/img/team/team-1.jpg'; // Tell webpack this JS file uses this image

function App2() {
 return (
  
<main className="main">

<Heading />
     <Intro />
     <About />
     <Skill />
     <Portfolio />
     <Team />
     <Contact />
     
     <Footer />
  </main>
   
   
 );
}
export default App2;

/*<Profile />

  <Heading />
     <Intro />
     <About />
     <Skill />
     <Portfolio />
     <Team />
     <Contact />
     
     <Footer />
     
     */
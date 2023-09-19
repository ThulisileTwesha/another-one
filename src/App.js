
import "./App.scss";
import Anav from "./components/navbar";
import Home from "./components/home";
import  About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/Projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Education from "./components/education";
import Footer from "./components/footer";

function App() {
  return (
    <div className="text-center">
      <Anav />
      <Home />
      <About />
      <Experience/>
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
      
    </div>
  );
}

export default App;

import Header from './components/Header';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import './App.css';

const App = () => (
  <div>
    <Header />
    <div className="content">
      <section id="home">
        <LandingPage />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="project1">
        <Project1 />
      </section>
      <section id="project2">
        <Project2 />
      </section>
      <section id="project3">
        <Project3 />
      </section>
    </div>
  </div>
);

export default App;

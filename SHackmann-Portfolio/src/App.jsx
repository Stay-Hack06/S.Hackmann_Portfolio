import Header from './components/Header';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

const App = () => (
  <div>
    <Header />
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
  </div>
);

export default App;

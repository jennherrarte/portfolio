import './HomePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from '../../components/AboutMe/AboutMe'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact'

const HomePage = () => {
  return (     
    <div className="HomePage">
      <header className="HomePage-header">
        <NavBar/>
      </header>
      <main>
        <AboutMe/>
        <Projects/>
        <hr></hr>
        <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default HomePage;

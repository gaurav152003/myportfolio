
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact';
import Footer from './pages/Footer';


function App() {


  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About/>
      <Projects />
      <Contact />
      <Footer/>
      
    </div>
  );
}

export default App;

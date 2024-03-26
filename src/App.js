import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Home />
        <About/>
        <Projects/>
        <Resume/>
        <Contact/>
    </BrowserRouter>
  );
}

export default App;

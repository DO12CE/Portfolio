import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {Bts} from "./components/Bts";
import {CDA} from "./components/CDA";
import {SSI} from "./components/SSI";
import {Veille} from "./components/Veille";
import { Stage } from './components/Stage';


function App() {
  return (
    <div className="App">
      
      <NavBar />
      <div>
      <Banner />
      
      <Skills />
      </div>
      <div><Bts/></div>
      <div><Projects /></div>
      <Stage/>
      <SSI/>
      <CDA/>
      <Veille/> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
